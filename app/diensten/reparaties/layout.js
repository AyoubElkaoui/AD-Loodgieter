export const metadata = {
  metadataBase: new URL("https://www.adloodgietersbedrijf.nl"),
  title: "Reparaties - AD Loodgietersbedrijf",
  description:
    "Snelle en duurzame reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort en Nieuwegein. 24/7 spoedservice door gecertificeerde experts.",
  keywords:
    "Reparaties, loodgieter Utrecht, leidingen repareren, verwarmingssystemen, spoed reparatie, duurzame oplossingen",
  alternates: {
    canonical: "/diensten/reparaties",
  },
  openGraph: {
    title: "Reparaties - AD Loodgietersbedrijf",
    description:
      "Snelle en duurzame reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort en Nieuwegein. 24/7 spoedservice door gecertificeerde experts.",
    url: "/diensten/reparaties",
    type: "website",
    images: [
      {
        url: "/images/loodgieter-reparatie.webp",
        width: 1200,
        height: 630,
        alt: "Reparaties door AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reparaties - AD Loodgietersbedrijf",
    description:
      "Snelle en duurzame reparaties aan leidingen en verwarmingssystemen in Utrecht, Amersfoort en Nieuwegein. 24/7 spoedservice door gecertificeerde experts.",
    images: ["/images/loodgieter-reparatie.webp"],
  },
};

export default function ReparatiesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Reparaties",
            "description":
              "Snelle en vakkundige reparaties aan leidingen en verwarmingssystemen in Utrecht en omgeving, uitgevoerd door gecertificeerde professionals met duurzame oplossingen.",
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
            "serviceType": "Reparaties",
          }),
        }}
      />
      {children}
    </>
  );
}
