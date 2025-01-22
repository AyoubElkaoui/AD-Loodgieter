import Head from 'next/head';

export const metadata = {
  title: 'WC Ontstoppen - AD Loodgietersbedrijf',
  description: 'Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'WC Ontstoppen, loodgieter Utrecht, verstopping oplossen, Utrecht, Amersfoort, Nieuwegein',
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
              "name": "WC Ontstoppen",
              "description": "Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht en omgeving.",
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
              "serviceType": "WC Ontstoppen",
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
