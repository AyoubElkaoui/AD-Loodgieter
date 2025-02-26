import Head from 'next/head';

export const metadata = {
  title: 'Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf',
  description:
    'Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!',
};

export default function LoodgieterAmersfoortLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-amersfoort" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-amersfoort" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/loodgieter-amersfoort.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/loodgieter-amersfoort.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loodgieter in Amersfoort",
              "description":
                "Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!",
              "url": "https://adloodgietersbedrijf.nl/loodgieter-amersfoort",
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
                  "Topkwaliteit loodgietersservice in Amersfoort met snelle respons, vakkundige reparaties, installatie en preventief onderhoud.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kerkstraat 25",
                  "addressLocality": "Amersfoort",
                  "postalCode": "3811 XX",
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
