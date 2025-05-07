import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { cn } from '@workspace/ui/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Image Editor',
};

// https://dribbble.com/shots/22179160-Image-Editor
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          'w-screen h-screen flex flex-col',
        )}
      >
        <ThemeProvider attribute={'class'} defaultTheme={'light'}>
          <Navbar />
          <div className={'w-full flex-1 pt-[70px]'}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
