export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf",
  description:
    "Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.",
  alternates: {
    canonical: "/loodgieter-lekkage",
  },
  openGraph: {
    title: "Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf",
    description:
      "Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.",
    url: "/loodgieter-lekkage",
    type: "website",
    images: [
      {
        url: "/loodgieter-lekkage.webp",
        width: 1200,
        height: 630,
        alt: "Loodgieter Lekkage - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf",
    description:
      "Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.",
    images: ["/loodgieter-lekkage.webp"],
  },
};

export default function LoodgieterLekkageLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Loodgieter Lekkage",
            description:
              "Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.",
            url: "https://adloodgietersbedrijf.nl/loodgieter-lekkage",
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
                "AD-Loodgietersbedrijf biedt specialistische lekkage reparatie met directe interventie en duurzame oplossingen. Wij staan 24/7 klaar om uw wateroverlast snel en effectief te verhelpen.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lekkagestraat 10",
                addressLocality: "Uw Stad",
                postalCode: "1234 AB",
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
