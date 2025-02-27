export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Contact - AD Loodgietersbedrijf",
  description:
    "Neem contact op met AD Loodgietersbedrijf voor al uw vragen over professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.",
  keywords:
    "Contact, loodgieters Utrecht, AD Loodgietersbedrijf, Loodgieter Utrecht, Loodgieter Amersfoort, Loodgieter Nieuwegein, Loodgieter Maarssen",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - AD Loodgietersbedrijf",
    description:
      "Neem contact op met AD Loodgietersbedrijf voor al uw vragen over professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/front-view-man-working-as-plumber.webp",
        width: 1200,
        height: 630,
        alt: "Contact met AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - AD Loodgietersbedrijf",
    description:
      "Neem contact op met AD Loodgietersbedrijf voor al uw vragen over professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.",
    images: ["/front-view-man-working-as-plumber.webp"],
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "AD Loodgietersbedrijf",
              "url": "https://adloodgietersbedrijf.nl/contact",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31640961848",
                "contactType": "Customer Service",
                "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein", "Maarssen"],
                "availableLanguage": ["Dutch", "English"],
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Spechtenkamp 334",
                "addressLocality": "Maarssen",
                "postalCode": "3607 KT",
                "addressCountry": "NL",
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
