import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Name',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
