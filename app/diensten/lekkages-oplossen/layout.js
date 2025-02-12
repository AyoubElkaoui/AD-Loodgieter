import Head from 'next/head';

export const metadata = {
  title: 'Lekkages Oplossen - AD Loodgietersbedrijf',
  description: 'Laat lekkages snel en efficiënt repareren door ons professionele team in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek onze 24/7 spoedservice en duurzame oplossingen voor lekkagedetectie en -herstel.',
  keywords: 'Lekkages Oplossen, lekkagedetectie, lekkage repareren, loodgieter Utrecht, Amersfoort, Nieuwegein, spoedservice, duurzame lekkage oplossingen',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
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
                },
              },
              "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
              "serviceType": "Lekkages Oplossen"
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}