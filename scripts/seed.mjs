// Why .mjs? Node.js needs ESM syntax (import/export) for @xenova/transformers.
// Run this ONCE to populate your Supabase table: node scripts/seed.mjs

import { createClient } from '@supabase/supabase-js';
import { pipeline } from '@xenova/transformers';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load env vars manually (dotenv alternative for scripts)
import { config } from 'dotenv';
config({ path: '.env.local' });

const __dirname = dirname(fileURLToPath(import.meta.url));

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// --- STEP 1: Load your knowledge base ---
const filePath = join(__dirname, '../data/portfolio.txt');
const rawText = readFileSync(filePath, 'utf-8');

// --- STEP 2: Chunk the text ---
// Why chunk? LLMs have context limits. Smaller chunks also improve retrieval precision —
// a 2-sentence chunk about "Afia chatbot" will score higher for chatbot questions
// than a page-long doc that mentions it once.
function chunkText(text, chunkSize = 300, overlap = 50) {
  const words = text.split(/\s+/);
  const chunks = [];

  for (let i = 0; i < words.length; i += chunkSize - overlap) {
    const chunk = words.slice(i, i + chunkSize).join(' ');
    if (chunk.trim().length > 0) {
      chunks.push(chunk);
    }
  }

  return chunks;
}

const chunks = chunkText(rawText);
console.log(`📄 Created ${chunks.length} chunks from portfolio.txt`);

// --- STEP 3: Load embedding model ---
console.log('⏳ Loading embedding model (first run takes ~30s to download)...');
const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
console.log('✅ Model loaded');

// --- STEP 4: Embed each chunk and upsert to Supabase ---
// Why clear first? Re-running the script won't create duplicates.
const { error: clearError } = await supabase.from('documents').delete().neq('id', 0);
if (clearError) {
  console.error('Failed to clear table:', clearError);
  process.exit(1);
}
console.log('🗑  Cleared existing documents');

for (let i = 0; i < chunks.length; i++) {
  const chunk = chunks[i];

  // Generate embedding for this chunk
  const output = await embedder(chunk, { pooling: 'mean', normalize: true });
  const embedding = Array.from(output.data);

  // Insert into Supabase
  const { error } = await supabase.from('documents').insert({
    content: chunk,
    embedding: embedding,
  });

  if (error) {
    console.error(`Failed to insert chunk ${i}:`, error);
  } else {
    console.log(`✅ Inserted chunk ${i + 1}/${chunks.length}`);
  }
}

console.log('\n🚀 Seed complete! Your RAG knowledge base is ready.');