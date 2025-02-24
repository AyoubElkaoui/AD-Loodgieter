import Head from 'next/head';

export const metadata = {
  title: 'Installaties - AD Loodgietersbedrijf',
  description: 'Professionele installatie van sanitair en complete loodgieterssystemen op maat in Utrecht, Amersfoort, Nieuwegein en omgeving. Ervaar hoogwaardige kwaliteit en duurzame oplossingen.',
  keywords: 'Installaties, loodgieter Utrecht, sanitair installatie, loodgieterssystemen, maatwerk, duurzame installaties, Amersfoort, Nieuwegein',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.adloodgietersbedrijf.nl/diensten/installaties" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Installaties - AD Loodgietersbedrijf" />
        <meta
          property="og:description"
          content="Professionele installatie van sanitair en complete loodgieterssystemen op maat in Utrecht, Amersfoort, Nieuwegein en omgeving."
        />
        <meta property="og:url" content="https://www.adloodgietersbedrijf.nl/diensten/installaties" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.adloodgietersbedrijf.nl/images/loodgieter-installeren.webp" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Installaties",
              "description": "Professionele installatie van sanitair en complete loodgieterssystemen in Utrecht, Amersfoort en Nieuwegein, uitgevoerd met hoogwaardige materialen en moderne technieken.",
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
              "serviceType": "Installaties"
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
