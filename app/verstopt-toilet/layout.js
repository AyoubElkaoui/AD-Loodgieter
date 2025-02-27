export const metadata = {
  title: 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf',
  description:
    'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!',
};

export default function VerstoptToiletLayout({ children }) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/verstopt-toilet" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/verstopt-toilet" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/verstopt-toilet-hero.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/verstopt-toilet-hero.webp" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Verstopt Toilet",
              "description":
                "Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!",
              "url": "https://adloodgietersbedrijf.nl/verstopt-toilet",
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
                  "AD-Loodgietersbedrijf is uw betrouwbare partner voor alle loodgietersdiensten, waaronder het snel verhelpen van een verstopt toilet.",
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
      </head>
      {children}
    </>
  );
}
