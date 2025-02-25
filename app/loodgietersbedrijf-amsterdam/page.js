'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

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

      {/* =================== HEADER / HERO SECTION =================== */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center text-white px-4">
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
        </div>
      </header>

      {/* =================== MAIN CONTENT =================== */}
      <main className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 leading-relaxed text-base md:text-lg">
          {/* Sectie 1: Introductie */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Uw Expert in Loodgieterswerk in Amsterdam</h2>
            <article className="space-y-6">
              <p>
                <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> is uw betrouwbare partner voor alle loodgietersklussen in Amsterdam. Of het nu gaat om een kleine reparatie, een vervelende verstopping of een complete installatie, wij zorgen voor een snelle en efficiënte oplossing. Onze aanpak is gebaseerd op vakmanschap, gecombineerd met moderne technieken voor lekdetectie en reparatie.
              </p>
              <p>
                Wij begrijpen dat elk probleem uniek is en hanteren daarom een persoonlijke aanpak. Met onze 24/7 service bent u verzekerd van directe hulp, zodat uw woning of bedrijfspand zo min mogelijk hinder ondervindt. Daarnaast delen we regelmatig tips en updates in onze{' '}
                <Link href="/blogs" className="text-green-600 font-semibold underline hover:text-green-800">
                  blogs
                </Link>
                , zodat u goed geïnformeerd blijft over onderhoud en preventie.
              </p>
              <h3 className="text-2xl font-bold">Waarom Kiezen voor AD-Loodgietersbedrijf?</h3>
              <p>
                Wij staan bekend om onze transparante werkwijze en snelle service. Voordat we aan de slag gaan, ontvangt u altijd een duidelijke offerte en een inschatting van de werkzaamheden. Zo weet u precies waar u aan toe bent. Bent u benieuwd naar onze andere specialisaties? Neem een kijkje op onze{' '}
                <Link href="/diensten" className="text-green-600 font-semibold underline hover:text-green-800">
                  Diensten-pagina
                </Link>{' '}
                of lees meer over ons team en onze werkwijze op de{' '}
                <Link href="/over-ons" className="text-green-600 font-semibold underline hover:text-green-800">
                  Over Ons-pagina
                </Link>
                .
              </p>
              <p>
                Amsterdam is een dynamische stad met veel oudere panden. Hierdoor kunnen verouderde leidingen en sanitair sneller problemen veroorzaken. Met onze jarenlange ervaring in de hoofdstad kennen we de specifieke uitdagingen en bieden we oplossingen op maat. Van spoedklussen tot geplande renovaties, wij zorgen ervoor dat uw loodgietersproblemen snel tot het verleden behoren.
              </p>
            </article>
          </section>

          {/* Sectie 2: Veelvoorkomende Loodgietersproblemen */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Veelvoorkomende Loodgietersproblemen in Amsterdam</h2>
            <article className="space-y-6">
              <p>
                In een stad als Amsterdam komen wij regelmatig dezelfde problemen tegen. Door snel te handelen, voorkomt u dat een klein euvel uitgroeit tot een grote kostenpost:
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li><strong className="text-blue-500">Lekkages</strong> – van kleine druppels tot uitgebreide waterschade.</li>
                <li><strong className="text-blue-500">Verstoppingen</strong> – vaak veroorzaakt door vet- en zeepresten of ophoping van vuil.</li>
                <li><strong className="text-blue-500">Installaties</strong> – nieuw sanitair, cv-ketels of leidingwerk, snel en professioneel aangelegd.</li>
                <li><strong className="text-blue-500">Onderhoud</strong> – periodieke check-ups om toekomstige problemen te voorkomen.</li>
              </ul>
              <p>
                Meer weten over verantwoord watergebruik en het voorkomen van waterschade? Bezoek dan bijvoorbeeld{' '}
                <a
                  href="https://www.waternet.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold underline hover:text-green-800"
                >
                  Waternet
                </a>
                , waar u informatie vindt over duurzaam waterbeheer in de regio Amsterdam.
              </p>
            </article>
          </section>

          {/* Sectie 3: Installaties, Onderhoud en Verzekering */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Installaties, Onderhoud en Verzekering</h2>
            <article className="space-y-6">
              <p>
                Naast spoedreparaties en lekkageoplossingen verzorgen wij ook volledige installaties. Denk aan het plaatsen van een nieuwe cv-ketel, het moderniseren van uw badkamer of het aanleggen van leidingwerk in een renovatieproject. Al deze werkzaamheden voeren wij uit met hoogwaardige materialen en volgens strenge kwaliteitsnormen.
              </p>
              <p>
                Wilt u meer weten over hoe verzekeringen omgaan met waterschade of lekkages? Kijk dan op de site van de{' '}
                <a
                  href="https://www.consumentenbond.nl/verzekering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold underline hover:text-green-800"
                >
                  Consumentenbond
                </a>
                . In veel gevallen dekt een opstal- of inboedelverzekering (een deel van) de schade, zeker als u kunt aantonen dat u tijdig onderhoud heeft laten plegen.
              </p>
              <p>
                Heeft u vragen over onze diensten of wilt u weten hoe wij u verder kunnen helpen in Amsterdam? Neem gerust contact met ons op voor een{' '}
                <strong className="text-blue-500">vrijblijvend advies</strong>. Wij staan dag en nacht klaar om u te ondersteunen bij alle loodgietersklussen.
              </p>
            </article>
          </section>
        </div>
      </main>

      {/* ===================== FAQ SECTION ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-repareren.webp"/>
        </div>
      </section>

      {/* ===================== CTA / CONTACT SECTION ====================== */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Neem Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Heeft u een acute lekkage of andere loodgietersproblemen in Amsterdam? Ons deskundige team staat 24/7 klaar om u te helpen.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
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
          </div>
          <div className="p-6 rounded-lg shadow">
            <ContactFormWrapper />
          </div>
        </div>
      </footer>
    </>
  );
}
