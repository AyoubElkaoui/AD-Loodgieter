// app/ontstoppen-afvoerleidingen/layout.js

export const metadata = {
  title: 'Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf',
  description:
    'Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen'
  },
  openGraph: {
    title: 'Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf',
    description:
      'Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!',
    url: 'https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Ontstoppen Afvoerleidingen - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf',
    description:
      'Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!',
    images: ['https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen-hero.webp']
  }
};

export default function OntstoppenAfvoerleidingenLayout({ children }) {
  // Definieer hier de JSON‑LD voor gestructureerde data:
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen',
    description:
      'AD-Loodgietersbedrijf biedt professionele ontstopdiensten voor afvoerleidingen. Met moderne apparatuur en ervaren vakmensen zorgen wij voor een duurzame oplossing zodat uw afvoer weer vrij stroomt.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Afvoerstraat 5',
      addressLocality: 'Uw Stad',
      postalCode: '1234 AB',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.370216,
      longitude: 4.895168,
    },
    openingHours: ['Ma-Su 00:00-23:59'],
  };

  return (
    <>
      {/* Injecteer de gestructureerde data als JSON‑LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
