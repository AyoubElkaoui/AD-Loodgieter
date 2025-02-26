import Head from 'next/head';

export const metadata = {
  title: 'Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf',
  description:
    'Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.',
};

export default function LoodgieterBreukelenLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-breukelen" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-breukelen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/loodgieter-breukelen.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/loodgieter-breukelen.jpg" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Loodgieter in Breukelen",
              "description":
                "Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.",
              "url": "https://adloodgietersbedrijf.nl/loodgieter-breukelen",
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
                  "Professionele loodgietersdienst in Breukelen met snelle respons voor reparaties, installaties en preventief onderhoud. Wij bieden 24/7 spoedservice en deskundig advies.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Breukelein 12",
                  "addressLocality": "Breukelen",
                  "postalCode": "3601 AB",
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
