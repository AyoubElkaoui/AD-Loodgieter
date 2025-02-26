// app/publicaties/layout.js

export const metadata = {
  title: "Publicaties | AD-Loodgietersbedrijf",
  description:
    "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past.",
  alternates: {
    canonical: "https://adloodgietersbedrijf.nl/publicaties"
  },
  openGraph: {
    title: "Publicaties | AD-Loodgietersbedrijf",
    description:
      "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past.",
    url: "https://adloodgietersbedrijf.nl/publicaties",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Publicaties | AD-Loodgietersbedrijf",
    description:
      "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past."
  }
};

export default function PublicatiesLayout({ children }) {
  return <>{children}</>;
}
