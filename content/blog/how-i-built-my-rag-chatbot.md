---
title: "How I built a RAG chatbot for my portfolio"
date: "2026-07-20"
excerpt: "A short note on embeddings, Supabase vector search, and Groq — and why answering from your own writing beats a generic LLM."
---

Visitors to a portfolio often ask the same questions: what have you built, what can you do, how do they reach you. A chatbot can answer those — but only if it is grounded in real context.

## The idea

I stored short chunks about my projects, skills, and experience in Supabase. When someone asks a question, the app embeds it, finds the closest chunks, and passes them to an LLM as context.

That is classic RAG: **Retrieve**, **Augment**, **Generate**.

## The stack

- **Embeddings:** Hugging Face `all-MiniLM-L6-v2`
- **Vector store:** Supabase with a `match_documents` RPC
- **Generation:** Groq (`llama-3.3-70b-versatile`)

Contact info stays in the system prompt so email and location are never lost when retrieval misses.

## What I learned

Retrieval quality matters more than model size. A clear knowledge file and a sensible similarity threshold did more for answer quality than swapping models.
