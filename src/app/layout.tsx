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
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: 'Tingli - изучать язык проще, чем кажется',
  description:
    'Платформа для эффективного изучения языков, разработанная в рамках образовательного направления компании РВБ (Объединенная компания Wildberries & Russ). Изучайте языки с помощью инновационных технологий и персонализированного подхода.',
  keywords:
    'изучение языков, платформа обучения, Tingli, иностранные языки, онлайн образование, языковые курсы, РВБ, Wildberries',
  authors: [{ name: 'РВБ (Объединенная компания Wildberries & Russ)' }],
  creator: 'РВБ (Объединенная компания Wildberries & Russ)',
  publisher: 'РВБ (Объединенная компания Wildberries & Russ)',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://tingli.ru',
  },
  openGraph: {
    title: 'Tingli - изучать язык проще, чем кажется',
    description:
      'Платформа для эффективного изучения языков с инновационными технологиями и персонализированным подходом.',
    url: 'https://tingli.ru',
    siteName: 'Tingli',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tingli - платформа для изучения языков',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tingli - изучать язык проще, чем кажется',
    description:
      'Платформа для эффективного изучения языков с инновационными технологиями.',
    images: ['/opengraph-image.jpg'],
    creator: '@tingli_app',
    site: '@tingli_app',
  },
  category: 'education',
  classification: 'educational software',
  other: {
    'application-name': 'Tingli',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Tingli',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#f7f6f9',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#f7f6f9',
  },
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
