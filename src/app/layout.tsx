import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Background } from '@/components/ui/background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aqil Aswangga Anggaraksa's Portfolio",
  description: 'A personal portfolio for Aqil Aswangga Anggaraksa, a software developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        <Background />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
