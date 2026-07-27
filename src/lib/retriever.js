// Why: Separating retrieval logic from the API route keeps each file focused.
// This file is the only place that talks to Supabase for vector search.

import { supabase } from './supabase.js';
import { embed } from './embeddings.js';

export async function retrieveContext(question) {
  // Step 1: Embed the user's question into the same 384-dim space as your documents.
  // This is the KEY insight — question and docs are in the same semantic space.
  const queryVector = await embed(question);

  // Step 2: Call the SQL function we created in Supabase.
  // It computes cosine similarity between queryVector and every stored vector,
  // returns the top 5 docs that score above 0.45.
  const { data, error } = await supabase.rpc('match_documents', {
    query_embedding: queryVector,
    match_threshold: 0.3,
    match_count: 6,
  });

  if (error) {
    console.error('Retrieval error:', error);
    return '';
  }

  if (!data || data.length === 0) {
    return ''; // No relevant context found — LLM will answer from general knowledge
  }

  // Step 3: Join retrieved chunks into a single context string.
  // Each chunk was originally a paragraph from portfolio.txt.
  return data.map((doc) => doc.content).join('\n\n');
}