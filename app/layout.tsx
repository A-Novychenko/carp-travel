import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/sections/Header/Header';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://carp-travel-n.vercel.app'),
  title: 'Carp Travel',
  description:
    'Welcome to the world of CarpTravel! We are a community of passionate carp fishing enthusiasts, offering unique tips, techniques, gear reviews, and camaraderie for anglers of all levels. Discover the best carp fishing spots, the latest gear, helpful advice, and much more. Join our CarpTravel community and dive into the fascinating world of carp fishing.',
  openGraph: {
    title: 'Uncover Carpathian’s Secrets',
    description:
      'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
    url: 'https://carp-travel-n.vercel.app',
    siteName: 'Carp Travel',
    locale: 'en-UA',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dkwbqq1n1/image/upload/v1703852350/asshguyosnrc03qhdo28.png',
        width: 1200,
        height: 630,
        alt: 'mountains',
      },
    ],
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
