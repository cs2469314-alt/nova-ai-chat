import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
try {
const body = await req.json();
const input = String(body?.message || '').trim();


if (!input) {
  return NextResponse.json(
    { reply: 'Please type a message first.' },
    { status: 400 }
  );
}

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  return NextResponse.json(
    { reply: 'Gemini API key missing. Check .env.local.' },
    { status: 500 }
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-3.8-flash',
  systemInstruction:
    'You are Nova AI. Answer helpfully and accurately. Reply in Roman Urdu when the user writes in Roman Urdu.'
});

const result = await model.generateContent(input);
const reply = result.response.text();

return NextResponse.json({ reply });


} catch (error) {
console.error('Nova AI error:', error);


return NextResponse.json(
  { reply: 'Nova AI error. Check the server terminal for details.' },
  { status: 500 }
);


}
}
