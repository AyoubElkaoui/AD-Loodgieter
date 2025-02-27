export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf",
  description:
    "Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.",
  alternates: {
    canonical: "/loodgietersbedrijf-nieuwegein",
  },
  openGraph: {
    title: "Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf",
    description:
      "Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.",
    url: "/loodgietersbedrijf-nieuwegein",
    type: "website",
    images: [
      {
        url: "/loodgietersbedrijf-nieuwegein.webp",
        width: 1200,
        height: 630,
        alt: "Loodgietersbedrijf Nieuwegein - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf",
    description:
      "Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.",
    images: ["/loodgietersbedrijf-nieuwegein.webp"],
  },
};

export default function LoodgietersbedrijfNieuwegeinLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Loodgietersbedrijf Nieuwegein",
            description:
              "Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.",
            url: "https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein",
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
              "@type": "LocalBusiness",
              name: "AD-Loodgietersbedrijf",
              description:
                "AD-Loodgietersbedrijf in Nieuwegein levert snelle, betrouwbare en professionele loodgietersdiensten. Van lekkage reparatie tot volledige installatieservice, wij staan 24/7 voor u klaar.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nieuwegeinse Weg 99",
                addressLocality: "Nieuwegein",
                postalCode: "3431 AB",
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
        }}
      />
      {children}
    </>
  );
}
