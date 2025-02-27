export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf",
  description:
    "Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!",
  alternates: {
    canonical: "/lekkages-opsporen-maarssen",
  },
  openGraph: {
    title: "Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf",
    description:
      "Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!",
    url: "/lekkages-opsporen-maarssen",
    type: "website",
    images: [
      {
        url: "/lekkage-oplossen.webp",
        width: 1200,
        height: 630,
        alt: "Lekkage Opsporen in Maarssen - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf",
    description:
      "Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!",
    images: ["/lekkage-oplossen.webp"],
  },
};

export default function LekkageOpsporenMaarssenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lekkage Opsporen in Maarssen",
            description:
              "Lekkage opsporen in Maarssen met moderne lekdetectie. 24/7 beschikbaar. Bel ons voor directe hulp bij waterschade en reparaties.",
            url: "https://adloodgietersbedrijf.nl/lekkages-opsporen-maarssen",
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
                "Lekkage opsporen in Maarssen met moderne lekdetectie. 24/7 beschikbaar. Bel ons voor directe hulp bij waterschade en reparaties.",
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
