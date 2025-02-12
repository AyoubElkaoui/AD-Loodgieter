import Head from 'next/head';

export const metadata = {
  title: 'Afvoer Ontstoppen - AD Loodgietersbedrijf',
  description: 'Laat uw verstopte afvoer snel en grondig reinigen door onze ervaren loodgieters in Utrecht, Amersfoort en Nieuwegein. Ontdek onze 24/7 spoedservice en moderne reinigingstechnieken.',
  keywords: 'Afvoer Ontstoppen, loodgieter Utrecht, afvoer reinigen, verstopping oplossen, spoedservice, Amersfoort, Nieuwegein',
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
              "name": "Afvoer Ontstoppen",
              "description": "Laat uw verstopte afvoer snel en grondig reinigen door onze ervaren loodgieters in Utrecht, Amersfoort en Nieuwegein, met behulp van moderne reinigingstechnieken en duurzame oplossingen.",
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
                },
              },
              "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
              "serviceType": "Afvoer Ontstoppen"
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}