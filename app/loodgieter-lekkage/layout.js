import Head from 'next/head';

export const metadata = {
  title: 'Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf',
  description:
    'Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.',
};

export default function LoodgieterLekkageLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-lekkage" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-lekkage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/loodgieter-lekkage.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/loodgieter-lekkage.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loodgieter Lekkage",
              "description":
                "Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.",
              "url": "https://adloodgietersbedrijf.nl/loodgieter-lekkage",
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
                  "AD-Loodgietersbedrijf biedt specialistische lekkage reparatie met directe interventie en duurzame oplossingen. Wij staan 24/7 klaar om uw wateroverlast snel en effectief te verhelpen.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Lekkagestraat 10",
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
