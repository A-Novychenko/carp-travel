import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/sections/Header/Header';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Carp Travel',
  description:
    'Welcome to the world of CarpTravel! We are a community of passionate carp fishing enthusiasts, offering unique tips, techniques, gear reviews, and camaraderie for anglers of all levels. Discover the best carp fishing spots, the latest gear, helpful advice, and much more. Join our CarpTravel community and dive into the fascinating world of carp fishing.',
  openGraph: {
    title: 'Uncover Carpathian’s Secrets',
    description:
      'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
    url: 'https://carp-travel-gamma.vercel.app',
    siteName: 'Carp Travel',
    locale: 'en-UA',
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
