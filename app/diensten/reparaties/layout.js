import Head from 'next/head';

export const metadata = {
  title: 'Reparaties - AD Loodgietersbedrijf',
  description: 'Snelle en vakkundige reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek onze 24/7 spoedservice met duurzame oplossingen.',
  keywords: 'Reparaties, loodgieter Utrecht, leidingen repareren, verwarmingssystemen, spoed reparatie, Amersfoort, Nieuwegein, duurzame reparatie',
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
              "description": "Snelle en vakkundige reparaties aan leidingen en verwarmingssystemen in Utrecht en omgeving, uitgevoerd door gecertificeerde professionals met duurzame oplossingen.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "AD-Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Spechtenkamp 334",
                  "addressLocality": "Maarssen",
                  "postalCode": "3607 KT",
                  "addressCountry": "NL"
                }
              },
              "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
              "serviceType": "Reparaties"
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}