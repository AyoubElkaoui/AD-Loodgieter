'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function VerstoptToiletPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle = 'Verstopt Toilet | Snel en Efficiënt Verholpen | AD-Loodgietersbedrijf';
  const pageDescription =
    'Heeft u een verstopt toilet? AD-Loodgietersbedrijf biedt snelle en professionele oplossingen voor uw verstopping. Neem direct contact op voor een snelle interventie!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/verstopt-toilet',
    description:
      'AD-Loodgietersbedrijf biedt vakkundige en snelle oplossingen voor een verstopt toilet. Onze experts staan 24/7 paraat om uw verstopping effectief te verhelpen.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Toiletstraat 1',
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
      question: 'Hoe snel kunt u een verstopt toilet verhelpen?',
      answer:
        'Onze experts streven ernaar binnen 30 tot 60 minuten ter plaatse te zijn om de verstopping in uw toilet effectief op te lossen.',
    },
    {
      question: 'Welke oorzaken leiden vaak tot een verstopt toilet?',
      answer:
        'Verstoppingen ontstaan meestal door teveel toiletpapier, het doorspoelen van ongewenste voorwerpen of ophoping van afval in de afvoer.',
    },
    {
      question: 'Wat kan ik doen om een verstopt toilet te voorkomen?',
      answer:
        'Wij adviseren u over regelmatig onderhoud en het vermijden van het doorspoelen van grote hoeveelheden toiletpapier of vreemde objecten.',
    },
    {
      question: 'Hoe vraag ik een vrijblijvende offerte aan?',
      answer:
        'Neem telefonisch contact met ons op of vul ons contactformulier in voor een gratis en vrijblijvende offerte op maat.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/verstopt-toilet" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/verstopt-toilet" />
        <meta property="og:type" content="website" />
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
            src="/verstopt-toilet-hero.webp"
            alt="Verstopt Toilet - AD-Loodgietersbedrijf"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Verstopt Toilet</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u een verstopt toilet dat voor overlast zorgt? Onze specialisten zorgen voor een snelle en efficiënte oplossing, zodat u snel weer normaal kunt doorspoelen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Direct
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
            Snel en Vakkundig Uw Verstopt Toilet Verholpen
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Een verstopt toilet kan voor veel ongemak zorgen en leiden tot onnodige waterschade. Bij AD-Loodgietersbedrijf zorgen wij voor een snelle diagnose en een duurzame oplossing, zodat u snel weer kunt genieten van een goed functionerend toilet.
            </p>
            <p>
              Onze ervaren loodgieters gebruiken moderne technieken en hoogwaardige materialen om de verstopping te verhelpen. Met onze 24/7 service bent u verzekerd van directe hulp, zelfs in spoedsituaties.
            </p>
            <h3 className="text-2xl font-bold mt-6">Waarom Kiezen voor Onze Toiletservice?</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Snelle Interventie:</strong> Wij reageren direct op uw melding om verdere schade te voorkomen.
              </li>
              <li>
                <strong className="text-blue-500">Duurzame Oplossingen:</strong> Wij zorgen voor een langdurige oplossing zodat verstoppingen in de toekomst worden geminimaliseerd.
              </li>
              <li>
                <strong className="text-blue-500">Deskundig Advies:</strong> Onze specialisten geven u waardevolle tips om toekomstige verstoppingen te voorkomen.
              </li>
            </ul>
            <p>
              Heeft u vragen over onze service of wilt u direct een afspraak maken? Neem dan gerust contact met ons op voor een gratis en vrijblijvende offerte.
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
              Laat een verstopt toilet uw dag niet verpesten! Bel ons direct en onze experts zorgen voor een snelle en effectieve oplossing.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 spoedservice</li>
              <li className="font-bold">• Snelle en vakkundige reparaties</li>
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
