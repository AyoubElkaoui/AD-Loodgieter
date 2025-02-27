export const metadata = {
  metadataBase: new URL("https://www.adloodgietersbedrijf.nl"),
  title: "Lekkages Oplossen - AD Loodgietersbedrijf",
  description:
    "Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice en duurzame oplossingen.",
  keywords:
    "Lekkages Oplossen, lekkagedetectie, lekkage repareren, loodgieter Utrecht, Amersfoort, Nieuwegein, spoedservice, duurzame lekkage oplossingen",
  alternates: {
    canonical: "/diensten/lekkages-oplossen",
  },
  openGraph: {
    title: "Lekkages Oplossen - AD Loodgietersbedrijf",
    description:
      "Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice en duurzame oplossingen.",
    url: "/diensten/lekkages-oplossen",
    type: "website",
    images: [
      {
        url: "/images/lekkage-oplossen.webp",
        width: 1200,
        height: 630,
        alt: "Lekkages Oplossen door AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lekkages Oplossen - AD Loodgietersbedrijf",
    description:
      "Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice en duurzame oplossingen.",
    images: ["/images/lekkage-oplossen.webp"],
  },
};

export default function LekkagesOplossenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lekkages Oplossen",
            "description":
              "Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort en Nieuwegein, met behulp van geavanceerde detectietechnieken en duurzame reparatiemethoden.",
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
            "serviceType": "Lekkages Oplossen",
          }),
        }}
      />
      {children}
    </>
  );
}
