import Head from 'next/head';

export const metadata = {
  title: 'Blogs - AD Loodgietersbedrijf',
  description:
    'Lees onze informatieve blogs over loodgietersdiensten, onderhoudstips en probleemoplossing in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek waardevolle tips van onze experts.',
  keywords:
    'Blogs, loodgieters tips, loodgietersdiensten, onderhoud, Utrecht, Amersfoort, Nieuwegein',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "AD Loodgietersbedrijf Blogs",
              "description": "Lees onze blogs voor tips over loodgietersdiensten, onderhoud en probleemoplossing. Ontdek deskundig advies van onze experts.",
              "publisher": {
                "@type": "Organization",
                "name": "AD Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://adloodgietersbedrijf.nl/images/logo.png",
                },
              },
              "blogPost": {
                "@type": "BlogPosting",
                "headline": "Informatieve artikelen over loodgietersdiensten",
                "description": "Tips en trucs van onze experts voor het onderhouden van uw sanitair en leidingsystemen.",
              },
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
