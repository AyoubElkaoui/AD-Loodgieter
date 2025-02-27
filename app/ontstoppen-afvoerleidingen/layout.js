export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf",
  description:
    "Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!",
  alternates: {
    canonical: "/ontstoppen-afvoerleidingen",
  },
  openGraph: {
    title: "Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf",
    description:
      "Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!",
    url: "/ontstoppen-afvoerleidingen",
    type: "website",
    images: [
      {
        url: "/ontstoppen-afvoerleidingen-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ontstoppen Afvoerleidingen - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf",
    description:
      "Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!",
    images: ["/ontstoppen-afvoerleidingen-hero.webp"],
  },
};

export default function OntstoppenAfvoerleidingenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ontstoppen Afvoerleidingen",
            description:
              "Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!",
            url: "https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen",
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
                "AD-Loodgietersbedrijf biedt professionele ontstopdiensten voor afvoerleidingen. Met moderne apparatuur en ervaren vakmensen zorgen wij voor een duurzame oplossing zodat uw afvoer weer vrij stroomt.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Spechtenkamp 334",
                addressLocality: "Maarssen",
                postalCode: "3607 KT",
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
