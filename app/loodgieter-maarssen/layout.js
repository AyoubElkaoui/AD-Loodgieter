import Head from 'next/head';

export const metadata = {
  title: 'Loodgieter in Maarssen | 24/7 Service | AD-Loodgietersbedrijf',
  description:
    'Direct een professionele loodgieter nodig in Maarssen? AD-Loodgietersbedrijf staat 24/7 paraat. Bel ons nu voor onderhoud, reparaties of noodgevallen!',
};

export default function LoodgieterMaarssenLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-maarssen" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-maarssen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/loodgieter-installeren.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/loodgieter-installeren.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loodgieter in Maarssen",
              "description":
                "Direct een professionele loodgieter nodig in Maarssen? AD-Loodgietersbedrijf staat 24/7 paraat. Bel ons nu voor onderhoud, reparaties of noodgevallen!",
              "url": "https://adloodgietersbedrijf.nl/loodgieter-maarssen",
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
                  "Lokale loodgieter in Maarssen met 24/7 service. Specialist in reparaties, installatie en onderhoud aan leidingen en sanitair.",
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
            })
          }}
        />
      </Head>
      {children}
    </>
  );
}
