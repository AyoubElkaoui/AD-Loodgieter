// app/ad-installaties/layout.js

export const metadata = {
  title: 'AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf',
  description:
    'Hoewel wij bekendstaan als AD-Loodgietersbedrijf, bieden wij ook hoogwaardige installatieservices onder de naam AD Installaties. Van water- en verwarmingsinstallaties tot ventilatie en duurzame energie, wij leveren maatwerk. Vraag nu een vrijblijvende offerte aan!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/ad-installaties'
  },
  openGraph: {
    title: 'AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf',
    description:
      'Hoewel wij bekendstaan als AD-Loodgietersbedrijf, bieden wij ook hoogwaardige installatieservices onder de naam AD Installaties. Van water- en verwarmingsinstallaties tot ventilatie en duurzame energie, wij leveren maatwerk. Vraag nu een vrijblijvende offerte aan!',
    url: 'https://adloodgietersbedrijf.nl/ad-installaties',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/ad-installaties-hero.webp',
        width: 1200,
        height: 630,
        alt: 'AD Installaties - Complete Installatiediensten'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf',
    description:
      'Hoewel wij bekendstaan als AD-Loodgietersbedrijf, bieden wij ook hoogwaardige installatieservices onder de naam AD Installaties. Van water- en verwarmingsinstallaties tot ventilatie en duurzame energie, wij leveren maatwerk. Vraag nu een vrijblijvende offerte aan!',
    images: ['https://adloodgietersbedrijf.nl/ad-installaties-hero.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/ad-installaties',
  description:
    'AD-Loodgietersbedrijf biedt naast eersteklas loodgietersdiensten ook een complete installatieservice. Ontdek AD Installaties voor water-, verwarmings-, ventilatie- en duurzame energieoplossingen op maat.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Installatiepark 5',
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

export default function ADInstallatiesLayout({ children }) {
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
