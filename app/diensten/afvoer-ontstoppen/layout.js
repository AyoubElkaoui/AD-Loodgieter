import Head from 'next/head';

export const metadata = {
  title: 'Afvoer Ontstoppen - AD Loodgietersbedrijf',
  description: 'Laat uw verstopte afvoer grondig reinigen door onze ervaren loodgieters in Utrecht en omgeving.',
  keywords: 'Afvoer Ontstoppen, loodgieter Utrecht, afvoer reinigen, Utrecht, Amersfoort, Nieuwegein',
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
              "description": "Laat uw verstopte afvoer grondig reinigen door onze ervaren loodgieters in Utrecht en omgeving.",
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
              "serviceType": "Afvoer Ontstoppen",
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
