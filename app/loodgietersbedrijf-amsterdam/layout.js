import Head from 'next/head';

export const metadata = {
  title: 'Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf',
  description:
    'Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!',
};

export default function LoodgieterAmsterdamLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgietersbedrijf-amsterdam" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgietersbedrijf-amsterdam" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/loodgieter-amsterdam.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/loodgieter-amsterdam.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loodgieter in Amsterdam",
              "description":
                "Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!",
              "url": "https://adloodgietersbedrijf.nl/loodgietersbedrijf-amsterdam",
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
                  "Betrouwbare loodgietersdiensten in Amsterdam met 24/7 spoedservice, installatie en onderhoud. Wij zorgen dat uw sanitair en leidingwerk optimaal functioneren.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Keizersgracht 234",
                  "addressLocality": "Amsterdam",
                  "postalCode": "1015 CJ",
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
