// app/verstopt-toilet/layout.js

export const metadata = {
  title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
  description:
    'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!',
  alternates: {
    canonical: 'https://adloodgietersbedrijf.nl/verstopt-toilet'
  },
  openGraph: {
    title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
    description:
      'Heeft u een verstopt toilet? Wij bieden snelle en professionele oplossingen voor uw verstopping!',
    url: 'https://adloodgietersbedrijf.nl/verstopt-toilet',
    type: 'website',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/verstopt-toilet-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Verstopt Toilet - AD-Loodgietersbedrijf'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
    description:
      'Heeft u een verstopt toilet? Wij bieden snelle en professionele oplossingen. Neem direct contact op voor een snelle interventie!',
    images: ['https://adloodgietersbedrijf.nl/verstopt-toilet-hero.webp']
  }
};

export default function VerstoptToiletLayout({ children }) {
  return <>{children}</>;
}
