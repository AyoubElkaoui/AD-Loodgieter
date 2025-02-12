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
        {/* Structured Data */}
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