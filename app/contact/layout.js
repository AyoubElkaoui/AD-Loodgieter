import Head from 'next/head';

export const metadata = {
  title: 'Contact - AD Loodgietersbedrijf',
  description:
    'Neem contact op met AD Loodgietersbedrijf voor al uw vragen over professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords:
    'Contact, loodgieters Utrecht, AD Loodgietersbedrijf, Loodgieter Utrecht, Loodgieter Amersfoort, Loodgieter Nieuwegein, Loodgieter Maarssen',
};

export default function ContactLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/contact" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/front-view-man-working-as-plumber.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/front-view-man-working-as-plumber.webp" />

        {/* Structured Data for Contact Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "AD Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl/contact",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+31640961848",
                  "contactType": "Customer Service",
                  "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein", "Maarssen"],
                  "availableLanguage": ["Dutch", "English"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Spechtenkamp 334",
                  "addressLocality": "Maarssen",
                  "postalCode": "3607 KT",
                  "addressCountry": "NL"
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
