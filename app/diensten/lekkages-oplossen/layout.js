import Head from 'next/head';

export const metadata = {
  title: 'Lekkages Oplossen - AD Loodgietersbedrijf',
  description: 'Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'Lekkages Oplossen, loodgieter Utrecht, lekkage repareren, Utrecht, Amersfoort, Nieuwegein',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Lekkages Oplossen",
              "description": "Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht en omgeving.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "AD-Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Spechtenkamp 334",
                  "addressLocality": "Maarssen",
                  "postalCode": "3607 KT",
                  "addressCountry": "NL",
                },
              },
              "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
              "serviceType": "Lekkages Oplossen",
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
