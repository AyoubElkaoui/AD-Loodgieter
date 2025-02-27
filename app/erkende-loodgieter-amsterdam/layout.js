export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf",
  description:
    "Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service!",
  alternates: {
    canonical: "/erkende-loodgieter-amsterdam",
  },
  openGraph: {
    title: "Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf",
    description:
      "Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service!",
    url: "/erkende-loodgieter-amsterdam",
    type: "website",
    images: [
      {
        url: "/erkende-loodgieter-amsterdam.webp",
        width: 1200,
        height: 630,
        alt: "Erkende Loodgieter Amsterdam - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf",
    description:
      "Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service!",
    images: ["/erkende-loodgieter-amsterdam.webp"],
  },
};

export default function ErkendeLoodgieterAmsterdamLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Erkende Loodgieter Amsterdam",
            description:
              "Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service!",
            url: "https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam",
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
                "AD-Loodgietersbedrijf is een erkende en gecertificeerde loodgieter in Amsterdam, gespecialiseerd in reparaties, installaties en preventief onderhoud. Onze experts leveren betrouwbare service en voldoen aan de hoogste kwaliteitsnormen.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Amsterdamse Straat 45",
                addressLocality: "Amsterdam",
                postalCode: "1017 HL",
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
