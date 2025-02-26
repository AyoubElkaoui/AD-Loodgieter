// app/kranen-repareren/layout.js

export const metadata = {
  title: 'Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf',
  description:
    'Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/kranen-repareren'
  },
  openGraph: {
    title: 'Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf',
    description:
      'Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!',
    url: 'https://adloodgietersbedrijf.nl/kranen-repareren',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/kranen-repareren-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kranen Repareren - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf',
    description:
      'Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!',
    images: ['https://adloodgietersbedrijf.nl/kranen-repareren-hero.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/kranen-repareren',
  description:
    'AD-Loodgietersbedrijf biedt snelle en professionele reparaties van kranen. Of uw kraan nu lekkert, piept of geheel defect is, wij staan 24/7 voor u klaar met duurzame oplossingen.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kranenstraat 12',
    addressLocality: 'Uw Stad',
    postalCode: '1234 AB',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.370216,
    longitude: 4.895168
  },
  openingHours: ['Ma-Zo 00:00-23:59']
};

export default function KranenReparerenLayout({ children }) {
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
