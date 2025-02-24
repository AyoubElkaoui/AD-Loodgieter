import Head from 'next/head';

export const metadata = {
  title: 'Lekkages Oplossen - AD Loodgietersbedrijf',
  description: 'Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice en duurzame oplossingen.',
  keywords: 'Lekkages Oplossen, lekkagedetectie, lekkage repareren, loodgieter Utrecht, Amersfoort, Nieuwegein, spoedservice, duurzame lekkage oplossingen',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Canonical & Open Graph */}
        <link rel="canonical" href="https://www.adloodgietersbedrijf.nl/diensten/lekkages-oplossen" />
        <meta property="og:title" content="Lekkages Oplossen - AD Loodgietersbedrijf" />
        <meta
          property="og:description"
          content="Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving. 24/7 spoedservice en duurzame oplossingen."
        />
        <meta property="og:url" content="https://www.adloodgietersbedrijf.nl/diensten/lekkages-oplossen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.adloodgietersbedrijf.nl/images/lekkage-oplossen.webp" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Lekkages Oplossen",
              "description": "Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort en Nieuwegein, met behulp van geavanceerde detectietechnieken en duurzame reparatiemethoden.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "AD-Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Spechtenkamp 334",
                  "addressLocality": "Maarssen",
                  "postalCode": "3607 KT",
                  "addressCountry": "NL"
                }
              },
              "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
              "serviceType": "Lekkages Oplossen"
            }),
          }}
        />

        {/* (Optioneel) Voeg hier Google Tag Manager code toe als niet elders ingeladen */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(...)` }} /> */}
      </Head>
      {children}
    </>
  );
}
