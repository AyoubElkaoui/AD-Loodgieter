export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf",
  description:
    "Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!",
  alternates: {
    canonical: "/loodgieter-amersfoort",
  },
  openGraph: {
    title: "Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf",
    description:
      "Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!",
    url: "/loodgieter-amersfoort",
    type: "website",
    images: [
      {
        url: "/loodgieter-amersfoort.webp",
        width: 1200,
        height: 630,
        alt: "Loodgieter in Amersfoort - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf",
    description:
      "Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!",
    images: ["/loodgieter-amersfoort.webp"],
  },
};

export default function LoodgieterAmersfoortLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Loodgieter in Amersfoort",
            description:
              "Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!",
            url: "https://adloodgietersbedrijf.nl/loodgieter-amersfoort",
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
                "Topkwaliteit loodgietersservice in Amersfoort met snelle respons, vakkundige reparaties, installatie en preventief onderhoud.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kerkstraat 25",
                addressLocality: "Amersfoort",
                postalCode: "3811 XX",
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
