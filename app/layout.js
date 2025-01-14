import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GoogleTagManager } from '@next/third-parties/google';
import WhatsAppButton from "@/components/WhatsappButton";
import Head from "next/head";
import Link from "next/link";
import ParallaxWrapper from '@/components/ParallaxWrapper';

export const metadata = {
  title: 'Loodgieter Maarssen | Uw loodgieter in Maarssen en Nederland',
  description: 'AD-Loodgietersbedrijf is uw betrouwbare loodgieter voor Maarssen en omgeving. Wij lossen lekkages, verstoppingen en installaties op, snel en professioneel.',
  openGraph: {
    title: 'Loodgieter Maarssen | AD-Loodgietersbedrijf',
    description: 'Uw betrouwbare loodgieters in Maarssen, Utrecht, en heel Nederland.',
    url: 'https://www.adloodgietersbedrijf.nl',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ad Loodgietersbedrijf Logo',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="nl">
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <Link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"/>
    </Head>
    <GoogleTagManager async gtmId="GTM-57S9L8VS"/>
    <body className="bg-gray-50 text-gray-800">
    <Navbar/>
    <main className="container max-w-full mx-auto max-sm:max-w-screen-sm max-sm:max-h-screen-sm">
      <ParallaxWrapper>
        {children}
      </ParallaxWrapper>
    </main>
    <WhatsAppButton />
    <Footer />
    </body>
    </html>
  );
}
