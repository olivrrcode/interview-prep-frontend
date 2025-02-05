import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '../components/providers';

const _inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interview Preparation App',
  description: 'Created by Oliver Atherton',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
