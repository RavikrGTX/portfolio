export async function embed(text) {
  const token = process.env.HUGGINGFACE_API_KEY?.trim();

  if (!token) {
    throw new Error('Missing HUGGINGFACE_API_KEY');
  }

  const model = 'sentence-transformers/all-MiniLM-L6-v2';
  const response = await fetch(
    `https://router.huggingface.co/hf-inference/models/${model}/pipeline/feature-extraction`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
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
