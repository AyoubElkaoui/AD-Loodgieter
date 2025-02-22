'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm';

export default function OntstoppenAfvoerleidingenPage() {
  // ================
  // 1. SEO Info
  // ================
  const pageTitle = 'Ontstoppen Afvoerleidingen | Snel & Professioneel | AD-Loodgietersbedrijf';
  const pageDescription =
    'Ervaart u problemen met verstopte afvoerleidingen? AD-Loodgietersbedrijf biedt snelle en professionele ontstopservice om uw afvoersystemen weer optimaal te laten functioneren. Neem direct contact op voor hulp!';

  // Gestructureerde data (LocalBusiness):
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AD-Loodgietersbedrijf',
    url: 'https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen',
    description:
      'AD-Loodgietersbedrijf biedt professionele ontstopdiensten voor afvoerleidingen. Met moderne apparatuur en ervaren vakmensen zorgen wij voor een duurzame oplossing zodat uw afvoer weer vrij stroomt.',
    telephone: '+31640961848',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Afvoerstraat 5',
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
      question: 'Hoe snel kan de afvoer worden ontstoppt?',
      answer:
        'In spoedsituaties zorgen wij ervoor dat een van onze experts binnen 30 tot 60 minuten ter plaatse is voor een snelle interventie.',
    },
    {
      question: 'Welke methoden gebruikt u bij het ontstoppen?',
      answer:
        'Wij maken gebruik van hogedrukreinigers en camera-inspecties om de oorzaak van de verstopping nauwkeurig te achterhalen en effectief op te lossen.',
    },
    {
      question: 'Kan ik preventief advies krijgen?',
      answer:
        'Ja, na de interventie geven wij u waardevolle tips en advies om toekomstige verstoppingen te voorkomen.',
    },
    {
      question: 'Hoe vraag ik een vrijblijvende offerte aan?',
      answer:
        'U kunt ons telefonisch bereiken of het contactformulier invullen. Wij stellen dan een vrijblijvende offerte op maat voor u samen.',
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen" />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen" />
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
            src="/ontstoppen-afvoerleidingen-hero.webp"
            alt="Ontstoppen Afvoerleidingen - AD-Loodgietersbedrijf"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ontstoppen Afvoerleidingen</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u last van verstopte afvoerleidingen? Onze experts zorgen voor een snelle en effectieve ontstopservice zodat uw afvoer weer vrij kan stromen.
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
            Professionele Ontstopservice voor Uw Afvoerleidingen
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Verstopte afvoerleidingen kunnen snel voor grote overlast zorgen en leiden tot onnodige waterschade. Bij AD-Loodgietersbedrijf zorgen wij voor een directe en duurzame ontstopting van uw leidingen.
            </p>
            <p>
              Onze ervaren technici maken gebruik van de nieuwste technieken en hoogwaardige apparatuur om de verstopping snel te lokaliseren en te verhelpen. Hierdoor bent u verzekerd van een efficiënte service en een langdurig resultaat.
            </p>
            <h3 className="text-2xl font-bold mt-6">Onze Werkwijze</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Snelle Respons:</strong> Wij reageren direct op uw melding, zodat verdere schade wordt voorkomen.
              </li>
              <li>
                <strong className="text-blue-500">Moderne Apparatuur:</strong> Met behulp van hogedrukreinigers en camera-inspecties detecteren we de oorzaak van de verstopping.
              </li>
              <li>
                <strong className="text-blue-500">Duurzame Oplossingen:</strong> Wij zorgen voor een effectieve en langdurige oplossing zodat uw afvoerleidingen vrij blijven stromen.
              </li>
            </ul>
            <p>
              Heeft u vragen over onze ontstopservice of wilt u een vrijblijvende offerte ontvangen? Neem dan contact met ons op en ontdek hoe wij uw afvoerproblemen snel kunnen oplossen.
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
              Laat verstopte afvoerleidingen uw dag niet verpesten! Bel ons direct en onze experts zorgen voor een snelle en effectieve ontstopting, zodat u weer zorgeloos gebruik kunt maken van uw afvoersysteem.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• Snelle interventie</li>
              <li className="font-bold">• Moderne technieken</li>
              <li className="font-bold">• Duurzame resultaten</li>
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
