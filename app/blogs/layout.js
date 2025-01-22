import Head from 'next/head';

export const metadata = {
  title: 'Blogs - AD Loodgietersbedrijf',
  description: 'Lees onze informatieve blogs over loodgietersdiensten, tips voor onderhoud en meer in Utrecht, Amersfoort, Nieuwegein en omgeving.',
  keywords: 'Blogs, loodgieters tips, loodgietersdiensten, Utrecht, Amersfoort, Nieuwegein',
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Structured Data for Blogs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "AD Loodgietersbedrijf Blogs",
              "description": "Lees onze blogs voor tips over loodgietersdiensten, onderhoud en probleemoplossing.",
              "publisher": {
                "@type": "Organization",
                "name": "AD Loodgietersbedrijf",
                "url": "https://adloodgietersbedrijf.nl",
                "logo": "https://adloodgietersbedrijf.nl/images/logo.png",
              },
              "blogPost": {
                "@type": "BlogPosting",
                "headline": "Informatieve artikelen over loodgietersdiensten",
                "description": "Tips en trucs van onze experts voor het onderhouden van uw sanitair.",
              },
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
