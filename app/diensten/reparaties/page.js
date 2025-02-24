'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';
import FAQSection from '@/components/FAQ/FAQSection';

export default function ReparatiesPage() {
  // FAQ items voor deze pagina
  const faqItems = [
    {
      question: 'Werken jullie reparaties ook bij oudere leidingen?',
      answer:
        'Ja, wij hebben ruime ervaring met zowel oude als nieuwe leidingsystemen. We beoordelen altijd de staat van uw systeem en kiezen de meest geschikte reparatiemethode.',
    },
    {
      question: 'Wat als mijn verwarming blijft haperen na de reparatie?',
      answer:
        'Op al onze reparaties geven wij garantie. Blijft het probleem zich voordoen, dan komen we kosteloos terug om het verder te onderzoeken en op te lossen.',
    },
    {
      question: 'Welke regio’s bedienen jullie?',
      answer:
        'Wij zijn actief in Utrecht, Amersfoort, Nieuwegein, Maarssen en omliggende plaatsen. Ook buiten deze regio helpen we u graag, in overleg.',
    },
    {
      question: 'Zijn jullie reparaties duurzaam?',
      answer:
        'Wij kiezen altijd voor hoogwaardige materialen en oplossingen die de levensduur van uw installaties verlengen. Hiermee bespaart u op lange termijn kosten en energie.',
    },
    {
      question: 'Kan ik een onderhoudscontract afsluiten?',
      answer:
        'Ja, wij bieden ook onderhoudscontracten voor terugkerende controle en preventieve reparaties, zodat u grote problemen voor bent.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh' }}>
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src="/loodgieter-reparatie.webp"
              alt="Reparaties – Snelle en vakkundige service voor uw leidingen en verwarmingssystemen"
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Reparaties</h1>
          <p className="text-lg max-w-2xl mx-auto">
            <strong>Snelle, vakkundige en duurzame reparaties</strong> aan leidingen en verwarmingssystemen, uitgevoerd door gecertificeerde professionals.
          </p>
        </motion.div>
      </section>

      {/* Introductie & Probleemstelling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Waarom kiezen voor <strong>AD-Loodgietersbedrijf</strong> bij reparaties?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een defecte leiding, een kapotte kraan of een haperende verwarming kan uw dagelijks leven flink ontregelen. Bij
            <span className="font-bold text-blue-500"> AD-Loodgietersbedrijf</span> begrijpen we dat u dit zo snel mogelijk
            opgelost wilt hebben. Met onze <strong>24/7 spoedservice</strong> en jarenlange ervaring in regio Utrecht,
            Amersfoort en Nieuwegein, bieden wij een totaaloplossing voor elk reparatieprobleem.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onze <strong>gecertificeerde experts</strong> gaan verder dan alleen het vervangen van een kapot onderdeel. We zoeken
            naar de <em>onderliggende oorzaak</em> en geven u duurzaam advies, zodat u niet binnen de kortste keren
            weer tegen hetzelfde probleem aanloopt.
          </p>
        </div>
      </section>

      {/* Onze Werkwijze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Onze werkwijze: grondig & transparant
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Wij beginnen met een uitgebreide inspectie om de precieze oorzaak van het probleem te achterhalen. Of het nu gaat
              om een lekkage in uw leidingwerk of een storing in uw verwarmingssysteem, onze diagnose is altijd nauwkeurig.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Vervolgens gaan we direct over tot reparatie, waarbij we uitsluitend gebruikmaken van hoogwaardige materialen. Na
              afloop testen we uw systeem uitvoerig, zodat u zeker weet dat alles weer optimaal functioneert.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Reparaties Intro',
                })
              }
            >
              Neem direct contact op
            </Link>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/reparatie.webp"
              alt="Reparatie Gereedschap – Vakkundige reparatie van leidingen en verwarmingssystemen"
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Onze sterke punten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FontAwesomeIcon icon={faClock} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Spoedservice</h3>
              <p className="text-gray-700">
                Wij staan dag en nacht klaar om acute problemen direct aan te pakken, zodat u nooit lang zonder warm water of werkend sanitair zit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FontAwesomeIcon icon={faTools} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Deskundige Reparaties</h3>
              <p className="text-gray-700">
                Onze monteurs zijn gecertificeerd en blijven continu bijscholen, zodat ze altijd op de hoogte zijn van de nieuwste technieken en materialen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Duurzame Oplossingen</h3>
              <p className="text-gray-700">
                Met onze focus op kwaliteit en efficiëntie garanderen wij reparaties die langer meegaan en op de lange termijn kosten besparen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde Diensten (Interne Links) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meer loodgietersdiensten</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Naast reparaties kunt u bij ons ook terecht voor andere diensten. Bekijk bijvoorbeeld:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <Link href="/diensten/lekkages-oplossen" className="text-blue-500 hover:underline font-bold">
                Lekkages Oplossen
              </Link> – voorkom waterschade en structurele problemen.
            </li>
            <li>
              <Link href="/diensten/installaties" className="text-blue-500 hover:underline font-bold">
                Installaties
              </Link> – van nieuw sanitair tot volledige badkamer- of keukenrenovatie.
            </li>
            <li>
              <Link href="/diensten/wc-ontstoppen" className="text-blue-500 hover:underline font-bold">
                WC Ontstoppen
              </Link> – voor een snelle en grondige aanpak van toiletverstoppingen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Bekijk alle opties op onze{' '}
            <Link href="/diensten" className="text-blue-500 hover:underline font-bold">
              Dienstenpagina
            </Link>.
          </p>
        </div>
      </section>

      {/* Externe Link (Relevante bron) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meer weten over energiebesparing?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Een goed onderhouden verwarmingssysteem draagt bij aan een lager energieverbruik.
            Wilt u meer weten over energiebesparing en duurzame oplossingen? Bezoek dan de{' '}
            <a
              href="https://www.milieucentraal.nl/energie-besparen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-bold"
            >
              Milieu Centraal
            </a> website voor handige tips en onafhankelijk advies.
          </p>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQSection faqItems={faqItems} bannerImage="/loodgieter-lekkage.webp"/>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6">Heeft u een reparatie nodig?</h2>
            <p className="text-lg mb-6">
              Neem vandaag nog contact met ons op en laat onze experts uw probleem snel en professioneel oplossen. Wij staan klaar met een
              <strong> 24/7 spoedservice</strong> en een op maat gemaakte oplossing voor elk technisch probleem.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Reparaties CTA',
                })
              }
            >
              Neem contact op
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
