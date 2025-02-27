export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf",
  description:
    "Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.",
  alternates: {
    canonical: "/loodgieter-breukelen",
  },
  openGraph: {
    title: "Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf",
    description:
      "Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.",
    url: "/loodgieter-breukelen",
    type: "website",
    images: [
      {
        url: "/loodgieter-breukelen.jpg",
        width: 1200,
        height: 630,
        alt: "Loodgieter in Breukelen - AD-Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf",
    description:
      "Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.",
    images: ["/loodgieter-breukelen.jpg"],
  },
};

export default function LoodgieterBreukelenLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Loodgieter in Breukelen",
            description:
              "Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.",
            url: "https://adloodgietersbedrijf.nl/loodgieter-breukelen",
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
                "Professionele loodgietersdienst in Breukelen met snelle respons voor reparaties, installaties en preventief onderhoud. Wij bieden 24/7 spoedservice en deskundig advies.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Breukelein 12",
                addressLocality: "Breukelen",
                postalCode: "3601 AB",
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
