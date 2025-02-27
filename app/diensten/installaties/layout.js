export const metadata = {
  metadataBase: new URL("https://www.adloodgietersbedrijf.nl"),
  title: "Installaties - AD Loodgietersbedrijf",
  description:
    "Professionele installatie van sanitair en complete loodgieterssystemen op maat in Utrecht, Amersfoort, Nieuwegein en omgeving. Ervaar hoogwaardige kwaliteit en duurzame oplossingen.",
  keywords:
    "Installaties, loodgieter Utrecht, sanitair installatie, loodgieterssystemen, maatwerk, duurzame installaties, Amersfoort, Nieuwegein",
  alternates: {
    canonical: "/diensten/installaties",
  },
  openGraph: {
    title: "Installaties - AD Loodgietersbedrijf",
    description:
      "Professionele installatie van sanitair en complete loodgieterssystemen op maat in Utrecht, Amersfoort, Nieuwegein en omgeving.",
    url: "/diensten/installaties",
    type: "website",
    images: [
      {
        url: "/images/loodgieter-installeren.webp",
        width: 1200,
        height: 630,
        alt: "Installaties door AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installaties - AD Loodgietersbedrijf",
    description:
      "Professionele installatie van sanitair en complete loodgieterssystemen op maat in Utrecht, Amersfoort, Nieuwegein en omgeving.",
    images: ["/images/loodgieter-installeren.webp"],
  },
};

export default function InstallatiesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Installaties",
            "description":
              "Professionele installatie van sanitair en complete loodgieterssystemen in Utrecht, Amersfoort en Nieuwegein, uitgevoerd met hoogwaardige materialen en moderne technieken.",
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
            "serviceType": "Installaties",
          }),
        }}
      />
      {children}
    </>
  );
}
