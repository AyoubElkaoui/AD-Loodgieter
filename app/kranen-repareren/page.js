'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function KranenReparerenPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle = 'Kranen Repareren | Professionele Kranen Service | AD-Loodgietersbedrijf';
  const pageDescription =
    'Heeft u last van een lekkende of defecte kraan? AD-Loodgietersbedrijf is gespecialiseerd in het repareren van kranen. Wij zorgen voor een snelle, duurzame en efficiënte oplossing. Bel ons direct voor reparatie!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/kranen-repareren',
    description:
      'AD-Loodgietersbedrijf biedt snelle en professionele reparaties van kranen. Of uw kraan nu lekkert, piept of geheel defect is, wij staan 24/7 voor u klaar met duurzame oplossingen.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kranenstraat 12',
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
      question: 'Hoe snel kunt u een defecte kraan repareren?',
      answer:
        'In de meeste gevallen zijn wij binnen 30 tot 60 minuten ter plaatse om uw kraan te repareren, zodat verdere waterschade wordt voorkomen.',
    },
    {
      question: 'Welke problemen komen het meest voor bij kranen?',
      answer:
        'Veelvoorkomende issues zijn lekkages, piepende geluiden door slijtage en problemen met de kraanmechanismen die niet goed meer functioneren.',
    },
    {
      question: 'Biedt u ook preventief onderhoud voor kranen aan?',
      answer:
        'Ja, wij adviseren u graag over preventief onderhoud om toekomstige problemen te voorkomen en de levensduur van uw kraan te verlengen.',
    },
    {
      question: 'Kan ik een vrijblijvende offerte krijgen voor de reparatie?',
      answer:
        'Natuurlijk! Neem contact met ons op en wij stellen een vrijblijvende offerte op maat voor u samen.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/kranen-repareren" />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/kranen-repareren" />
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
            src="/kranen-repareren-hero.webp"
            alt="Kranen Repareren - AD-Loodgietersbedrijf"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kranen Repareren</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u last van een lekkende of piepende kraan? Onze experts staan paraat om uw kraan snel en vakkundig te repareren.
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
            Professionele Kranen Reparatie op Maat
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Een defecte kraan kan niet alleen vervelend zijn, maar ook leiden tot onnodig waterverlies en extra kosten. Bij AD-Loodgietersbedrijf zorgen wij voor een snelle diagnose en een duurzame reparatie, zodat u snel weer kunt genieten van een goed functionerende kraan.
            </p>
            <p>
              Onze ervaren monteurs maken gebruik van hoogwaardige materialen en moderne technieken om de oorzaak van het probleem te verhelpen. Of het nu gaat om een lekkende kraan of een kraan die niet meer goed functioneert, wij bieden de perfecte oplossing.
            </p>
            <h3 className="text-2xl font-bold mt-6">Onze Specialisaties in Kranen Repareren</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Lekkages Verhelpen:</strong> Snel ingrijpen om waterschade te minimaliseren.
              </li>
              <li>
                <strong className="text-blue-500">Mechanische Reparaties:</strong> Vervanging van versleten onderdelen voor een optimale werking.
              </li>
              <li>
                <strong className="text-blue-500">Preventief Onderhoud:</strong> Advies en onderhoud om toekomstige problemen te voorkomen.
              </li>
            </ul>
            <p>
              Heeft u vragen over onze werkwijze of wilt u een vrijblijvende offerte? Neem contact met ons op en ontdek hoe wij uw kraan snel en effectief kunnen repareren.
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
              Wacht niet langer bij een defecte kraan. Bel ons direct en laat onze experts uw probleem snel en duurzaam oplossen.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• Snelle interventie</li>
              <li className="font-bold">• Duurzame reparaties</li>
              <li className="font-bold">• Persoonlijk advies</li>
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
