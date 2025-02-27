export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf",
  description:
    "Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!",
  alternates: {
    canonical: "/loodgietersbedrijf-amsterdam",
  },
  openGraph: {
    title: "Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf",
    description:
      "Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!",
    url: "/loodgietersbedrijf-amsterdam",
    type: "website",
    images: [
      {
        url: "/loodgieter-amsterdam.webp",
        width: 1200,
        height: 630,
        alt: "Loodgieter in Amsterdam - AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf",
    description:
      "Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!",
    images: ["/loodgieter-amsterdam.webp"],
  },
};

export default function LoodgieterAmsterdamLayout({ children }) {
  return (
    <>
      {/* ✅ ✅ Structured Data JSON-LD ✅ ✅ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AD-Loodgietersbedrijf",
            "description":
              "Betrouwbare loodgietersdiensten in Amsterdam met 24/7 spoedservice, installatie en onderhoud. Wij zorgen dat uw sanitair en leidingwerk optimaal functioneren.",
            "url": "https://adloodgietersbedrijf.nl/loodgietersbedrijf-amsterdam",
            "image": "https://adloodgietersbedrijf.nl/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Keizersgracht 234",
              "addressLocality": "Amsterdam",
              "postalCode": "1015 CJ",
              "addressCountry": "NL",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+31 6 40 96 18 48",
              "email": "info@adloodgietersbedrijf.nl",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
