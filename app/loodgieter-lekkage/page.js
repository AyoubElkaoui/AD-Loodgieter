'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function LoodgieterLekkagePage() {
  // ================
  // 1. SEO Info
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
    openingHours: ['Ma-Zo 00:00-23:59'],
  };

  // ================
  // 2. FAQ-items
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
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-lekkage" />
        <meta property="og:type" content="website" />
        {/* Gestructureerde data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* ===================
          HERO SECTION
      ==================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loodgieter Lekkage</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u last van een lekkage en wilt u direct actie ondernemen? Onze specialisten staan 24/7 paraat om uw wateroverlast snel en vakkundig te verhelpen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Direct Hulp
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===================
          MAIN CONTENT
      ==================== */}
      <section className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 leading-relaxed text-base md:text-lg">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Directe en Duurzame Lekkage Reparatie
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Een lekkage kan leiden tot grote waterschade en extra kosten als deze niet snel wordt aangepakt. Bij AD-Loodgietersbedrijf
              zorgen wij voor een directe interventie, zodat de schade beperkt blijft en u snel weer gerust kunt zijn.
            </p>
            <p>
              Onze ervaren loodgieters diagnosticeren de oorzaak van de lekkage nauwkeurig en passen duurzame oplossingen toe. Of het nu gaat om een kapotte leiding, een defecte kraan of verborgen problemen achter de muren, wij bieden de juiste oplossing.
            </p>
            <h3 className="text-2xl font-bold mt-6">Onze Werkwijze bij Lekkages</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Snelle Respons:</strong> Wij starten direct met de reparatie zodra u contact met ons opneemt.
              </li>
              <li>
                <strong className="text-blue-500">Grondige Analyse:</strong> Onze experts bepalen de oorzaak van de lekkage zodat de oplossing blijvend is.
              </li>
              <li>
                <strong className="text-blue-500">Duurzame Reparatie:</strong> Wij maken gebruik van hoogwaardige materialen voor een langdurige oplossing.
              </li>
              <li>
                <strong className="text-blue-500">Preventief Advies:</strong> Wij geven u tips en adviezen om toekomstige lekkages te voorkomen.
              </li>
            </ul>
            <p>
              Heeft u vragen over onze aanpak of wilt u direct een vrijblijvende offerte ontvangen? Neem contact met ons op en wij staan klaar om u te helpen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================
          FAQ SECTION
      ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} />
        </div>
      </section>

      {/* =====================
          CTA / CONTACT SECTION
      ====================== */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Neem Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Heeft u een dringende lekkage die direct gerepareerd moet worden? Bel ons nu en onze specialisten zorgen voor een snelle interventie, zodat verdere schade wordt voorkomen.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 direct bereikbaar</li>
              <li className="font-bold">• Snelle en efficiënte reparatie</li>
              <li className="font-bold">• Persoonlijk en professioneel advies</li>
            </ul>
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block"
            >
              Bel Nu
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-6 rounded-lg shadow"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
