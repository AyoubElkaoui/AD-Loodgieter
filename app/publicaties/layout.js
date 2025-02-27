export const metadata = {
  title: "Publicaties | AD-Loodgietersbedrijf",
  description:
    "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past.",
  alternates: {
    canonical: "https://adloodgietersbedrijf.nl/publicaties",
  },
  openGraph: {
    title: "Publicaties | AD-Loodgietersbedrijf",
    description:
      "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties.",
    url: "https://adloodgietersbedrijf.nl/publicaties",
    type: "website",
    images: [
      {
        url: "https://adloodgietersbedrijf.nl/logo.png",
        width: 1200,
        height: 630,
        alt: "AD-Loodgietersbedrijf Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publicaties | AD-Loodgietersbedrijf",
    description:
      "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties.",
    images: ["https://adloodgietersbedrijf.nl/logo.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Publicaties",
      description:
        "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past.",
      url: "https://adloodgietersbedrijf.nl/publicaties",
      publisher: {
        "@type": "Organization",
        name: "AD-Loodgietersbedrijf",
        url: "https://adloodgietersbedrijf.nl",
        logo: {
          "@type": "ImageObject",
          url: "https://adloodgietersbedrijf.nl/logo.png",
        },
      },
      mainEntity: {
        "@type": "Organization",
        name: "AD-Loodgietersbedrijf",
        description:
          "AD-Loodgietersbedrijf biedt betrouwbare loodgietersdiensten, installaties en publicaties met de laatste updates en informatie.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Spechtenkamp 334",
          addressLocality: "Maarssen",
          postalCode: "3607 KT",
          addressCountry: "NL",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+31 6 40 96 18 48",
          email: "info@adloodgietersbedrijf.nl",
        },
      },
    }),
  },
};

export default function PublicatiesLayout({ children }) {
  return <>{children}</>;
}
