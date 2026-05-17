// Why: Xenova runs the embedding model directly in Node.js, no API key needed.
// The pipeline is loaded once and cached — loading it takes ~2s the first time.

import { pipeline } from '@xenova/transformers';

let embedder = null;

async function getEmbedder() {
  if (!embedder) {
    // 'feature-extraction' means: turn text into a vector.
    // all-MiniLM-L6-v2 produces 384-dim vectors — small, fast, high quality.
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  }
  return embedder;
}

export async function embed(text) {
  const fn = await getEmbedder();

  // 'mean_pooling' + 'normalize' → one 384-number vector per input string.
  // Normalizing means the vector has length 1, so cosine similarity = dot product (faster).
  const output = await fn(text, { pooling: 'mean', normalize: true });

  // output.data is a Float32Array — convert to plain JS array for JSON serialisation.
  return Array.from(output.data);
}