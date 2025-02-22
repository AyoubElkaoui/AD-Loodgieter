'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';
import { FaPhoneAlt } from 'react-icons/fa';

export default function LoodgieterAmersfoortPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle =
    'Loodgieter in Amersfoort | 24/7 Direct Hulp | AD-Loodgietersbedrijf';
  const pageDescription =
    'Heeft u een dringende lekkage of een andere loodgietersnoodsituatie in Amersfoort? AD-Loodgietersbedrijf biedt 24/7 professionele service. Neem direct contact met ons op!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-amersfoort',
    description:
      'Topkwaliteit loodgietersservice in Amersfoort met snelle respons, vakkundige reparaties, installatie en preventief onderhoud.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kerkstraat 25',
      addressLocality: 'Amersfoort',
      postalCode: '3811 XX',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.1561,
      longitude: 5.3878,
    },
    openingHours: ['Ma-Zo 00:00-23:59'],
  };

  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Is uw service ook buiten reguliere werktijden beschikbaar?',
      answer:
        'Ja, onze loodgieters staan 24/7 voor u klaar, ook tijdens feestdagen en in de nacht.',
    },
    {
      question: 'Kan ik een vrijblijvende offerte krijgen voor een badkamerinstallatie?',
      answer:
        'Zeker! Wij maken graag een op maat gemaakte offerte en adviseren u over de beste oplossingen voor uw project.',
    },
    {
      question: 'Voert u zowel lekkageopsporing als reparatie uit?',
      answer:
        'Absoluut, wij zijn gespecialiseerd in het opsporen van lekkages én het uitvoeren van alle benodigde reparaties.',
    },
    {
      question: 'Hoe snel kan er een loodgieter in Amersfoort bij mij zijn?',
      answer:
        'Bij spoedgevallen zijn wij vaak binnen 30 tot 60 minuten ter plaatse, zodat uw probleem snel wordt verholpen.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href="https://adloodgietersbedrijf.nl/loodgieter-amersfoort"
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://adloodgietersbedrijf.nl/loodgieter-amersfoort"
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
            src="/loodgieter-amersfoort.webp"
            alt="Loodgieter in Amersfoort - AD-Loodgietersbedrijf"
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
            Loodgieter in Amersfoort
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u snel hulp nodig bij <strong className="text-blue-500">leidingproblemen</strong> of <strong className="text-blue-500">sanitair</strong>? Onze specialisten staan dag en nacht voor u paraat!
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Direct: 24/7 Hulp
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
            Uw Vakkundige Loodgieter in Amersfoort
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Woonachtig in <strong className="text-blue-500">Amersfoort</strong> en op zoek naar een betrouwbare <strong className="text-blue-500">loodgieter</strong> die al uw problemen snel oplost? Bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> bent u aan het juiste adres.
            </p>

            <p>
              Onze ervaren loodgieters verzorgen alles: van de installatie van nieuw sanitair tot het verhelpen van vervelende verstoppingen en lekkages. Wij staan garant voor kwaliteit en service, zodat uw woon- of werkplek altijd optimaal functioneert.
            </p>

            <h3 className="text-2xl font-bold mt-6">
              Hulp bij acute storingen
            </h3>
            <p>
              Een onverwachte lekkage of verstopte afvoer kan snel voor overlast zorgen. Dankzij onze 24/7 spoedservice bent u verzekerd van directe hulp, zodat u snel weer gerust verder kunt.
            </p>

            <p>
              Wilt u meer weten over onze uitgebreide diensten? Bekijk dan onze{' '}
              <Link
                href="/diensten"
                className="text-green-600 font-semibold underline hover:text-green-800"
              >
                dienstenpagina
              </Link>{' '}
              of neem contact met ons op voor een vrijblijvende kennismaking.
            </p>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mt-10 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Veelvoorkomende Loodgietersproblemen
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Als lokale expert in <strong className="text-blue-500">Amersfoort</strong> komen wij regelmatig de volgende situaties tegen:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Verstoppingen</strong> – door ophoping van vet, zeep en vuil.
              </li>
              <li>
                <strong className="text-blue-500">Lekkende leidingen</strong> – door slijtage of temperatuurschommelingen.
              </li>
              <li>
                <strong className="text-blue-500">Defecte sanitaironderdelen</strong> – zoals kapotte kranen of verouderde spoelsystemen.
              </li>
              <li>
                <strong className="text-blue-500">Onvoldoende waterdruk</strong> – vaak een signaal van verstoppingen of oude leidingen.
              </li>
            </ul>
            <p>
              Door tijdig in te grijpen voorkomt u extra kosten en ongemakken. Wij adviseren u graag over preventieve maatregelen en onderhoudstips.
            </p>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mt-10 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Reparatie, Onderhoud en Verzekeringsadvies
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Of het nu gaat om een kleine reparatie of een uitgebreide installatie, ons team werkt snel en nauwkeurig. Heeft u vragen over de dekking van waterschade via uw <strong className="text-blue-500">verzekering</strong>? Wij geven u graag helder en deskundig advies.
            </p>
            <p>
              Voor meer informatie kunt u ook terecht op de website van het{' '}
              <a
                href="https://www.verbondvanverzekeraars.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold underline hover:text-green-800"
              >
                Verbond van Verzekeraars
              </a>
              . Bij grotere schade stellen wij een gedetailleerd rapport op, zodat u precies weet wat u kunt claimen.
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
              Neem Nu Contact Op
            </h2>
            <p className="text-lg mb-6">
              Heeft u direct hulp nodig of wilt u meer informatie over onze service als <strong className="text-blue-500">loodgieter in Amersfoort</strong>? Bel ons of stuur een bericht en wij zorgen voor een snelle oplossing.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 direct bereikbaar</li>
              <li className="font-bold">• Vakkundige reparaties en installaties</li>
              <li className="font-bold">• Transparante en scherpe tarieven</li>
            </ul>
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block"
            >
              Bel Direct
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
