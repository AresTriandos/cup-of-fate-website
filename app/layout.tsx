import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cup of Fate - AI Coffee Fortune Telling',
  description:
    'Discover your fortune through the ancient art of tasseography powered by AI. Analyze your coffee grounds and receive personalized fortune readings.',
  keywords: [
    'tasseography',
    'coffee reading',
    'fortune telling',
    'AI',
    'app',
    'iOS',
  ],
  authors: [{ name: 'Cup of Fate' }],
  openGraph: {
    title: 'Cup of Fate - AI Coffee Fortune Telling',
    description:
      'Discover your fortune through the ancient art of tasseography powered by AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
