import Head from 'next/head';

export const metadata = {
  title: 'Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf',
  description:
    'Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!',
};

export default function KranenReparerenLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/kranen-repareren" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/kranen-repareren" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/kranen-repareren-hero.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/kranen-repareren-hero.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Kranen Repareren",
              "description":
                "AD-Loodgietersbedrijf biedt snelle en professionele reparaties van kranen. Of uw kraan nu lekkert, piept of geheel defect is, wij staan 24/7 voor u klaar met duurzame oplossingen.",
              "url": "https://adloodgietersbedrijf.nl/kranen-repareren",
              "publisher": {
                "@type": "Organization",
                "name": "AD-Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://adloodgietersbedrijf.nl/logo.png"
                }
              },
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "AD-Loodgietersbedrijf",
                "description":
                  "AD-Loodgietersbedrijf biedt snelle en professionele reparaties van kranen. Of uw kraan nu lekkert, piept of geheel defect is, wij staan 24/7 voor u klaar met duurzame oplossingen.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kranenstraat 12",
                  "addressLocality": "Uw Stad",
                  "postalCode": "1234 AB",
                  "addressCountry": "NL"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+31 6 40 96 18 48",
                  "email": "info@adloodgietersbedrijf.nl"
                }
              }
            })
          }}
        />
      </Head>
      {children}
    </>
  );
}
