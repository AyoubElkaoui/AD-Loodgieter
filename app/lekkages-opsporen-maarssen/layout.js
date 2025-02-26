// app/lekkage-opsporen-maarssen/layout.js

export const metadata = {
  title: 'Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf',
  description:
    'Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/lekkage-opsporen-maarssen'
  },
  openGraph: {
    title: 'Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf',
    description:
      'Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!',
    url: 'https://adloodgietersbedrijf.nl/lekkage-opsporen-maarssen',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/lekkage-oplossen.webp',
        width: 1200,
        height: 630,
        alt: 'Lekkage opsporen in Maarssen - lekkage-oplossen'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf',
    description:
      'Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!',
    images: ['https://adloodgietersbedrijf.nl/lekkage-oplossen.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/lekkage-opsporen-maarssen',
  description:
    'Lekkage opsporen in Maarssen met moderne lekdetectie. 24/7 beschikbaar. Bel ons voor directe hulp bij waterschade en reparaties.',
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
  openingHours: ['Mo-Su 00:00-23:59']
};

export default function LekkageOpsporenMaarssenLayout({ children }) {
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
