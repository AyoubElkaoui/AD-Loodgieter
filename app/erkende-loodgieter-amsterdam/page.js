'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function ErkendeLoodgieterAmsterdamPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle =
    'Erkende Loodgieter Amsterdam | Gecertificeerd & Betrouwbaar - AD-Loodgietersbedrijf';
  const pageDescription =
    'Zoekt u een erkende loodgieter in Amsterdam? AD-Loodgietersbedrijf is gecertificeerd en biedt professionele loodgietersdiensten voor zowel spoedsituaties als regulier onderhoud. Neem direct contact op voor betrouwbare service.';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam',
    description:
      'AD-Loodgietersbedrijf is een erkende en gecertificeerde loodgieter in Amsterdam, gespecialiseerd in reparaties, installaties en preventief onderhoud. Onze experts leveren betrouwbare service en voldoen aan de hoogste kwaliteitsnormen.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Amsterdamse Straat 45',
      addressLocality: 'Amsterdam',
      postalCode: '1017 HL',
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
      question: 'Wat betekent het dat u een erkende loodgieter bent?',
      answer:
        'Een erkende loodgieter voldoet aan strenge kwaliteits- en veiligheidsnormen en is gecertificeerd door relevante brancheorganisaties, wat garant staat voor vakmanschap en betrouwbaarheid.',
    },
    {
      question: 'Welke diensten biedt u als erkende loodgieter in Amsterdam?',
      answer:
        'Wij verzorgen onder andere lekkage reparaties, installatie van sanitair, reparatie van defecte kranen en preventief onderhoud – allemaal volgens de hoogste kwaliteitsnormen.',
    },
    {
      question: 'Wat zijn de voordelen van werken met een erkende loodgieter?',
      answer:
        'U profiteert van hoogwaardige service, professionele aanpak en de zekerheid dat alle werkzaamheden voldoen aan de geldende normen en regelgeving.',
    },
    {
      question: 'Hoe snel kan uw team reageren in een noodgeval?',
      answer:
        'Bij spoedsituaties streven wij ernaar binnen 30 tot 60 minuten bij u te zijn, zodat verdere schade wordt voorkomen en u snel weer gerust kunt zijn.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href="https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam"
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://adloodgietersbedrijf.nl/erkende-loodgieter-amsterdam"
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
            src="/erkende-loodgieter-amsterdam.webp"
            alt="Erkende Loodgieter Amsterdam - AD-Loodgietersbedrijf"
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
            Erkende Loodgieter Amsterdam
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Wij zijn een gecertificeerd en erkend loodgietersbedrijf in Amsterdam dat garant staat voor kwaliteit en betrouwbaarheid. Snel hulp nodig? Wij staan 24/7 voor u klaar.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Direct Contact
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
            Gecertificeerde Loodgietersdiensten in Amsterdam
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Als erkende loodgieter in Amsterdam bieden wij een breed scala aan diensten die zowel spoedinterventies als regulier onderhoud omvatten. Onze gecertificeerde experts werken volgens de hoogste kwaliteitsnormen om ervoor te zorgen dat al uw loodgietersklussen vakkundig worden uitgevoerd.
            </p>
            <p>
              Of het nu gaat om het verhelpen van lekkages, het installeren van nieuw sanitair of het uitvoeren van preventief onderhoud – bij ons bent u verzekerd van een duurzame en professionele service.
            </p>
            <h3 className="text-2xl font-bold mt-6">
              Waarom Kiezen voor een Erkende Loodgieter?
            </h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Gecertificeerde Expertise:</strong> Wij voldoen aan strenge kwaliteitsnormen en beschikken over alle benodigde certificeringen.
              </li>
              <li>
                <strong className="text-blue-500">Betrouwbare Service:</strong> Onze klanten kunnen rekenen op een snelle, professionele en duurzame oplossing voor al hun loodgietersklussen.
              </li>
              <li>
                <strong className="text-blue-500">24/7 Beschikbaarheid:</strong> Wij zijn dag en nacht bereikbaar voor spoedsituaties, zodat u altijd op ons kunt bouwen.
              </li>
            </ul>
            <p>
              Heeft u vragen over onze gecertificeerde diensten of wilt u direct een afspraak maken? Neem dan vrijblijvend contact met ons op en ontdek hoe wij u kunnen helpen.
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
              Bent u op zoek naar een erkende en gecertificeerde loodgieter in Amsterdam? Bel ons direct voor een snelle en professionele service.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• Gecertificeerde vakmensen</li>
              <li className="font-bold">• 24/7 bereikbaar voor spoedgevallen</li>
              <li className="font-bold">• Persoonlijk en betrouwbaar advies</li>
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
