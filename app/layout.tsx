import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Nova AI — Your creative copilot', description: 'AI chat, image ideas, and creator tools in one place.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
