// app/erkende-loodgieter-amsterdam/layout.js

export const metadata = {
  title: 'Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf',
  description:
    'Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service.',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam'
  },
  openGraph: {
    title: 'Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf',
    description:
      'Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service.',
    url: 'https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam.webp',
        width: 1200,
        height: 630,
        alt: 'Erkende Loodgieter Amsterdam - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf',
    description:
      'Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service.',
    images: ['https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam.webp']
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AD-Loodgietersbedrijf',
  url: 'https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam',
  description:
    'AD-Loodgietersbedrijf is een erkende en gecertificeerde loodgieter in Amsterdam, gespecialiseerd in reparaties, installaties en preventief onderhoud. Onze experts leveren betrouwbare service en voldoen aan de hoogste kwaliteitsnormen.',
  telephone: '+31640961848',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Amsterdamse Straat 45',
    addressLocality: 'Amsterdam',
    postalCode: '1017 HL',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.370216,
    longitude: 4.895168
  },
  openingHours: ['Ma-Zo 00:00-23:59']
};

export default function ErkendeLoodgieterAmsterdamLayout({ children }) {
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
