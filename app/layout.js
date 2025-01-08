import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GoogleTagManager } from '@next/third-parties/google';
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata = {
  title: 'Ad Loodgietersbedrijf',
  description: 'Professionele loodgietersdiensten in regio Utrecht.',
  openGraph: {
    title: 'Ad Loodgietersbedrijf',
    description: 'Uw betrouwbare loodgieters in Utrecht en omstreken.',
    url: 'https://www.adloodgietersbedrijf.nl',
    siteName: 'Ad Loodgietersbedrijf',
    images: [
      {
        url: 'https://www.adloodgietersbedrijf.nl/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ad Loodgietersbedrijf Open Graph Image',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adloodgieter',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="nl">
    <GoogleTagManager gtmId="GTM-57S9L8VS" />
    <body className="bg-gray-50 text-gray-800">
    <Navbar />
    <main className="container max-w-full mx-auto max-sm:w-full max-sm:max-w-screen-sm">
      {children}
    </main>
    <WhatsAppButton />
    <Footer />
    </body>
    </html>
  );
}
