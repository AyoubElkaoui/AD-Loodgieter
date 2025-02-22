'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function LoodgieterAmsterdamPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle = 'Loodgieter in Amsterdam | 24/7 Spoed & Installaties | AD-Loodgietersbedrijf';
  const pageDescription =
    'Op zoek naar een ervaren loodgieter in Amsterdam? AD-Loodgietersbedrijf biedt 24/7 spoedservice voor lekkages, verstoppingen en installaties. Neem direct contact op voor snelle en vakkundige hulp!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/loodgieter-amsterdam',
    description:
      'Betrouwbare loodgietersdiensten in Amsterdam met 24/7 spoedservice, installatie en onderhoud. Wij zorgen dat uw sanitair en leidingwerk optimaal functioneren.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Keizersgracht 234',
      addressLocality: 'Amsterdam',
      postalCode: '1015 CJ',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.3731,
      longitude: 4.8922,
    },
    openingHours: ['Ma-Zo 00:00-23:59'],
  };

  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Biedt u ook spoedhulp in Amsterdam aan?',
      answer:
        'Ja, onze ervaren loodgieters in Amsterdam staan 24/7 voor u klaar, ook bij acute lekkages en verstoppingen.',
    },
    {
      question: 'Kan ik een vrijblijvende offerte aanvragen?',
      answer:
        'Absoluut! Wij geven u graag een op maat gemaakte offerte voor zowel reparaties als nieuwe installaties in Amsterdam.',
    },
    {
      question: 'Hoe snel kunt u bij mij ter plaatse zijn?',
      answer:
        'In urgente situaties streven wij ernaar binnen 30 tot 60 minuten in Amsterdam te arriveren, afhankelijk van uw locatie.',
    },
    {
      question: 'Helpt u ook bij installaties en preventief onderhoud?',
      answer:
        'Ja, naast spoedreparaties verzorgen wij ook installaties en regelmatig onderhoud om toekomstige problemen te voorkomen.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/loodgieter-amsterdam" />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/loodgieter-amsterdam" />
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
            src="/loodgieter-amsterdam.webp"
            alt="Loodgieter in Amsterdam - AD-Loodgietersbedrijf"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loodgieter in Amsterdam</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u snel hulp nodig bij lekkages, verstoppingen of installaties? Onze experts in Amsterdam staan 24/7 voor u klaar!
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
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Uw Expert in Loodgieterswerk in Amsterdam
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              AD-Loodgietersbedrijf is uw betrouwbare partner voor alle loodgietersklussen in Amsterdam. Of het nu gaat om een kleine reparatie, een vervelende verstopping of een complete installatie, wij zorgen voor een snelle en efficiënte oplossing.
            </p>
            <p>
              Wij begrijpen dat elk probleem uniek is en hanteren daarom een persoonlijke aanpak. Met onze 24/7 service bent u verzekerd van direct hulp, zodat uw woning of bedrijfspand zo min mogelijk hinder ondervindt.
            </p>
            <h3 className="text-2xl font-bold mt-6">Veelvoorkomende Loodgietersproblemen</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Lekkages</strong> – van kleine druppels tot uitgebreide waterschade.
              </li>
              <li>
                <strong className="text-blue-500">Verstoppingen</strong> – snel en effectief opgelost.
              </li>
              <li>
                <strong className="text-blue-500">Installaties</strong> – inclusief modernisering en onderhoud.
              </li>
              <li>
                <strong className="text-blue-500">Sanitair reparaties</strong> – voor een optimaal functionerend systeem.
              </li>
            </ul>
            <p>
              Wilt u meer weten over onze aanpak en dienstverlening? Neem vrijblijvend contact met ons op voor een inspectie en advies op maat.
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
              Heeft u een acute lekkage of andere loodgietersproblemen in Amsterdam? Ons deskundige team staat 24/7 klaar om u te helpen.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 bereikbaar</li>
              <li className="font-bold">• Snelle en vakkundige service</li>
              <li className="font-bold">• Maatwerkoplossingen</li>
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
