'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

export default function LoodgieterLekkagePage() {
  // ================
  // SEO Info
  // ================
  const pageTitle = 'Loodgieter Lekkage | Direct Hulp bij Wateroverlast | AD-Loodgietersbedrijf';
  const pageDescription =
    'Ervaart u wateroverlast door een lekkage? AD-Loodgietersbedrijf biedt directe en professionele oplossingen voor alle lekkageproblemen. Onze experts zijn 24/7 inzetbaar om schade te beperken en uw lekkage snel te verhelpen.';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-lekkage',
    description:
      'AD-Loodgietersbedrijf biedt specialistische lekkage reparatie met directe interventie en duurzame oplossingen. Wij staan 24/7 klaar om uw wateroverlast snel en effectief te verhelpen.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lekkagestraat 10',
      addressLocality: 'Uw Stad',
      postalCode: '1234 AB',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.370216,
      longitude: 4.895168,
    },
    openingHours: ['Ma-Su 00:00-23:59'],
  };

  // ================
  // FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Hoe snel kan uw team reageren bij een lekkage?',
      answer:
        'In urgente gevallen zorgen wij ervoor dat een van onze experts binnen 30 tot 60 minuten ter plaatse is, zodat verdere schade wordt beperkt.',
    },
    {
      question: 'Wat kost het om een lekkage te verhelpen?',
      answer:
        'De kosten variëren per situatie. Wij bieden altijd een vrijblijvende offerte op maat, zodat u precies weet waar u aan toe bent.',
    },
    {
      question: 'Is uw service 24/7 beschikbaar?',
      answer:
        'Ja, onze lekkage reparatie service is 24/7 beschikbaar, ook in het weekend en op feestdagen.',
    },
    {
      question: 'Biedt u ook advies om toekomstige lekkages te voorkomen?',
      answer:
        'Zeker! Na de reparatie geven wij u preventieve tips en adviezen, zodat u toekomstige wateroverlast kunt voorkomen.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-lekkage" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-lekkage" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* =================== HERO SECTION =================== */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/loodgieter-lekkage.webp"
            alt="Loodgieter Lekkage - AD-Loodgietersbedrijf"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loodgieter Lekkage</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u wateroverlast door een lekkage? Onze experts staan 24/7 klaar om uw lekkage snel en vakkundig te verhelpen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Direct Hulp
            </Link>
          </div>
        </div>
      </header>

      {/* =================== MAIN CONTENT =================== */}
      <main className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          {/* Introductie sectie */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Waarom Snel Ingrijpen Bij Lekkages Essentieel Is</h2>
            <article className="space-y-6">
              <p>
                Een lekkage kan al snel grote schade aanrichten. Water dat zich ophoopt achter muren of onder vloeren kan schimmelvorming veroorzaken, houten structuren aantasten en zelfs de stabiliteit van uw woning in gevaar brengen. Daarom is het cruciaal om een lekkage zo snel mogelijk te laten verhelpen.
              </p>

              <h3 className="text-2xl font-bold">Onze Detectietechnieken: Snel en Efficiënt</h3>
              <p>
                Onze loodgieters maken gebruik van de nieuwste technologieën om lekkages snel en nauwkeurig te detecteren zonder onnodig breekwerk. Wij gebruiken onder andere:
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li><strong className="text-blue-500">Thermografie:</strong> Warmtecamera’s die temperatuurverschillen detecteren om verborgen lekkages op te sporen.</li>
                <li><strong className="text-blue-500">Akoestische detectie:</strong> Geavanceerde apparatuur die het geluid van stromend water lokaliseert.</li>
                <li><strong className="text-blue-500">Endoscopie:</strong> Miniatuurcamera’s om moeilijk bereikbare plekken te inspecteren.</li>
              </ul>

              <h3 className="text-2xl font-bold">Directe Reparatie en Preventie</h3>
              <p>
                Zodra we de bron van de lekkage hebben gevonden, starten we direct met de reparatie. Of het nu gaat om een gescheurde leiding, een lekkend dak of een verstopte afvoer, wij bieden een duurzame oplossing. Daarnaast voorzien wij u van advies om toekomstige lekkages te voorkomen.
              </p>

              <p>
                Bekijk onze volledige lijst van diensten op onze{' '}
                <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                  Diensten-pagina
                </Link>.
              </p>
            </article>
          </section>

          {/* Sectie: Gevolgen en Verzekeringen */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Gevolgen van Niet-Verholpen Lekkages</h2>
            <p>
              Het niet tijdig verhelpen van een lekkage kan leiden tot kostbare schade. Denk aan:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li><strong className="text-blue-500">Schimmelvorming:</strong> Vochtige omgevingen zijn ideaal voor de groei van schimmels.</li>
              <li><strong className="text-blue-500">Structurele schade:</strong> Water kan beton aantasten en houten structuren doen rotten.</li>
              <li><strong className="text-blue-500">Verhoogde energiekosten:</strong> Vochtige muren hebben een lager isolerend vermogen, wat leidt tot hogere stookkosten.</li>
            </ul>

            <p>
              In veel gevallen dekt uw opstalverzekering de kosten van schade veroorzaakt door lekkages. Bekijk de{' '}
              <a
                href="https://www.consumentenbond.nl/verzekering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
              >
                Consumentenbond
              </a>{' '}
              voor meer informatie over verzekeringsdekking.
            </p>
          </section>
        </div>
      </main>

      {/* ===================== FAQ SECTION ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} />
        </div>
      </section>

      {/* ===================== CTA / CONTACT SECTION ====================== */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Direct Hulp Nodig bij Lekkage?</h2>
            <p className="text-lg mb-6">
              Wacht niet langer en voorkom grotere schade. Onze experts staan 24/7 klaar om u te helpen bij lekkages en wateroverlast.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="font-bold">• 24/7 spoedservice</li>
              <li className="font-bold">• Snel ter plaatse</li>
              <li className="font-bold">• Duurzame oplossingen</li>
            </ul>
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block"
            >
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
