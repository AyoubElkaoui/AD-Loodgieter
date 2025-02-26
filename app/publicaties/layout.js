import Head from 'next/head';

export const metadata = {
  title: "Publicaties | AD-Loodgietersbedrijf",
  description:
    "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past.",
};

export default function PublicatiesLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/publicaties" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/publicaties" />
        <meta property="og:type" content="website" />
        {/* Voeg eventueel een og:image toe als dat gewenst is */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {/* Voeg eventueel een twitter:image toe als dat gewenst is */}

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Publicaties",
              "description":
                "Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past.",
              "url": "https://adloodgietersbedrijf.nl/publicaties",
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
                "@type": "Organization",
                "name": "AD-Loodgietersbedrijf",
                "description":
                  "AD-Loodgietersbedrijf biedt betrouwbare loodgietersdiensten, installaties en publicaties met de laatste updates en informatie.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Spechtenkamp 334",
                  "addressLocality": "Maarssen",
                  "postalCode": "3607 KT",
                  "addressCountry": "NL"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+31 6 40 96 18 48",
                  "email": "info@adloodgietersbedrijf.nl"
                }
              }
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
