import Head from 'next/head';

export const metadata = {
  title: 'Installaties - AD Loodgietersbedrijf',
  description: 'Professionele installatie van sanitair en loodgieterssystemen in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'Installaties, loodgieter Utrecht, sanitair installatie, Utrecht, Amersfoort, Nieuwegein',
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
              "name": "Installaties",
              "description": "Professionele installatie van sanitair en loodgieterssystemen in Utrecht en omgeving.",
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
              "serviceType": "Installaties",
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
