'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTools, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';

export default function InstallatiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src="/loodgieter-installeren.webp"
              alt="Installaties – Professionele installatie van sanitair en loodgieterssystemen"
              fill
              className="object-cover"
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
            Professionele installatie van sanitair en complete loodgieterssystemen op maat.
          </p>
        </motion.div>
      </section>

      {/* Dienst Details */}
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
              Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bieden wij complete en
              op maat gemaakte installatieoplossingen voor uw badkamer, keuken, en verwarmingssystemen. Onze
              gecertificeerde loodgieters combineren traditioneel vakmanschap met de nieuwste technologieën
              om een duurzame en efficiënte installatie te garanderen.
            </p>
            <p className="text-gray-600 mb-4">
              Wij gebruiken alleen hoogwaardige materialen en streven naar perfectie in elke fase, van de
              planning tot en met de afronding. Dit resulteert in installaties die niet alleen functioneel
              en energiezuinig zijn, maar ook lang meegaan. Onze diensten zijn beschikbaar in regio Utrecht,
              Amersfoort, Nieuwegein en omstreken.
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
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

      {/* Extra Informatie Sectie */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Veelgestelde vragen over installaties
            </h2>
            <p className="text-gray-600 mb-4">
              Heeft u vragen over onze installatiediensten? Hier beantwoorden wij enkele van de meest gestelde vragen, zodat u precies weet wat u kunt verwachten.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Hoe lang duurt een installatie?</strong> Afhankelijk van de omvang van het project variëren onze
                installaties van enkele uren tot een volledige werkdag.
              </li>
              <li>
                <strong>Welke materialen en technieken worden gebruikt?</strong> Wij werken uitsluitend met hoogwaardige
                materialen en maken gebruik van moderne technieken voor een duurzame en veilige installatie.
              </li>
              <li>
                <strong>Wat zijn de kosten?</strong> Onze prijzen zijn transparant en afhankelijk van uw specifieke wensen.
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Neem gerust contact met ons op voor meer informatie of een vrijblijvende offerte.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/loodgieter-afvoer-installeren.webp"
              alt="FAQ over installaties – Installatie van sanitair en leidingsystemen"
              fill
              className="object-cover"
            />
          </motion.div>
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
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - installaties',
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

