import Head from 'next/head';

export const metadata = {
  title: 'WC Ontstoppen - AD Loodgietersbedrijf',
  description: 'Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek onze 24/7 spoedservice met moderne technieken.',
  keywords: 'WC Ontstoppen, loodgieter Utrecht, loodgieter Maarssen, toilet verstopping, afvoer reinigen, spoed service, Loodgieter Amersfoort, Loodgieter Nieuwegein, moderne loodgieterstechnieken',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Voeg een canonical-tag toe zodat zoekmachines weten welke URL de voorkeur heeft */}
        <link rel="canonical" href="https://www.adloodgietersbedrijf.nl/diensten/wc-ontstoppen" />
        <meta property="og:title" content="WC Ontstoppen - AD Loodgietersbedrijf" />
        <meta property="og:description" content="Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice met moderne technieken." />
        <meta property="og:url" content="https://www.adloodgietersbedrijf.nl/diensten/wc-ontstoppen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.adloodgietersbedrijf.nl/images/hero.webp" />
        {/* Structured Data voor de service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "WC Ontstoppen",
              "description": "Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht en omgeving met 24/7 spoedservice en moderne reinigingstechnieken.",
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
              "serviceType": "WC Ontstoppen"
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
