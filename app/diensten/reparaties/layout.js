import Head from 'next/head';

export const metadata = {
  title: 'Reparaties - AD Loodgietersbedrijf',
  description: 'Snelle en duurzame reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort en Nieuwegein. 24/7 spoedservice door gecertificeerde experts.',
  keywords: 'Reparaties, loodgieter Utrecht, leidingen repareren, verwarmingssystemen, spoed reparatie, duurzame oplossingen',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Canonical en Open Graph */}
        <link rel="canonical" href="https://www.adloodgietersbedrijf.nl/diensten/reparaties" />
        <meta property="og:title" content="Reparaties - AD Loodgietersbedrijf" />
        <meta property="og:description" content="Snelle en duurzame reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort en Nieuwegein. 24/7 spoedservice door gecertificeerde experts." />
        <meta property="og:url" content="https://www.adloodgietersbedrijf.nl/diensten/reparaties" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.adloodgietersbedrijf.nl/images/loodgieter-reparatie.webp" />

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

        {/* (Optioneel) Voeg hier Google Tag Manager code toe als hij niet elders staat */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(...)` }} /> */}
      </Head>
      {children}
    </>
  );
}
