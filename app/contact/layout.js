import Head from 'next/head';

export const metadata = {
  title: 'Contact - AD Loodgietersbedrijf',
  description: 'Neem contact op met AD Loodgietersbedrijf voor al uw vragen over professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'Contact, loodgieters Utrecht, AD Loodgietersbedrijf, Loodgieter Utrecht, Loodgieter Amersfoort, Loodgieter Nieuwegein, Loodgieter maarssen',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Structured Data for Contact */}
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
                  "areaServed": ["Utrecht", "Amersfoort", "Nieuwegein"],
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