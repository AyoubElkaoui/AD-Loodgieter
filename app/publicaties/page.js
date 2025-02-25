import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const landingPages = [
  {
    title: "Lekkages Opsporen Maarssen",
    slug: "lekkages-opsporen-maarssen",
    image: "/lekkage-oplossen.webp",
    description: "Ontdek hoe wij lekkages opsporen en snel ingrijpen in Maarssen.",
  },
  {
    title: "Verstopt Toilet",
    slug: "verstopt-toilet",
    image: "/verstopt-toilet-hero.webp",
    description: "Snel en vakkundig uw verstopt toilet weer in orde maken.",
  },
  {
    title: "Loodgieter Amersfoort",
    slug: "loodgieter-amersfoort",
    image: "/loodgieter-amersfoort.webp",
    description: "Professionele loodgietersservice in Amersfoort voor al uw klusjes.",
  },
  {
    title: "Loodgieter Breukelen",
    slug: "loodgieter-breukelen",
    image: "/loodgieter-breukelen.jpg",
    description: "Snelle en efficiënte service in Breukelen voor al uw loodgietersproblemen.",
  },
  {
    title: "Kranen Repareren",
    slug: "kranen-repareren",
    image: "/kranen-repareren-hero.webp",
    description: "Expertise in het repareren van kranen voor optimale functionaliteit.",
  },
  {
    title: "Ontstoppen Afvoerleidingen",
    slug: "ontstoppen-afvoerleidingen",
    image: "/ontstoppen-afvoerleidingen-hero.webp",
    description: "Herstel verstopte afvoerleidingen snel en effectief.",
  },
  {
    title: "Loodgieter Lekkage",
    slug: "loodgieter-lekkage",
    image: "/loodgieter-lekkage.webp",
    description: "Directe hulp bij lekkages om waterschade te beperken.",
  },
  {
    title: "Erkende Loodgieter Amsterdam",
    slug: "erkende-loodgieter-amsterdam",
    image: "/erkende-loodgieter-amsterdam.webp",
    description: "Gecertificeerde en betrouwbare loodgietersdiensten in Amsterdam.",
  },
  {
    title: "Loodgietersbedrijf Nieuwegein",
    slug: "loodgietersbedrijf-nieuwegein",
    image: "/loodgieter-nieuwegein.webp",
    description: "Professionele en snelle service in Nieuwegein.",
  },
  {
    title: "AD Installaties",
    slug: "AD-installaties",
    image: "/ad-installaties-hero.webp",
    description: "Complete installatiediensten op maat voor elk project.",
  },
  {
    title: "Loodgietersbedrijf Amsterdam",
    slug: "loodgietersbedrijf-amsterdam",
    image: "/loodgieter-amsterdam.webp",
    description: "Betrouwbare loodgietersdiensten in Amsterdam voor spoed en onderhoud.",
  },
  {
    title: "Loodgieter Maarssen",
    slug: "loodgieter-maarssen",
    image: "/loodgieter-installeren.webp",
    description: "Snel en vakkundig voor al uw loodgietersklussen in Maarssen.",
  },
];

export default function PublicatiesPage() {
  return (
    <>
      <Head>
        <title>Publicaties | AD-Loodgietersbedrijf</title>
        <meta
          name="description"
          content="Bekijk ons overzicht van alle landingspagina's met gedetailleerde informatie over onze loodgietersdiensten en installaties. Ontdek de oplossing die bij u past."
        />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/publicaties" />
      </Head>

      <section className="py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Publicaties
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Hier vindt u een compleet overzicht van alle diensten die AD-Loodgietersbedrijf aanbiedt. Klik op een van de onderstaande pagina's om meer te ontdekken over onze loodgietersdiensten, installaties en spoedservice. Wij staan 24/7 voor u klaar!
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((page) => (
              <article
                key={page.slug}
                itemScope
                itemType="https://schema.org/Service"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {page.image ? (
                  <Image
                    src={page.image}
                    alt={`${page.title} - AD Loodgietersbedrijf`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                    itemProp="image"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">Geen afbeelding beschikbaar</span>
                  </div>
                )}
                <div className="p-6">
                  <h2
                    className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors"
                    itemProp="name"
                  >
                    {page.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4" itemProp="description">
                    {page.description}
                  </p>
                  <Link href={`/${page.slug}`} className="text-blue-500 font-semibold hover:underline block">
                    Lees meer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
