'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';
import { FaPhoneAlt } from 'react-icons/fa';

export default function LoodgieterMaarssenPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle =
    'Loodgieter in Maarssen | 24/7 Service | AD-Loodgietersbedrijf';
  const pageDescription =
    'Direct een professionele loodgieter nodig in Maarssen? AD-Loodgietersbedrijf staat 24/7 paraat. Bel ons nu voor onderhoud, reparaties of noodgevallen!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-maarssen',
    description:
      'Lokale loodgieter in Maarssen met 24/7 service. Specialist in reparaties, installatie en onderhoud aan leidingen en sanitair.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Spechtenkamp 334',
      addressLocality: 'Maarssen',
      postalCode: '3607 KT',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.1319,
      longitude: 5.0419,
    },
    openingHours: ['Mo-Su 00:00-23:59'],
  };

  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Bieden jullie ook spoedhulp in het weekend?',
      answer:
        'Ja, onze loodgieters zijn 24/7 beschikbaar, dus ook in het weekend en op feestdagen kunt u bij ons terecht.',
    },
    {
      question: 'Kan ik een offerte krijgen voor een nieuwe badkamer?',
      answer:
        'Absoluut, wij voorzien u graag van een heldere offerte en denken mee over de mogelijkheden voor uw badkamerverbouwing.',
    },
    {
      question: 'Repareren jullie alleen lekkages of ook installaties?',
      answer:
        'Wij zijn allround loodgieters. Dat betekent dat u zowel voor reparaties als installaties en onderhoud bij ons terechtkunt.',
    },
    {
      question: 'Hoe snel kunnen jullie bij mij zijn in Maarssen?',
      answer:
        'In spoedgevallen zijn we vaak binnen 30 tot 60 minuten ter plaatse. Voor niet-dringende klussen plannen we samen een geschikt moment in.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href="https://adloodgietersbedrijf.nl/loodgieter-maarssen"
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://adloodgietersbedrijf.nl/loodgieter-maarssen"
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
            src="/loodgieter-installeren.webp"
            alt="Loodgieter in Maarssen - AD-Loodgietersbedrijf"
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
            Loodgieter in Maarssen
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Snel hulp nodig bij <strong className="text-blue-500">leidingwerk</strong> of
            <strong className="text-blue-500"> sanitair</strong>? Ons vakkundig team staat
            24 uur per dag voor u klaar!
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Nu: 24/7 Service
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===================
          MAIN CONTENT
      ==================== */}
      <section className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 leading-relaxed text-base md:text-lg">
          {/* 1e H2 */}
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dé specialist voor al uw loodgieterswerk
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Woont u in <strong className="text-blue-500">Maarssen</strong> en zoekt u
              een allround <strong className="text-blue-500">loodgieter</strong> voor het
              oplossen van problemen of het installeren van nieuw sanitair?
              Bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> is geen
              klus te groot of te klein. Wij hebben jarenlange ervaring met onder
              andere het aanleggen en onderhouden van leidingwerk, het plaatsen van
              kranen, en het verhelpen van{' '}
              <strong className="text-blue-500">verstoppingen</strong>.
            </p>

            <p>
              Wist u dat wij ook gespecialiseerd zijn in lekdetectie en het herstellen
              van waterschade? Kijk gerust op onze{' '}
              <Link
                href="/lekkages-opsporen-maarssen"
                className="text-green-600 font-semibold underline hover:text-green-800"
              >
                Lekkage Opsporen in Maarssen-pagina
              </Link>{' '}
              voor meer informatie.
              Zo houden we uw woning of bedrijfspand in topconditie.
            </p>

            <h3 className="text-2xl font-bold mt-6">
              Directe hulp bij nood
            </h3>
            <p>
              Niets is zo vervelend als een acute verstopping of een lekkage die
              voor overlast zorgt. Onze spoedservice staat 24/7 paraat. Met de
              juiste apparatuur en expertise komen we snel ter plaatse om het
              probleem aan te pakken, zodat u verder kunt met uw dag.
            </p>

            <p>
              Wilt u meer weten over onze totale dienstverlening?
              Lees dan ook onze{' '}
              <Link
                href="/diensten"
                className="text-green-600 font-semibold underline hover:text-green-800"
              >
                Diensten-pagina
              </Link>{' '}
              of neem direct contact met ons op voor een{' '}
              <strong className="text-blue-500">vrijblijvend advies</strong>.
            </p>
          </motion.div>

          {/* 2e H2 */}
          <motion.h2
            className="text-3xl font-bold mt-10 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Veelvoorkomende loodgietersproblemen
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Als lokale loodgieter in <strong className="text-blue-500">Maarssen </strong>
              zien we regelmatig dezelfde problemen. Tijdig handelen kan een hoop kosten
              en stress besparen:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Verstopte afvoer</strong> – vaak
                veroorzaakt door ophopend vet, zeepresten of haren.
              </li>
              <li>
                <strong className="text-blue-500">Lekkende leiding</strong> – door
                slijtage of invloeden van buitenaf zoals vorst.
              </li>
              <li>
                <strong className="text-blue-500">Defecte sanitaironderdelen</strong> –
                kapotte kranen of spoelmechanismen.
              </li>
              <li>
                <strong className="text-blue-500">Slechte waterdruk</strong> – vaak
                een teken van verstoppingen of verouderde leidingen.
              </li>
            </ul>
            <p>
              Op zoek naar meer tips om verstoppingen te voorkomen? De{' '}
              <a
                href="https://nieuw-huisje.nl/meest-voorkomende-loodgietersproblemen-hoe-op-lossen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold underline hover:text-green-800"
              >
                Nieuw-Huisje
              </a>{' '}
              geeft nuttige adviezen over onderhoud en preventie. Zo blijft uw
              woning in optimale staat!
            </p>
          </motion.div>

          {/* 3e H2 */}
          <motion.h2
            className="text-3xl font-bold mt-10 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Reparatie, onderhoud en verzekering
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Of het nu gaat om een{' '}
              <strong className="text-blue-500">kleine reparatie</strong> of een
              volledig nieuwe installatie: ons team werkt snel en volgens
              hoge kwaliteitsnormen. Bent u benieuwd hoe het zit met de vergoeding
              vanuit uw <strong className="text-blue-500">opstal- of inboedelverzekering</strong>?
              In veel gevallen wordt waterschade (gedeeltelijk) gedekt, afhankelijk
              van uw polis.
            </p>
            <p>
              Voor meer informatie over de verschillen tussen verzekeringen kunt u
              ook kijken op de website van het{' '}
              <a
                href="https://www.verbondvanverzekeraars.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold underline hover:text-green-800"
              >
                Verbond van Verzekeraars
              </a>
              . Bij grotere reparaties of lekkages kunnen wij een uitgebreid
              rapport opstellen, dat u direct kunt indienen bij uw verzekeraar.
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
              Neem vandaag nog contact op
            </h2>
            <p className="text-lg mb-6">
              Heeft u vragen of direct hulp nodig van een{' '}
              <strong className="text-blue-500">loodgieter in Maarssen</strong>?
              Wij staan 24/7 voor u klaar. Aarzel niet om te bellen of
              een bericht te sturen.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 bereikbaar voor nood</li>
              <li className="font-bold">• Deskundig advies & reparaties</li>
              <li className="font-bold">• Transparante tarieven</li>
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
