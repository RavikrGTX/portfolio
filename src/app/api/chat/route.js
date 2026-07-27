import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { retrieveContext } from '@/lib/retriever';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

function loadPortfolioKnowledge() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'portfolio.txt');
    return fs.readFileSync(filePath, 'utf8').trim();
  } catch (error) {
    console.error('Failed to load portfolio.txt:', error);
    return '';
  }
}

const PORTFOLIO_KNOWLEDGE = loadPortfolioKnowledge();

export async function POST(request) {
  try {
    const { messages } = await request.json();

    const lastUserMessage = messages
      .filter((m) => m.role === 'user')
      .at(-1)?.content;

    if (!lastUserMessage) {
      return NextResponse.json({ error: 'No user message found' }, { status: 400 });
    }

    let retrieved = '';
    try {
      retrieved = await retrieveContext(lastUserMessage);
    } catch (error) {
      console.error('Retrieval failed, continuing with core portfolio knowledge:', error);
    }

    const systemPrompt = `You are the professional AI assistant on Ravi Kumar Mamidi's portfolio website. You represent Ravi accurately to recruiters, clients, and visitors.

VOICE AND TONE:
- Professional, clear, and confident.
- Concise: typically 3–6 sentences, or a short structured list when listing projects or skills.
- Never casual, never salesy fluff, never speculative language such as "likely", "probably", "I think", or "may have".
- Never invent projects, employers, skills, or dates that are not in the knowledge below.
- Do not say you lack details about his work when the knowledge below already covers the topic. Use that knowledge.

ANSWER GUIDELINES:
- When asked about projects: name specific projects, tech stacks, and one concrete capability or outcome each. Cover both personal/featured projects and client websites when relevant.
- When asked about skills: group by category (Frontend, Backend, AI/ML, Tools).
- When asked about experience or background: include education, internship, and freelance work from the knowledge.
- When asked about this website/portfolio: explain Next.js, dark mode, blog, contact form, and the RAG chatbot stack.
- When asked how to contact Ravi: always include ravikumarmamidi27@gmail.com, Hyderabad, India, and availability for freelance, internships, and full-time roles from 2026.
- If a question is outside Ravi's profile, say so briefly and offer related facts from the knowledge or suggest emailing him.

CORE PORTFOLIO KNOWLEDGE (authoritative — always use this):
${PORTFOLIO_KNOWLEDGE || 'Knowledge file unavailable. Share contact email ravikumarmamidi27@gmail.com and ask the visitor to follow up directly.'}

${retrieved ? `ADDITIONAL RETRIEVED PASSAGES (use to reinforce specifics when relevant):\n${retrieved}` : ''}`;

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: 700,
      temperature: 0.35,
    });

    const reply =
      completion.choices[0]?.message?.content ??
      'I could not generate a response right now. Please email ravikumarmamidi27@gmail.com.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
