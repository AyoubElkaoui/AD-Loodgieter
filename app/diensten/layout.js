export const metadata = {
  metadataBase: new URL("https://www.adloodgietersbedrijf.nl"),
  title: "Diensten - AD Loodgietersbedrijf - Utrecht & Omgeving",
  description:
    "Ontdek onze professionele loodgietersdiensten. Van wc-ontstopping tot lekkageherstel, afvoer ontstoppen, installaties en reparaties in Utrecht, Amersfoort, Nieuwegein en omgeving. Snelle en duurzame oplossingen door ervaren loodgieters.",
  keywords:
    "loodgietersdiensten, wc ontstoppen, afvoer ontstoppen, lekkages oplossen, installaties, reparaties, spoed service, Utrecht, Amersfoort, Nieuwegein, duurzame oplossingen, 24/7 loodgieter",
  alternates: {
    canonical: "/diensten",
  },
  openGraph: {
    title: "Diensten - AD Loodgietersbedrijf - Utrecht & Omgeving",
    description:
      "Ontdek onze professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving. Snelle en duurzame oplossingen door ervaren loodgieters.",
    url: "/diensten",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "AD Loodgietersbedrijf Diensten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diensten - AD Loodgietersbedrijf - Utrecht & Omgeving",
    description:
      "Ontdek onze professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving. Snelle en duurzame oplossingen door ervaren loodgieters.",
    images: ["/images/hero.webp"],
  },
};

export default function DienstenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AD-Loodgietersbedrijf",
            "url": "https://www.adloodgietersbedrijf.nl",
            "description":
              "Professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving. Wij bieden spoedservice, preventief onderhoud, installaties en reparaties met duurzame oplossingen.",
            "telephone": "+31640961848",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Spechtenkamp 334",
              "addressLocality": "Maarssen",
              "postalCode": "3607 KT",
              "addressCountry": "NL",
            },
            "image": "https://www.adloodgietersbedrijf.nl/images/hero.webp",
            "priceRange": "€€",
            "openingHours": ["Mo-Su 00:00-23:59"],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.1319,
              "longitude": 5.0419,
            },
            "sameAs": [
              "https://facebook.com/adloodgietersbedrijf",
              "https://instagram.com/adloodgietersbedrijf",
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
