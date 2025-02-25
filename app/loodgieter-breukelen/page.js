import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

export default function LoodgieterBreukelenPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle = 'Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf';
  const pageDescription =
    'Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op voor snelle en professionele service.';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-breukelen',
    description:
      'Professionele loodgietersdienst in Breukelen met snelle respons voor reparaties, installaties en preventief onderhoud. Wij bieden 24/7 spoedservice en deskundig advies.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Breukelein 12',
      addressLocality: 'Breukelen',
      postalCode: '3601 AB',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.2034,
      longitude: 5.0877,
    },
    openingHours: ['Ma-Su 00:00-23:59'],
  };

  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Is uw 24/7 service ook in het weekend beschikbaar?',
      answer:
        'Ja, onze loodgieters staan dag en nacht voor u klaar – ook in het weekend en op feestdagen.',
    },
    {
      question: 'Kan ik een vrijblijvende offerte krijgen voor mijn project?',
      answer:
        'Uiteraard! Wij maken graag een op maat gemaakte offerte, zodat u precies weet wat u kunt verwachten.',
    },
    {
      question: 'Biedt u ook preventief onderhoud voor sanitair?',
      answer:
        'Ja, naast directe reparaties verzorgen wij preventief onderhoud om toekomstige problemen te voorkomen.',
    },
    {
      question: 'Hoe snel is uw team in Breukelen ter plaatse?',
      answer:
        'In spoedgevallen zorgen wij ervoor dat een van onze experts binnen 30 tot 60 minuten arriveert.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-breukelen" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-breukelen" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* =================== HEADER / HERO SECTION =================== */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/loodgieter-breukelen.jpg"
            alt="Loodgieter in Breukelen - AD-Loodgietersbedrijf"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loodgieter in Breukelen</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u een lekkage, verstopping of ander loodgietersprobleem? Onze specialisten in Breukelen staan 24/7 paraat om uw probleem direct op te lossen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Nu: 24/7 Hulp
            </Link>
          </div>
        </div>
      </header>

      {/* =================== MAIN CONTENT =================== */}
      <main className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          {/* Sectie: Introductie */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Uw Betrouwbare Loodgieterspecialist in Breukelen</h2>
            <article className="space-y-6">
              <p>
                Welkom bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> in Breukelen. Met jarenlange ervaring en moderne technieken bieden wij snelle en duurzame oplossingen voor al uw loodgietersproblemen. Of het nu gaat om een spoedklacht of gepland onderhoud, onze professionals werken efficiënt en vakkundig.
              </p>
              <p>
                Breukelen is een charmante, historische plaats waar verouderde leidingen en sanitair vaak voor uitdagingen zorgen. Onze experts beschikken over de kennis en apparatuur om zelfs de meest complexe problemen te detecteren en op te lossen. Wilt u meer weten over hoe wij te werk gaan? Bezoek dan onze{' '}
                <Link href="/over-ons" className="text-blue-500 font-semibold hover:underline">
                  Over Ons-pagina
                </Link>.
              </p>
              <h3 className="text-2xl font-bold">Waarom Tijdig Ingrijpen?</h3>
              <p>
                Een kleine lekkage kan binnen korte tijd leiden tot grote waterschade, schimmelvorming en hoge reparatiekosten. Door snel in te grijpen, voorkomt u niet alleen structurele schade maar bespaart u ook op toekomstige kosten. Onze deskundige loodgieters zorgen voor een directe interventie en geven advies over preventief onderhoud.
              </p>
              <p>
                Voor meer inzichten over waterbesparing en onderhoud kunt u terecht op externe bronnen zoals{' '}
                <a
                  href="https://www.nibud.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Nibud
                </a>{' '}
                en de{' '}
                <a
                  href="https://www.consumentenbond.nl/wonen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Consumentenbond
                </a>.
              </p>
              <h3 className="text-2xl font-bold">Moderne Reparatie & Preventie</h3>
              <p>
                Onze werkwijze is transparant: na een grondige inspectie ontvangt u een duidelijke offerte en een reparatieplan. Wij gebruiken hoogwaardige materialen en moderne technieken om uw sanitair en leidingen te herstellen. Meer informatie over onze diensten vindt u op onze{' '}
                <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                  Diensten-pagina
                </Link>.
              </p>
              <p>
                Ook handig om te weten: tijdige reparatie kan uw opstalverzekering ondersteunen. Lees hierover op de website van het{' '}
                <a
                  href="https://www.verbondvanverzekeraars.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Verbond van Verzekeraars
                </a>.
              </p>
            </article>
          </section>
        </div>
      </main>

      {/* ===================== FAQ SECTION ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-toilet.webp"/>
        </div>
      </section>

      {/* ===================== CTA / CONTACT SECTION ====================== */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Neem Vandaag Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Heeft u vragen of heeft u direct een loodgieter nodig in Breukelen? Wij staan 24/7 voor u klaar. Aarzel niet en bel direct voor een snelle, professionele oplossing.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="font-bold">• 24/7 direct bereikbaar</li>
              <li className="font-bold">• Vakkundige reparaties en installaties</li>
              <li className="font-bold">• Transparante tarieven en persoonlijk advies</li>
            </ul>
            <Link href="tel:+31640961848" className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block">
              Bel Nu
            </Link>
          </div>
          <div className="p-6 rounded-lg shadow">
            <ContactFormWrapper />
          </div>
        </div>
      </footer>
    </>
  );
}
