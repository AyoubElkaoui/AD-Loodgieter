export const metadata = {
  metadataBase: new URL("https://www.adloodgietersbedrijf.nl"),
  title: "Afvoer Ontstoppen - AD Loodgietersbedrijf",
  description:
    "Laat uw verstopte afvoer snel en grondig reinigen door onze ervaren loodgieters in Utrecht, Amersfoort en Nieuwegein. Ontdek onze 24/7 spoedservice en moderne reinigingstechnieken.",
  keywords:
    "Afvoer Ontstoppen, loodgieter Utrecht, afvoer reinigen, verstopping oplossen, spoedservice, Amersfoort, Nieuwegein",
  alternates: {
    canonical: "/diensten/afvoer-ontstoppen",
  },
  openGraph: {
    title: "Afvoer Ontstoppen - AD Loodgietersbedrijf",
    description:
      "Laat uw verstopte afvoer snel en grondig reinigen door onze ervaren loodgieters. Ontdek onze 24/7 spoedservice en moderne reinigingstechnieken.",
    url: "/diensten/afvoer-ontstoppen",
    type: "website",
    images: [
      {
        url: "/images/riool-afvoer-ontstoppen.webp",
        width: 1200,
        height: 630,
        alt: "Afvoer ontstoppen door AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afvoer Ontstoppen - AD Loodgietersbedrijf",
    description:
      "Laat uw verstopte afvoer snel en grondig reinigen door onze ervaren loodgieters. Ontdek onze 24/7 spoedservice en moderne reinigingstechnieken.",
    images: ["/images/riool-afvoer-ontstoppen.webp"],
  },
};

export default function AfvoerOntstoppenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Afvoer Ontstoppen",
            "description":
              "Laat uw verstopte afvoer snel en grondig reinigen door onze ervaren loodgieters in Utrecht, Amersfoort en Nieuwegein, met moderne reinigingstechnieken en duurzame oplossingen.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AD-Loodgietersbedrijf",
              "url": "https://adloodgietersbedrijf.nl",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Spechtenkamp 334",
                "addressLocality": "Maarssen",
                "postalCode": "3607 KT",
                "addressCountry": "NL",
              },
            },
            "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
            "serviceType": "Afvoer Ontstoppen",
          }),
        }}
      />
      {children}
    </>
  );
}
