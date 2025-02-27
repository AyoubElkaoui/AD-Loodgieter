export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht",
  description:
    "Meer dan 10 jaar ervaring in loodgietersdiensten. Lees meer over onze geschiedenis, aanpak en klantbeoordelingen.",
  alternates: {
    canonical: "/over-ons",
  },
  openGraph: {
    title: "Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht",
    description:
      "Meer dan 10 jaar ervaring in hoogwaardige en duurzame loodgietersdiensten in Maarssen, Utrecht en omgeving. Betrouwbaar, snel en klantgericht.",
    url: "/over-ons",
    type: "website",
    images: [
      {
        url: "/plumbing-tools.webp",
        width: 1200,
        height: 630,
        alt: "AD-Loodgietersbedrijf - Plumbing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht",
    description:
      "Meer dan 10 jaar ervaring in loodgietersdiensten. Lees meer over onze geschiedenis, aanpak en klantbeoordelingen.",
    images: ["/plumbing-tools.webp"],
  },
};

export default function OverOnsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Over AD-Loodgietersbedrijf",
            description:
              "Meer dan 10 jaar ervaring in hoogwaardige en duurzame loodgietersdiensten in Maarssen, Utrecht en omgeving. Betrouwbaar, snel en klantgericht.",
            url: "https://adloodgietersbedrijf.nl/over-ons",
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
                "AD-Loodgietersbedrijf is uw betrouwbare partner voor alle loodgietersdiensten in Maarssen, Utrecht en de omliggende regio's.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Voorbeeldstraat 123",
                addressLocality: "Maarssen",
                postalCode: "3601 AB",
                addressCountry: "NL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+31-20-1234567",
                email: "info@adloodgietersbedrijf.nl",
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
