// Why an API route? The embedding model and Groq key must run on the SERVER.
// Never expose API keys or run heavy models in the browser.

import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { retrieveContext } from '@/lib/retriever';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const { messages } = await request.json();

    // messages = array of { role: 'user'|'assistant', content: string }
    // We use the LAST user message for retrieval
    const lastUserMessage = messages
      .filter((m) => m.role === 'user')
      .at(-1)?.content;

    if (!lastUserMessage) {
      return NextResponse.json({ error: 'No user message found' }, { status: 400 });
    }

    // --- RETRIEVAL ---
    // Embed the question, search Supabase, get relevant context
    const context = await retrieveContext(lastUserMessage);

    // --- AUGMENTATION ---
    // Build the system prompt with retrieved context injected.
    // This is the "A" in RAG — Augmented Generation.
    const systemPrompt = context
      ? `You are a helpful AI assistant on Ravi's portfolio website.
         Answer questions about Ravi using ONLY the context below.
         If the context doesn't cover the question, say so honestly.
         Keep answers concise and friendly.

         Context about Ravi:
         ${context}`
      : `You are a helpful AI assistant on Ravi's portfolio website.
         You don't have specific information about this question, but answer helpfully.`;

    // --- GENERATION ---
    // Use Groq's free tier — llama-3.3-70b is faster than GPT-4 and free.
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        // Send full conversation history so the LLM can handle follow-up questions
        ...messages,
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? 'Sorry, I could not generate a response.';

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}