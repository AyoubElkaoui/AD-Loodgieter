// app/loodgieter-amsterdam/layout.js

export const metadata = {
  title: 'Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf',
  description:
    'Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/loodgieter-amsterdam'
  },
  openGraph: {
    title: 'Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf',
    description:
      'Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-amsterdam',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/loodgieter-amsterdam.webp',
        width: 1200,
        height: 630,
        alt: 'Loodgieter in Amsterdam - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf',
    description:
      'Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!',
    images: ['https://adloodgietersbedrijf.nl/loodgieter-amsterdam.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/loodgieter-amsterdam',
  description:
    'Betrouwbare loodgietersdiensten in Amsterdam met 24/7 spoedservice, installatie en onderhoud. Wij zorgen dat uw sanitair en leidingwerk optimaal functioneren.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Keizersgracht 234',
    addressLocality: 'Amsterdam',
    postalCode: '1015 CJ',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.3731,
    longitude: 4.8922
  },
  openingHours: ['Ma-Zo 00:00-23:59']
};

export default function LoodgieterAmsterdamLayout({ children }) {
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
