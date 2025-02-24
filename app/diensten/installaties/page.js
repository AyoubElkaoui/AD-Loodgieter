'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTools, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';
import FAQSections from '@/components/FAQ/FAQSection';
import FAQSection from "@/components/FAQ/FAQSection";

export default function InstallatiesPage() {
  // FAQ-items specifiek voor de installaties-pagina
  const faqItems = [
    {
      question: "Hoe lang duurt een installatieproject?",
      answer: "Afhankelijk van de omvang van het project variëren onze installaties van enkele uren tot een volledige werkdag. We plannen altijd nauwkeurig zodat u zo snel mogelijk van uw nieuwe systeem kunt genieten."
    },
    {
      question: "Welke materialen en technieken gebruikt u?",
      answer: "Wij werken uitsluitend met hoogwaardige materialen en maken gebruik van moderne technieken. Zo garanderen we een duurzame, energiezuinige en veilige installatie."
    },
    {
      question: "Biedt u maatwerkoplossingen?",
      answer: "Absoluut. Onze installaties worden volledig op maat ontworpen om naadloos aan te sluiten op uw specifieke wensen en de bestaande infrastructuur."
    },
    {
      question: "Hoe zit het met garantie en nazorg?",
      answer: "Op al onze installaties bieden wij garantie en voorzien wij u van gedegen onderhoudsadvies. Mocht er iets zijn, dan staan onze experts altijd voor u klaar."
    },
    {
      question: "Hoe kan ik een afspraak maken?",
      answer: "U kunt eenvoudig contact met ons opnemen via onze contactpagina of telefonisch. Wij plannen dan een afspraak in op een moment dat u het beste uitkomt."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh' }}>
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/loodgieter-installeren.webp"
              alt="Installaties – Professionele installatie van sanitair en loodgieterssystemen"
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
          <h1 className="text-5xl font-bold mb-4">Installaties</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Professionele installatie van sanitair en complete loodgieterssystemen op maat, voor een perfecte afwerking.
          </p>
        </motion.div>
      </section>

      {/* Dienst Details / Waarom kiezen voor onze installaties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Waarom kiezen voor onze installaties?
            </h2>
            <p className="text-gray-600 mb-4">
              Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bieden wij complete, op maat gemaakte installatieoplossingen voor uw badkamer, keuken en verwarmingssystemen. Onze gecertificeerde loodgieters combineren traditioneel vakmanschap met de nieuwste technologieën om duurzame en energiezuinige installaties te realiseren.
            </p>
            <p className="text-gray-600 mb-4">
              Wij gebruiken alleen hoogwaardige materialen en werken nauwkeurig vanaf de planning tot de afronding. Dit zorgt niet alleen voor een optimale functionaliteit, maar ook voor een esthetisch aantrekkelijk resultaat dat jarenlang meegaat. Onze diensten zijn beschikbaar in regio <span className="font-bold">Utrecht</span>, <span className="font-bold">Amersfoort</span>, <span className="font-bold">Nieuwegein</span> en omliggende gebieden.
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition font-bold"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Installaties',
                })
              }
            >
              Neem contact op
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/installatie.webp"
              alt="Installatie werk - Perfect afgestemde sanitaire systemen"
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Onze voordelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: faClock,
                title: 'Snelle Service',
                text: 'Wij realiseren efficiënte installaties binnen de afgesproken termijn, zodat u snel kunt genieten van uw nieuwe sanitair.',
              },
              {
                icon: faTools,
                title: 'Professionele Installatie',
                text: 'Onze gecertificeerde experts leveren maatwerkoplossingen met hoogwaardige materialen en nauwkeurige afwerking.',
              },
              {
                icon: faShieldAlt,
                title: 'Garantie',
                text: 'Wij bieden garantie op al onze installaties en zorgen voor langdurige, duurzame resultaten.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Component */}
      <FAQSections
        faqItems={[
          {
            question: "Hoe lang duurt een installatieproject?",
            answer: "Afhankelijk van de omvang van het project variëren onze installaties van enkele uren tot een volledige werkdag. Wij zorgen voor een gedegen planning zodat u snel van uw nieuwe systeem kunt genieten."
          },
          {
            question: "Welke materialen gebruikt u voor een duurzame installatie?",
            answer: "Wij werken uitsluitend met hoogwaardige materialen en maken gebruik van de nieuwste technieken om een duurzame en energiezuinige installatie te garanderen."
          },
          {
            question: "Is maatwerk mogelijk?",
            answer: "Absoluut. Onze installaties worden volledig op maat gemaakt om perfect aan te sluiten op uw specifieke wensen en de bestaande infrastructuur."
          },
          {
            question: "Hoe werkt de garantie op uw installaties?",
            answer: "Op al onze installaties bieden wij garantie en staan wij klaar voor nazorg. Mocht er onverhoopt een probleem ontstaan, dan komen onze experts kosteloos terug om het op te lossen."
          },
          {
            question: "Hoe kan ik een afspraak maken?",
            answer: "U kunt eenvoudig contact met ons opnemen via onze contactpagina of telefonisch. Wij plannen dan een afspraak op een moment dat u het beste uitkomt."
          },
        ]} bannerImage="/loodgieter-toilet.webp"/>


      {/* Gerelateerde Diensten (Interne Links) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meer loodgietersdiensten</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Naast installaties kunt u bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> ook terecht voor:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <Link href="/diensten/reparaties" className="text-blue-500 hover:underline font-bold">
                Reparaties
              </Link> – vakkundige oplossingen voor kapotte leidingen en verwarmingssystemen.
            </li>
            <li>
              <Link href="/diensten/afvoer-ontstoppen" className="text-blue-500 hover:underline font-bold">
                Afvoer Ontstoppen
              </Link> – voorkom hardnekkige verstoppingen en mogelijke lekkages in uw afvoersysteem.
            </li>
            <li>
              <Link href="/diensten/wc-ontstoppen" className="text-blue-500 hover:underline font-bold">
                WC Ontstoppen
              </Link> – voor een snelle en grondige aanpak van toiletverstoppingen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Bekijk al onze diensten op de{' '}
            <Link href="/diensten" className="text-blue-500 hover:underline font-bold">
              Dienstenpagina
            </Link>.
          </p>
        </div>
      </section>

      {/* Externe Link (Relevante bron) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meer weten over duurzame sanitairinstallaties?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Lees meer over de nieuwste trends en duurzame technieken voor sanitairinstallaties op de website van{' '}
            <a
              href="https://www.c.technischeunie.nl/nieuws/dab-pumps-de-vermalende-pomp-genix.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-bold"
            >
              Technische Unie
            </a>.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6">Heeft u een installatieproject?</h2>
            <p className="text-lg mb-6">
              Neem vandaag nog contact met ons op, zodat wij uw project snel, professioneel en op maat kunnen uitvoeren.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition font-bold"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Installaties CTA',
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
