export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf",
  description:
    "Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!",
  alternates: {
    canonical: "/kranen-repareren",
  },
  openGraph: {
    title: "Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf",
    description:
      "Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!",
    url: "/kranen-repareren",
    type: "website",
    images: [
      {
        url: "/kranen-repareren-hero.webp",
        width: 1200,
        height: 630,
        alt: "Kranen Repareren - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf",
    description:
      "Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!",
    images: ["/kranen-repareren-hero.webp"],
  },
};

export default function KranenReparerenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Kranen Repareren",
            description:
              "AD-Loodgietersbedrijf biedt snelle en professionele reparaties van kranen. Of uw kraan nu lekkert, piept of geheel defect is, wij staan 24/7 voor u klaar met duurzame oplossingen.",
            url: "https://adloodgietersbedrijf.nl/kranen-repareren",
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
                "AD-Loodgietersbedrijf biedt snelle en professionele reparaties van kranen. Of uw kraan nu lekkert, piept of geheel defect is, wij staan 24/7 voor u klaar met duurzame oplossingen.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kranenstraat 12",
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
