// app/loodgieter-breukelen/layout.js

export const metadata = {
  title: 'Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf',
  description:
    'Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/loodgieter-breukelen'
  },
  openGraph: {
    title: 'Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf',
    description:
      'Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-breukelen',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/loodgieter-breukelen.jpg',
        width: 1200,
        height: 630,
        alt: 'Loodgieter in Breukelen - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf',
    description:
      'Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.',
    images: ['https://adloodgietersbedrijf.nl/loodgieter-breukelen.jpg']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/loodgieter-breukelen',
  description:
    'Professionele loodgietersdienst in Breukelen met snelle respons voor reparaties, installaties en preventief onderhoud. Wij bieden 24/7 spoedservice en deskundig advies.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Breukelein 12',
    addressLocality: 'Breukelen',
    postalCode: '3601 AB',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.2034,
    longitude: 5.0877
  },
  openingHours: ['Ma-Su 00:00-23:59']
};

export default function LoodgieterBreukelenLayout({ children }) {
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
