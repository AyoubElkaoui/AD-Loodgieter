'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function LoodgieterBreukelenPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle =
    'Loodgieter in Breukelen | 24/7 Spoedservice | AD-Loodgietersbedrijf';
  const pageDescription =
    'Zoekt u een deskundige loodgieter in Breukelen? AD-Loodgietersbedrijf is 24/7 bereikbaar voor lekkages, verstoppingen en alle loodgietersproblemen. Neem nu contact op!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-breukelen',
    description:
      'Professionele loodgietersdienst in Breukelen met snelle respons voor reparaties, installaties en preventief onderhoud.',
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
    openingHours: ['Ma-Zo 00:00-23:59'],
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
        'Uiteraard! Wij maken graag een vrijblijvende offerte op maat, zodat u precies weet wat u kunt verwachten.',
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
        <link
          rel="canonical"
          href="https://adloodgietersbedrijf.nl/loodgieter-breukelen"
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://adloodgietersbedrijf.nl/loodgieter-breukelen"
        />
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
            src="/loodgieter-breukelen.webp"
            alt="Loodgieter in Breukelen - AD-Loodgietersbedrijf"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Loodgieter in Breukelen
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u te maken met een onverwachte lekkage of verstopping? Onze specialisten in Breukelen staan 24/7 paraat om uw loodgietersprobleem direct op te lossen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Nu: 24/7 Hulp
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
            Uw Betrouwbare Loodgieterspecialist in Breukelen
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Welkom bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> in Breukelen. Met oog voor detail en een passie voor perfectie staan wij garant voor een snelle en duurzame oplossing van al uw loodgietersproblemen.
            </p>
            <p>
              Ons team combineert jarenlange ervaring met moderne technieken om lekkages, verstoppingen en andere problemen effectief te bestrijden. Of het nu gaat om een spoedsituatie of een gepland onderhoud, wij zorgen dat uw sanitair en leidingwerk optimaal functioneren.
            </p>
            <h3 className="text-2xl font-bold mt-6">
              Veelvoorkomende Loodgietersproblemen
            </h3>
            <p>
              In Breukelen zien wij regelmatig de volgende situaties:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Verstoppingen</strong> – door ophoping van vet, vuil en andere resten.
              </li>
              <li>
                <strong className="text-blue-500">Lekkende leidingen</strong> – als gevolg van slijtage of beschadiging.
              </li>
              <li>
                <strong className="text-blue-500">Defecte kranen en sanitair</strong> – door gebruik of veroudering.
              </li>
              <li>
                <strong className="text-blue-500">Onvoldoende waterdruk</strong> – vaak een indicatie van onderliggende problemen.
              </li>
            </ul>
            <p>
              Wij adviseren u graag over de juiste onderhoudsmaatregelen, zodat u in de toekomst minder hinder ondervindt.
            </p>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mt-10 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Spoedservice en Deskundig Advies
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Een acute lekkage of verstopping kan al snel voor serieuze overlast zorgen. Dankzij onze 24/7 spoedservice bent u verzekerd van snelle interventie, zodat verdere schade wordt voorkomen.
            </p>
            <p>
              Daarnaast geven wij advies over preventief onderhoud en verzekeringskwesties, zodat u altijd voorbereid bent op onverwachte situaties.
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
          CTA / CONTACT
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
            <h2 className="text-3xl font-bold mb-4">
              Neem Vandaag Contact Op
            </h2>
            <p className="text-lg mb-6">
              Heeft u vragen of heeft u direct een loodgieter nodig in Breukelen? Neem contact met ons op en wij bieden u een snelle en professionele oplossing.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 direct bereikbaar</li>
              <li className="font-bold">• Vakkundige reparaties en installaties</li>
              <li className="font-bold">• Transparante tarieven en persoonlijk advies</li>
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
