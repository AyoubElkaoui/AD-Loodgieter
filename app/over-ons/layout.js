export const metadata = {
  title: 'Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht',
  description:
    'AD-Loodgietersbedrijf biedt al meer dan 10 jaar hoogwaardige en duurzame loodgietersdiensten in Maarssen, Utrecht en omliggende regio’s. Lees meer over onze geschiedenis, aanpak en wat onze klanten over ons zeggen. Onze klantgerichte service en 24/7 bereikbaarheid garanderen een snelle en betrouwbare oplossing.',
  keywords:
    'loodgieters, AD-Loodgietersbedrijf, loodgieter Maarssen, loodgieter Utrecht, spoed loodgieter, WC ontstoppen, lekkages oplossen, duurzaam, betrouwbaar, 24/7 service, geschiedenis, klantbeoordelingen, testimonials',
  openGraph: {
    title: 'Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht',
    description:
      'Meer dan 10 jaar ervaring in loodgietersdiensten. Wij bieden snelle, duurzame en betrouwbare oplossingen voor al uw loodgietersproblemen. Lees meer over onze geschiedenis en wat onze klanten over ons zeggen.',
    url: 'https://adloodgietersbedrijf.nl/over-ons',
    images: [
      {
        url: 'https://adloodgietersbedrijf.nl/plumbing-tools.webp',
        width: 1200,
        height: 630,
        alt: 'Professionele loodgietersdiensten en spoedreparaties',
      },
    ],
    site_name: 'AD Loodgietersbedrijf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht',
    description:
      'Meer dan 10 jaar ervaring in loodgietersdiensten. Snel, betrouwbaar en 24/7 beschikbaar. Lees meer over onze geschiedenis en klantbeoordelingen.',
    image: 'https://adloodgietersbedrijf.nl/plumbing-tools.webp',
  },
};

export default function OverOnsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
