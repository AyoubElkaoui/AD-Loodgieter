// app/loodgieter-amersfoort/layout.js

export const metadata = {
  title: 'Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf',
  description:
    'Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/loodgieter-amersfoort'
  },
  openGraph: {
    title: 'Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf',
    description:
      'Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-amersfoort',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/loodgieter-amersfoort.webp',
        width: 1200,
        height: 630,
        alt: 'Loodgieter in Amersfoort - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf',
    description:
      'Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!',
    images: ['https://adloodgietersbedrijf.nl/loodgieter-amersfoort.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/loodgieter-amersfoort',
  description:
    'Topkwaliteit loodgietersservice in Amersfoort met snelle respons, vakkundige reparaties, installatie en preventief onderhoud.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kerkstraat 25',
    addressLocality: 'Amersfoort',
    postalCode: '3811 XX',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.1561,
    longitude: 5.3878
  },
  openingHours: ['Ma-Su 00:00-23:59']
};

export default function LoodgieterAmersfoortLayout({ children }) {
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
