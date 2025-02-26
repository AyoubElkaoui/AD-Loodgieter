import Head from 'next/head';

export const metadata = {
  title: 'Loodgietersbedrijf Nieuwegein | 24/7 Loodgieterservice | AD-Loodgietersbedrijf',
  description:
    'Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.',
};

export default function LoodgietersbedrijfNieuwegeinLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loodgietersbedrijf Nieuwegein",
              "description":
                "Op zoek naar een betrouwbare loodgieter in Nieuwegein? AD-Loodgietersbedrijf staat 24/7 paraat voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en efficiënte service.",
              "url": "https://adloodgietersbedrijf.nl/loodgietersbedrijf-nieuwegein",
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
                  "AD-Loodgietersbedrijf in Nieuwegein levert snelle, betrouwbare en professionele loodgietersdiensten. Van lekkage reparatie tot volledige installatieservice, wij staan 24/7 voor u klaar.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Nieuwegeinse Weg 99",
                  "addressLocality": "Nieuwegein",
                  "postalCode": "3431 AB",
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
