import React from 'react';
import { Inter } from 'next/font/google';
import '../styles/index.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Tingli - изучать язык проще, чем кажется',
  description:
    'Платформа для эффективного изучения языков, разработанная в рамках образовательного направления компании РВБ (Объединенная компания Wildberries & Russ)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} bg-global-2`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Tingli" />
      </head>
      <body className={`${inter.className} bg-global-2`}>{children}</body>
    </html>
  );
}
