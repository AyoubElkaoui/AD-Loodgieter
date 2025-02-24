import Head from 'next/head';

export const metadata = {
  title: 'Over AD-Loodgietersbedrijf | Ervaren Loodgieters in Maarssen en Utrecht',
  description:
    'Meer dan 10 jaar ervaring in loodgietersdiensten. Lees meer over onze geschiedenis, aanpak en klantbeoordelingen.',
};

export default function OverOnsLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/over-ons" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/over-ons" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/plumbing-tools.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/plumbing-tools.webp" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Over AD-Loodgietersbedrijf",
              "description":
                "Meer dan 10 jaar ervaring in hoogwaardige en duurzame loodgietersdiensten in Maarssen, Utrecht en omgeving. Betrouwbaar, snel en klantgericht.",
              "url": "https://adloodgietersbedrijf.nl/over-ons",
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
                  "AD-Loodgietersbedrijf is uw betrouwbare partner voor alle loodgietersdiensten in Maarssen, Utrecht en de omliggende regio's.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Voorbeeldstraat 123",
                  "addressLocality": "Maarssen",
                  "postalCode": "3601 AB",
                  "addressCountry": "NL"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+31-20-1234567",
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
