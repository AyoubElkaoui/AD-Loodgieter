export const metadata = {
  metadataBase: new URL("https://www.adloodgietersbedrijf.nl"),
  title: "WC Ontstoppen - AD Loodgietersbedrijf",
  description:
    "Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek onze 24/7 spoedservice met moderne technieken.",
  keywords:
    "WC Ontstoppen, loodgieter Utrecht, loodgieter Maarssen, toilet verstopping, afvoer reinigen, spoed service, Loodgieter Amersfoort, Loodgieter Nieuwegein, moderne loodgieterstechnieken",
  alternates: {
    canonical: "/diensten/wc-ontstoppen",
  },
  openGraph: {
    title: "WC Ontstoppen - AD Loodgietersbedrijf",
    description:
      "Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice met moderne technieken.",
    url: "/diensten/wc-ontstoppen",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "WC Ontstoppen - AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WC Ontstoppen - AD Loodgietersbedrijf",
    description:
      "Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice met moderne technieken.",
    images: ["/images/hero.webp"],
  },
};

export default function WcOntstoppenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "WC Ontstoppen",
            "description":
              "Snel en professioneel uw toilet weer vrij van verstoppingen in Utrecht en omgeving met 24/7 spoedservice en moderne reinigingstechnieken.",
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
            "serviceType": "WC Ontstoppen",
          }),
        }}
      />
      {children}
    </>
  );
}
