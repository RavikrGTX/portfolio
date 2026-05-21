import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

const __dirname = dirname(fileURLToPath(import.meta.url));
const requiredEnv = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'HUGGINGFACE_API_KEY',
];

const missingEnv = requiredEnv.filter(key => !process.env[key]?.trim());

if (missingEnv.length > 0) {
  console.error(`Missing required env values: ${missingEnv.join(', ')}`);
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL.trim(),
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.trim()
);

async function embed(text) {
  const model = 'sentence-transformers/all-MiniLM-L6-v2';
  const response = await fetch(
    `https://router.huggingface.co/hf-inference/models/${model}/pipeline/feature-extraction`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: text,
        options: { wait_for_model: true },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Hugging Face API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  const vector = Array.isArray(data[0]) ? data[0] : data;

  if (!Array.isArray(vector) || vector.some(value => typeof value !== 'number')) {
    throw new Error(`Unexpected Hugging Face response shape: ${JSON.stringify(data).slice(0, 300)}`);
  }

  return vector;
}

function chunkText(text, chunkSize = 150, overlap = 30) {
  const words = text.split(/\s+/);
  const chunks = [];

  for (let i = 0; i < words.length; i += chunkSize - overlap) {
    const chunk = words.slice(i, i + chunkSize).join(' ');
    if (chunk.trim().length > 0) chunks.push(chunk);
  }

  return chunks;
}

const filePath = join(__dirname, '../data/portfolio.txt');
const rawText = readFileSync(filePath, 'utf-8');
const chunks = chunkText(rawText);

console.log(`Created ${chunks.length} chunks from portfolio.txt`);
console.log('Connecting to Hugging Face API...');

let failed = false;
const documents = [];

for (let i = 0; i < chunks.length; i++) {
  const chunk = chunks[i];

  try {
    const embedding = await embed(chunk);
    documents.push({
      content: chunk,
      embedding,
    });

    console.log(`Embedded chunk ${i + 1}/${chunks.length}`);
  } catch (err) {
    failed = true;
    console.error(`Embedding failed for chunk ${i + 1}/${chunks.length}:`, err.message);
  }
}

if (failed) {
  console.error('\nSeed failed. Fix the errors above and run it again.');
  process.exit(1);
}

const { error: clearError } = await supabase.from('documents').delete().neq('id', 0);

if (clearError) {
  console.error('Failed to clear table:', clearError);
  process.exit(1);
}

console.log('Cleared existing documents');

const { error: insertError } = await supabase.from('documents').insert(documents);

if (insertError) {
  console.error('Failed to insert documents:', insertError);
  process.exit(1);
}

console.log(`Inserted ${documents.length} documents`);
console.log('\nSeed complete!');
