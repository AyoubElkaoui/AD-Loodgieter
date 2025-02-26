import Head from 'next/head';

export const metadata = {
  title: 'Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf',
  description:
    'Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!',
};

export default function OntstoppenAfvoerleidingenLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen-hero.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen-hero.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Ontstoppen Afvoerleidingen",
              "description":
                "Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!",
              "url": "https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen",
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
                  "AD-Loodgietersbedrijf biedt professionele ontstopdiensten voor afvoerleidingen. Met moderne apparatuur en ervaren vakmensen zorgen wij voor een duurzame oplossing zodat uw afvoer weer vrij stroomt.",
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
      </Head>
      {children}
    </>
  );
}
