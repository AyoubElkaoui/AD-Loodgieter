// app/loodgieter-maarssen/layout.js

export const metadata = {
  title: 'Loodgieter in Maarssen | 24/7 Service | AD-Loodgietersbedrijf',
  description:
    'Direct een professionele loodgieter nodig in Maarssen? AD-Loodgietersbedrijf staat 24/7 paraat. Bel ons nu voor onderhoud, reparaties of noodgevallen!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/loodgieter-maarssen'
  },
  openGraph: {
    title: 'Loodgieter in Maarssen | 24/7 Service | AD-Loodgietersbedrijf',
    description:
      'Direct een professionele loodgieter nodig in Maarssen? AD-Loodgietersbedrijf staat 24/7 paraat. Bel ons nu voor onderhoud, reparaties of noodgevallen!',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-maarssen',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/loodgieter-installeren.webp',
        width: 1200,
        height: 630,
        alt: 'Loodgieter in Maarssen - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loodgieter in Maarssen | 24/7 Service | AD-Loodgietersbedrijf',
    description:
      'Direct een professionele loodgieter nodig in Maarssen? AD-Loodgietersbedrijf staat 24/7 paraat. Bel ons nu voor onderhoud, reparaties of noodgevallen!',
    images: ['https://adloodgietersbedrijf.nl/loodgieter-installeren.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/loodgieter-maarssen',
  description:
    'Lokale loodgieter in Maarssen met 24/7 service. Specialist in reparaties, installatie en onderhoud aan leidingen en sanitair.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Spechtenkamp 334',
    addressLocality: 'Maarssen',
    postalCode: '3607 KT',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.1319,
    longitude: 5.0419
  },
  openingHours: ['Ma-Zo 00:00-23:59']
};

export default function LoodgieterMaarssenLayout({ children }) {
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
