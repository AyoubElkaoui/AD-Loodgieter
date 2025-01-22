export const metadata = {
  title: 'Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen',
  description: 'Meer dan 10 jaar ervaring in loodgietersdiensten in Maarssen, Utrecht en omgeving. Klantgericht, betrouwbaar en 24/7 beschikbaar.',
  keywords: 'over loodgieter Maarssen, ervaren loodgieter Utrecht, AD-Loodgietersbedrijf, betrouwbare loodgieter',
  openGraph: {
    title: 'Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen',
    description: 'Meer dan 10 jaar ervaring in loodgietersdiensten in Maarssen, Utrecht en omgeving. Klantgericht, betrouwbaar en 24/7 beschikbaar.',
    url: 'https://adloodgietersbedrijf.nl/over-ons',
    images: [
      {
        url: '/plumbing-tools.webp',
        width: 1200,
        height: 630,
        alt: 'Professionele loodgietersdiensten',
      },
    ],
    site_name: 'AD Loodgietersbedrijf',
  },
};

export default function OverOnsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
