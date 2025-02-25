import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

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
    openingHours: ['Ma-Su 00:00-23:59'],
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
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://adloodgietersbedrijf.nl/ontstoppen-afvoerleidingen" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* =================== HEADER / HERO SECTION =================== */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center text-white px-4">
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
        </div>
      </header>

      {/* =================== MAIN CONTENT =================== */}
      <main className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          {/* Sectie 1: Introductie */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Professionele Ontstopservice voor Uw Afvoerleidingen</h2>
            <article className="space-y-6">
              <p>
                Verstopte afvoerleidingen kunnen snel leiden tot ernstige overlast en hoge reparatiekosten. Zelfs een kleine verstopping kan resulteren in waterschade en ongemak in uw dagelijkse leven. Daarom is het essentieel om direct in te grijpen zodra u problemen merkt.
              </p>
              <p>
                Bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> in Nieuwegein combineren wij traditionele vakkennis met moderne technologieën. Met behulp van hogedrukreinigers en camera-inspecties kunnen we de oorzaak van de verstopping snel en nauwkeurig achterhalen. Dit minimaliseert de ingreep en zorgt ervoor dat uw afvoer snel weer optimaal functioneert.
              </p>
              <h3 className="text-2xl font-bold">Directe Interventie en Preventie</h3>
              <p>
                Onze aanpak is gericht op snelle interventie en duurzame oplossingen. Zodra we de verstopping hebben opgespoord, starten we direct met de reparatie. Daarnaast adviseren wij u over preventieve maatregelen zodat toekomstige problemen worden voorkomen. Voor meer informatie over ons onderhoudsaanbod, bezoekt u onze{' '}
                <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                  Diensten-pagina
                </Link>.
              </p>
              <p>
                Wil je meer weten over waterbeheer en hoe verstopte leidingen voorkomen kunnen worden? Neem een kijkje op externe bronnen zoals{' '}
                <a
                  href="https://www.waternet.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Waternet
                </a>{' '}
                en{' '}
                <a
                  href="https://www.consumentenbond.nl/wonen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Consumentenbond
                </a>{' '}
                voor praktische adviezen en tips.
              </p>
            </article>
          </section>

          {/* Sectie 2: Veelvoorkomende Problemen */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Veelvoorkomende Problemen met Afvoerleidingen</h2>
            <article className="space-y-6">
              <p>
                In veel woningen ontstaan verstoppingen door het ophopen van vet, zeepresten en vuil. Dit kan leiden tot terugslag en overstromingen, wat niet alleen voor overlast zorgt maar ook voor structurele schade aan uw woning kan leiden.
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="text-blue-500">Vetophoping</strong> – langdurig gebruik kan zorgen voor ophoping in de leidingen.
                </li>
                <li>
                  <strong className="text-blue-500">Zeepresten en vuil</strong> – resulteren vaak in verstoppingen die de waterdoorstroming belemmeren.
                </li>
                <li>
                  <strong className="text-blue-500">Verouderd leidingwerk</strong> – oudere systemen zijn vatbaarder voor verstoppingen en lekkages.
                </li>
              </ul>
              <p>
                Voor tips over het voorkomen van verstoppingen en onderhoud, raadpleeg u externe informatiebronnen zoals{' '}
                <a
                  href="https://www.milieucentraal.nl/bewust-wonen/water-besparen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Milieu Centraal
                </a>.
              </p>
            </article>
          </section>

          {/* Sectie 3: Reparatie, Onderhoud en Verzekering */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Reparatie, Onderhoud en Verzekering</h2>
            <article className="space-y-6">
              <p>
                Of het nu gaat om een kleine reparatie of een volledige reiniging van uw afvoerleidingen, ons team werkt snel en volgens hoge kwaliteitsnormen. Wij zorgen voor een duurzame oplossing en bieden u tevens een gedetailleerd reparatierapport. Dit rapport kunt u gebruiken bij uw verzekeraar om (gedeeltelijke) schade vergoed te krijgen.
              </p>
              <p>
                Voor meer informatie over de dekking van waterschade en de verschillen tussen opstal- en inboedelverzekeringen, bezoekt u de websites van de{' '}
                <a
                  href="https://www.consumentenbond.nl/verzekering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  Consumentenbond
                </a>{' '}
                en de{' '}
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
                Wilt u meer weten over onze uitgebreide dienstverlening? Bezoek dan onze{' '}
                <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                  Diensten-pagina
                </Link>{' '}
                of neem direct contact met ons op voor een vrijblijvend advies.
              </p>
            </article>
          </section>
        </div>
      </main>

      {/* ===================== FAQ SECTION ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-lekkage.webp"/>
        </div>
      </section>

      {/* ===================== CTA / CONTACT SECTION ====================== */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Neem Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Laat een verstopte afvoer u niet in de weg staan. Bel ons direct en onze experts zorgen voor een snelle en effectieve ontstopservice, zodat u weer zorgeloos gebruik kunt maken van uw afvoer.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
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
          </div>
          <div className="p-6 rounded-lg shadow">
            <ContactFormWrapper />
          </div>
        </div>
      </footer>
    </>
  );
}
