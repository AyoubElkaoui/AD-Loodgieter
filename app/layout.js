import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GoogleTagManager } from '@next/third-parties/google';
import WhatsAppButton from "@/components/WhatsappButton";
import Head from "next/head";
import Link from "next/link";
import ParallaxWrapper from '@/components/ParallaxWrapper';

export const metadata = {
  title: 'Loodgieter Maarssen | 24/7 Spoedservice & Installaties',
  description: 'Uw betrouwbare loodgieter voor Maarssen en omgeving. Wij lossen lekkages, verstoppingen en installaties snel en professioneel op. Bel nu!',
  keywords: 'loodgieter, Maarssen, Utrecht, lekkages, ontstoppingen, installaties, 24/7 spoedservice, cv-ketel onderhoud, waterleiding reparatie, sanitair installatie, lekkage opsporen, afvoer ontstoppen, spoed loodgieter, badkamer renovatie, riool ontstoppen, kraan vervangen, verwarmingsmonteur, daklekkage, loodgieter Utrecht, loodgietersbedrijf',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Loodgieter Maarssen | AD-Loodgietersbedrijf',
    description: 'Uw loodgietersbedrijf in Maarssen en Utrecht. 24/7 hulp bij lekkages, verstoppingen en installaties.',
    url: 'https://www.adloodgietersbedrijf.nl',
    site_name: 'AD Loodgietersbedrijf',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'AD Loodgietersbedrijf Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AD_Loodgieter',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="canonical" href="https://adloodgietersbedrijf.nl" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AD-Loodgietersbedrijf",
            "url": "https://adloodgietersbedrijf.nl",
            "telephone": "+31640961848",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Spechtenkamp 334",
              "addressLocality": "Maarssen",
              "postalCode": "3607 KT",
              "addressCountry": "NL",
            },
            "image": "https://adloodgietersbedrijf.nl/images/hero.webp",
            "priceRange": "€€",
            "openingHours": ["Mo-Su 00:00-23:59"],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.1319,
              "longitude": 5.0419,
            },
            "sameAs": [
              "https://www.facebook.com/adloodgietersbedrijf",
              "https://www.instagram.com/adloodgietersbedrijf",
            ],
          }),
        }}
      />
    </Head>
    <GoogleTagManager async gtmId="GTM-57S9L8VS" />
    <body className="bg-gray-50 text-gray-800">
    <Navbar />
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
