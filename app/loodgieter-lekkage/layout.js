// app/loodgieter-lekkage/layout.js

export const metadata = {
  title: 'Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf',
  description:
    'Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/loodgieter-lekkage'
  },
  openGraph: {
    title: 'Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf',
    description:
      'Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-lekkage',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/loodgieter-lekkage.webp',
        width: 1200,
        height: 630,
        alt: 'Loodgieter Lekkage - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf',
    description:
      'Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.',
    images: ['https://adloodgietersbedrijf.nl/loodgieter-lekkage.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/loodgieter-lekkage',
  description:
    'AD-Loodgietersbedrijf biedt specialistische lekkage reparatie met directe interventie en duurzame oplossingen. Wij staan 24/7 klaar om uw wateroverlast snel en effectief te verhelpen.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lekkagestraat 10',
    addressLocality: 'Uw Stad',
    postalCode: '1234 AB',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.370216,
    longitude: 4.895168
  },
  openingHours: ['Ma-Su 00:00-23:59']
};

export default function LoodgieterLekkageLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
