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
    // CONTACT INFO is hardcoded here because it's critical data users always need,
    // and it may not be retrieved from the vector DB during every relevant query.
    const contactInfo = `CONTACT INFO (always answer with this when asked about contacting Ravi):
- Email: ravikumarmamidi27@gmail.com
- Location: Hyderabad, India
- Availability: Open for freelance projects, internships, and full-time software engineering roles starting 2026
- Preferred roles: Full-stack developer, AI/ML engineer, frontend engineer, software development engineer`;

    const basePrompt = `You are Ravi's AI assistant on his portfolio website. Your job is to help visitors learn about Ravi Kumar Mamidi.

${contactInfo}

RULES:
- Answer questions about Ravi. Use the context below when it's relevant.
- If the context doesn't cover a specific question, say so honestly but still answer using what you know from the contact info above.
- ALWAYS provide Ravi's email (ravikumarmamidi27@gmail.com) when asked how to contact him, reach him, or send him a message.
- Be enthusiastic and confident. Provide specific details like tech stacks, features, and locations.
- Keep answers concise but informative — aim for 2-5 sentences unless asked for more detail.
- When asked about skills, list them grouped by category.
- When asked about projects, mention the tech stack and key features.
- When asked about availability, say he's available for freelance, internships, and full-time roles from 2026.
- Use a friendly, helpful tone. You're representing Ravi's work.`;

    const systemPrompt = context
      ? `${basePrompt}

Additional context about Ravi's projects, skills, and experience:
${context}`
      : `${basePrompt}

(No additional context was found for this specific question. Answer based on the rules above.)`;

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