import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { prompt } = await req.json();
  if (!String(prompt || '').trim()) return NextResponse.json({ error: 'Please provide an image prompt.' }, { status: 400 });
  return NextResponse.json({ mode: 'demo', prompt: String(prompt), message: 'Connect an image generation provider to generate an actual image.' });
}
