import Head from 'next/head';

export const metadata = {
  title: 'Diensten - AD Loodgietersbedrijf - Utrecht & Omgeving',
  description: 'Ontdek onze professionele loodgietersdiensten. Van wc-ontstopping tot lekkageherstel en installaties in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'loodgietersdiensten, wc ontstoppen, afvoer ontstoppen, lekkages oplossen, installaties, Utrecht, Amersfoort, Nieuwegein',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Algemene Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "AD-Loodgietersbedrijf",
              "url": "https://adloodgietersbedrijf.nl",
              "description": "Professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.",
              "telephone": "+31640961848",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Spechtenkamp 334",
                "addressLocality": "Maarssen",
                "postalCode": "3607 KT",
                "addressCountry": "NL",
              },
              "image": "https://adloodgietersbedrijf.nl/images/hero.webp",
              "priceRange": "€€",
              "openingHours": ["Mo-Su 00:00-23:59"],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.1319,
                "longitude": 5.0419,
              },
              "sameAs": [
                "https://facebook.com/adloodgietersbedrijf",
                "https://instagram.com/adloodgietersbedrijf",
              ],
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
