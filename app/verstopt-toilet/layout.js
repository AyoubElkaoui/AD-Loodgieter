export const metadata = {
  metadataBase: new URL('https://adloodgietersbedrijf.nl'),
  title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
  description:
    'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!',
  alternates: {
    canonical: '/verstopt-toilet',
  },
  openGraph: {
    title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
    description:
      'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!',
    url: '/verstopt-toilet',
    type: 'website',
    images: [
      {
        url: '/verstopt-toilet-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Verstopt Toilet - AD-Loodgietersbedrijf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
    description:
      'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!',
    images: ['/verstopt-toilet-hero.webp'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Verstopt Toilet',
      description:
        'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!',
      url: 'https://adloodgietersbedrijf.nl/verstopt-toilet',
      publisher: {
        '@type': 'Organization',
        name: 'AD-Loodgietersbedrijf',
        url: 'https://adloodgietersbedrijf.nl',
        logo: {
          '@type': 'ImageObject',
          url: 'https://adloodgietersbedrijf.nl/logo.png',
        },
      },
      mainEntity: {
        '@type': 'Organization',
        name: 'AD-Loodgietersbedrijf',
        description:
          'AD-Loodgietersbedrijf is uw betrouwbare partner voor alle loodgietersdiensten, waaronder het snel verhelpen van een verstopt toilet.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Spechtenkamp 334',
          addressLocality: 'Maarssen',
          postalCode: '3607 KT',
          addressCountry: 'NL',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+31 6 40 96 18 48',
          email: 'info@adloodgietersbedrijf.nl',
        },
      },
    }),
  },
};

export default function VerstoptToiletLayout({ children }) {
  return <>{children}</>;
}

