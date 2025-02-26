import Head from 'next/head';

export const metadata = {
  title: 'AD Installaties - Complete Installatiediensten | AD-Loodgietersbedrijf',
  description:
    'Hoewel wij bekendstaan als AD-Loodgietersbedrijf, bieden wij ook hoogwaardige installatieservices onder de naam AD Installaties. Van water- en verwarmingsinstallaties tot ventilatie en duurzame energie, wij leveren maatwerk. Vraag nu een vrijblijvende offerte aan!',
};

export default function ADInstallatiesLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/AD-installaties" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/AD-installaties" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/ad-installaties-hero.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/ad-installaties-hero.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AD Installaties - Complete Installatiediensten",
              "description":
                "AD-Loodgietersbedrijf biedt naast eersteklas loodgietersdiensten ook een complete installatieservice. Ontdek AD Installaties voor water-, verwarmings-, ventilatie- en duurzame energieoplossingen op maat.",
              "url": "https://adloodgietersbedrijf.nl/AD-installaties",
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
                  "AD-Loodgietersbedrijf biedt naast eersteklas loodgietersdiensten ook een complete installatieservice. Ontdek AD Installaties voor water-, verwarmings-, ventilatie- en duurzame energieoplossingen op maat.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Installatiepark 5",
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
