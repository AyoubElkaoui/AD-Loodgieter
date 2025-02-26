// app/loodgietersbedrijf-nieuwegein/layout.js

export const metadata = {
  title: 'Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf',
  description:
    'Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein'
  },
  openGraph: {
    title: 'Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf',
    description:
      'Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.',
    url: 'https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein.webp',
        width: 1200,
        height: 630,
        alt: 'Loodgietersbedrijf Nieuwegein - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf',
    description:
      'Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.',
    images: ['https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein',
  description:
    'AD-Loodgietersbedrijf in Nieuwegein levert snelle, betrouwbare en professionele loodgietersdiensten. Van lekkage reparatie tot volledige installatieservice, wij staan 24/7 voor u klaar.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nieuwegeinse Weg 99',
    addressLocality: 'Nieuwegein',
    postalCode: '3431 AB',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0282,
    longitude: 5.0878,
  },
  openingHours: ['Ma-Zo 00:00-23:59'],
};

export default function LoodgietersbedrijfNieuwegeinLayout({ children }) {
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
