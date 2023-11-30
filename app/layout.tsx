import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next';
import Head from 'next/head';
// import favicon from '../public/icon.png';

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
      {/* <Head>
        <link rel="shortcut icon" href={favicon} />
      </Head> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
