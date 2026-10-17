# Nova AI Complete Starter

A polished Next.js starter with a demo chat UI, image concept studio, creator tools, and a premium membership preview.

## Run on Windows
1. Install Node.js LTS from https://nodejs.org/ if it is not already installed.
2. Extract this ZIP to a normal folder.
3. Open that folder, click the address bar in File Explorer, type `cmd`, and press Enter.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

## Important limitations
- Chat runs in local demo mode and does not require a paid API key. It is a simple demo responder, not a real language model.
- Image studio makes a prompt concept card, not a real generated image.
- Premium is a UI preview only. It does not take payments or create real subscriptions.
- To launch commercially, connect a server-side AI provider, image-generation provider, authentication/database, and a payment gateway available in your country. Never expose API keys in browser code or commit `.env.local`.

## API key
If you connect an AI provider later, copy `.env.example` to `.env.local` and set your server-side key there. Use only a provider/account whose terms and billing you understand.
