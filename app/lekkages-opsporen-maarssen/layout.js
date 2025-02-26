import Head from 'next/head';

export const metadata = {
  title: 'Lekkage Opsporen in Maarssen | AD-Loodgietersbedrijf',
  description:
    'Laat lekkages in Maarssen niet escaleren. Onze experts sporen de bron snel op en repareren vakkundig. Bel dag en nacht voor directe hulp!',
};

export default function LekkageOpsporenMaarssenLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/lekkages-opsporen-maarssen" />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/lekkages-opsporen-maarssen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adloodgietersbedrijf.nl/lekkages-oplossen.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://adloodgietersbedrijf.nl/lekkage-oplossen.webp" />

        {/* Structured Data met bedrijfsgegevens */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Lekkage Opsporen in Maarssen",
              "description":
                "Lekkage opsporen in Maarssen met moderne lekdetectie. 24/7 beschikbaar. Bel ons voor directe hulp bij waterschade en reparaties.",
              "url": "https://adloodgietersbedrijf.nl/lekkages-opsporen-maarssen",
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
                  "Lekkage opsporen in Maarssen met moderne lekdetectie. 24/7 beschikbaar. Bel ons voor directe hulp bij waterschade en reparaties.",
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
