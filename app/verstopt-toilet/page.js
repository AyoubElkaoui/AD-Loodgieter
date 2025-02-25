'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

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
      'AD-Loodgietersbedrijf biedt vakkundige en snelle oplossingen voor een verstopt toilet. Onze experts staan 24/7 paraat om uw verstopping effectief te verhelpen en verdere schade te voorkomen.',
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
    openingHours: ['Ma-Su 00:00-23:59'],
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
        {/* Basis Meta, Canonical en Open Graph Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://adloodgietersbedrijf.nl/verstopt-toilet" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/verstopt-toilet" />
        <meta property="og:type" content="website" />
        {/* Structured Data */}
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
            src="/verstopt-toilet-hero.webp"
            alt="Verstopt Toilet - AD-Loodgietersbedrijf"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Verstopt Toilet</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u een verstopt toilet dat voor overlast zorgt? Onze specialisten staan 24/7 paraat om uw verstopping snel en efficiënt op te lossen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Direct
            </Link>
          </div>
        </div>
      </header>

      {/* =================== MAIN CONTENT =================== */}
      <main className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          {/* Sectie 1: Introductie */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Snel en Vakkundig Uw Verstopt Toilet Verholpen</h2>
            <article className="space-y-6">
              <p>
                Een verstopt toilet is niet alleen hinderlijk, het kan ook leiden tot extra waterverbruik en onnodige stress. Bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> begrijpen we hoe belangrijk het is om snel te handelen. Wij bieden een complete service waarbij we niet alleen de verstopping verhelpen, maar ook de onderliggende oorzaak aanpakken.
              </p>
              <p>
                Onze experts maken gebruik van de nieuwste technologieën, waaronder camera-inspecties en hogedrukreinigers, om de oorzaak van de verstopping nauwkeurig te bepalen. Hierdoor kunnen wij gericht ingrijpen zonder onnodige schade aan uw sanitair.
              </p>
              <h3 className="text-2xl font-bold">Preventie en Onderhoud</h3>
              <p>
                Naast directe reparatie adviseren wij u ook over preventieve maatregelen. Regelmatig onderhoud kan toekomstige verstoppingen voorkomen en uw sanitairsysteem optimaal laten functioneren. Meer informatie over onderhoudstips vindt u op onze{' '}
                <Link href="/blogs" className="text-blue-500 font-semibold hover:underline">
                  blogpagina
                </Link>.
              </p>
              <p>
                Wilt u meer weten over hoe u verstoppingen kunt voorkomen? Bezoek dan ook de website van{' '}
                <a
                  href="https://www.nibud.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Nibud
                </a>{' '}
                voor tips over waterbesparing en duurzaam onderhoud.
              </p>
              <p>
                Onze werkwijze is transparant: na een grondige inspectie ontvangt u altijd een vrijblijvende offerte en een gedetailleerd reparatieplan. Dit geeft u volledige zekerheid over de kosten en het verloop van de werkzaamheden.
              </p>
            </article>
          </section>

          {/* Sectie 2: Veelvoorkomende Oorzaken */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Veelvoorkomende Oorzaken van Verstoppingen</h2>
            <article className="space-y-6">
              <p>
                Verstoppingen in toiletten ontstaan vaak door een combinatie van factoren. Overmatig gebruik van toiletpapier, het doorspoelen van ongewenste voorwerpen of een slechte afvoerconstructie kunnen allemaal bijdragen aan het ontstaan van een verstopping.
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="text-blue-500">Te veel toiletpapier</strong> – kan leiden tot blokkades in de afvoer.
                </li>
                <li>
                  <strong className="text-blue-500">Ongewenste voorwerpen</strong> – het doorspoelen van voorwerpen die niet bedoeld zijn voor het toilet.
                </li>
                <li>
                  <strong className="text-blue-500">Slechte afvoerconstructie</strong> – oudere systemen die niet meer optimaal functioneren.
                </li>
              </ul>
              <p>
                Voor aanvullende informatie over hoe u verstoppingen kunt voorkomen, raadpleeg de{' '}
                <a
                  href="https://www.consumentenbond.nl/wonen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Consumentenbond
                </a>.
              </p>
            </article>
          </section>

          {/* Sectie 3: Reparatie, Onderhoud en Verzekering */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Reparatie, Onderhoud en Verzekering</h2>
            <article className="space-y-6">
              <p>
                Of het nu gaat om een kleine verstopping of een complete herinstallatie van uw toilet, wij zorgen voor een snelle en duurzame oplossing. Onze professionals werken volgens hoge kwaliteitsnormen en gebruiken alleen materialen van de hoogste kwaliteit.
              </p>
              <p>
                Wij adviseren u ook over preventief onderhoud, zodat u in de toekomst niet voor onverwachte verstoppingen komt te staan. Bovendien kan een gedetailleerd reparatierapport u helpen bij het indienen van een claim bij uw opstal- of inboedelverzekering. Lees meer over verzekeringskwesties op de website van de{' '}
                <a
                  href="https://www.rijksoverheid.nl/onderwerpen/wonen-en-hypotheken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Rijksoverheid
                </a>.
              </p>
              <p>
                Voor een overzicht van al onze diensten, bezoek onze{' '}
                <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                  Diensten-pagina
                </Link>.
              </p>
            </article>
          </section>
        </div>
      </main>

      {/* ===================== FAQ SECTION ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-toilet.webp"/>
        </div>
      </section>

      {/* ===================== CTA / CONTACT SECTION ====================== */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Neem Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Laat een verstopt toilet uw dag niet verpesten! Bel ons direct en onze experts zorgen voor een snelle en effectieve oplossing.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="font-bold">• 24/7 spoedservice</li>
              <li className="font-bold">• Snelle interventie</li>
              <li className="font-bold">• Deskundig en persoonlijk advies</li>
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
