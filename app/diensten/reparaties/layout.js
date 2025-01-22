import Head from 'next/head';

export const metadata = {
  title: 'Reparaties - AD Loodgietersbedrijf',
  description: 'Snelle en vakkundige reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'Reparaties, loodgieter Utrecht, leidingen repareren, Utrecht, Amersfoort, Nieuwegein',
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
              "name": "Reparaties",
              "description": "Snelle en vakkundige reparaties aan leidingen en verwarmingssystemen in Utrecht en omgeving.",
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
              "serviceType": "Reparaties",
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
