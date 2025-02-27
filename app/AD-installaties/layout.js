export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf",
  description:
    "Hoewel wij bekendstaan als AD-Loodgietersbedrijf, bieden wij ook hoogwaardige installatieservices onder de naam AD Installaties. Van water- en verwarmingsinstallaties tot ventilatie en duurzame energie, wij leveren maatwerk. Vraag nu een vrijblijvende offerte aan!",
  alternates: {
    canonical: "/AD-installaties",
  },
  openGraph: {
    title: "AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf",
    description:
      "AD-Loodgietersbedrijf biedt naast eersteklas loodgietersdiensten ook een complete installatieservice. Ontdek AD Installaties voor water-, verwarmings-, ventilatie- en duurzame energieoplossingen op maat.",
    url: "/AD-installaties",
    type: "website",
    images: [
      {
        url: "/ad-installaties-hero.webp",
        width: 1200,
        height: 630,
        alt: "AD Installaties - Complete Installatiediensten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf",
    description:
      "Hoewel wij bekendstaan als AD-Loodgietersbedrijf, bieden wij ook hoogwaardige installatieservices onder de naam AD Installaties. Van water- en verwarmingsinstallaties tot ventilatie en duurzame energie, wij leveren maatwerk.",
    images: ["/ad-installaties-hero.webp"],
  },
};

export default function ADInstallatiesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AD Installaties - Complete Installatiediensten",
            "description":
              "AD-Loodgietersbedrijf biedt naast eersteklas loodgietersdiensten ook een complete installatieservice. Ontdek AD Installaties voor water-, verwarmings-, ventilatie- en duurzame energieoplossingen op maat.",
            "url": "https://adloodgietersbedrijf.nl/AD-installaties",
            "publisher": {
              "@type": "Organization",
              "name": "AD-Loodgietersbedrijf",
              "url": "https://adloodgietersbedrijf.nl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://adloodgietersbedrijf.nl/logo.png",
              },
            },
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "AD-Loodgietersbedrijf",
              "description":
                "AD-Loodgietersbedrijf biedt naast eersteklas loodgietersdiensten ook een complete installatieservice. Ontdek AD Installaties voor water-, verwarmings-, ventilatie- en duurzame energieoplossingen op maat.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Spechtenkamp 334",
                "addressLocality": "Maarssen",
                "postalCode": "3607 KT",
                "addressCountry": "NL",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": "+31 6 40 96 18 48",
                "email": "info@adloodgietersbedrijf.nl",
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
