export const metadata = {
  metadataBase: new URL("https://adloodgietersbedrijf.nl"),
  title: "Blogs - AD Loodgietersbedrijf",
  description:
    "Lees onze informatieve blogs over loodgietersdiensten, onderhoudstips en probleemoplossing in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek waardevolle tips van onze experts.",
  keywords:
    "Blogs, loodgieters tips, loodgietersdiensten, onderhoud, Utrecht, Amersfoort, Nieuwegein",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs - AD Loodgietersbedrijf",
    description:
      "Lees onze informatieve blogs over loodgietersdiensten, onderhoudstips en probleemoplossing in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek waardevolle tips van onze experts.",
    url: "/blogs",
    type: "website",
    images: [
      {
        url: "/images/blogs-hero.webp",
        width: 1200,
        height: 630,
        alt: "Blogs van AD Loodgietersbedrijf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - AD Loodgietersbedrijf",
    description:
      "Lees onze informatieve blogs over loodgietersdiensten, onderhoudstips en probleemoplossing in Utrecht, Amersfoort, Nieuwegein en omgeving. Ontdek waardevolle tips van onze experts.",
    images: ["/images/blogs-hero.webp"],
  },
};

export default function BlogsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "AD Loodgietersbedrijf Blogs",
            "description":
              "Lees onze blogs voor tips over loodgietersdiensten, onderhoud en probleemoplossing. Ontdek deskundig advies van onze experts.",
            "publisher": {
              "@type": "Organization",
              "name": "AD Loodgietersbedrijf",
              "url": "https://adloodgietersbedrijf.nl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://adloodgietersbedrijf.nl/images/logo.png",
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
