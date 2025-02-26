import Head from 'next/head';

export const metadata = {
  title: 'Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf',
  description:
    'Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service!',
};

export default function ErkendeLoodgieterAmsterdamLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Erkende Loodgieter Amsterdam",
              "description":
                "Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor spoedsituaties en regulier onderhoud. Neem direct contact op voor betrouwbare service!",
              "url": "https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam",
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
                  "AD-Loodgietersbedrijf is een erkende en gecertificeerde loodgieter in Amsterdam, gespecialiseerd in reparaties, installaties en preventief onderhoud. Onze experts leveren betrouwbare service en voldoen aan de hoogste kwaliteitsnormen.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Amsterdamse Straat 45",
                  "addressLocality": "Amsterdam",
                  "postalCode": "1017 HL",
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
