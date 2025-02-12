'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';

export default function AfvoerOntstoppenPage() {
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
              src="/riool-afvoer-ontstoppen.webp"
              alt="Afvoer Ontstoppen – Professionele reiniging en onderhoud"
              fill
              priority
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
          <h1 className="text-5xl font-bold mb-4">Afvoer Ontstoppen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Laat uw verstopte afvoer snel, grondig en duurzaam reinigen door onze gespecialiseerde experts.
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
              Waarom kiezen voor onze afvoerdiensten?
            </h2>
            <p className="text-gray-600 mb-4">
              Een verstopte afvoer kan leiden tot overstromingen, nare geuren en structurele schade aan uw pand. Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> zetten wij onze uitgebreide expertise in om verstoppingen snel en grondig te verhelpen. Wij maken gebruik van geavanceerde reinigingstechnieken, zoals hogedrukreiniging en roterende afvoerspiralen, om hardnekkige verstoppingen effectief op te lossen.
            </p>
            <p className="text-gray-600 mb-4">
              Onze service is 24/7 beschikbaar in regio Utrecht, Amersfoort, Nieuwegein en omstreken, zodat u altijd kunt rekenen op een directe interventie en een duurzame oplossing.
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
              src="/ontstoppingsveer.webp"
              alt="Verstopte afvoer – professionele reiniging"
              fill
              priority
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
                title: 'Snel Ter Plaatse',
                text: 'Onze experts zijn binnen korte tijd ter plaatse om de verstopping grondig te verhelpen.',
              },
              {
                icon: faTools,
                title: 'Moderne Technieken',
                text: 'Wij maken gebruik van de nieuwste apparatuur en innovatieve reinigingsmethoden voor optimale resultaten.',
              },
              {
                icon: faShieldAlt,
                title: 'Duurzame Oplossingen',
                text: 'Wij leveren langdurige en energiezuinige oplossingen, zodat u zich geen zorgen hoeft te maken over toekomstige verstoppingen.',
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Veelgestelde vragen over afvoer ontstoppen</h2>
            <p className="text-gray-600 mb-4">
              Heeft u vragen over onze afvoerdiensten? Hier beantwoorden wij enkele van de meest gestelde vragen, zodat u precies weet wat u kunt verwachten.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Welke methoden gebruiken jullie?</strong> Wij zetten moderne technieken in, zoals hogedrukreiniging en roterende afvoerspiralen, voor een grondige reiniging.
              </li>
              <li>
                <strong>Wat zijn de kosten?</strong> De tarieven zijn afhankelijk van de complexiteit van de verstopping, maar wij hanteren altijd transparante prijzen zonder verrassingen.
              </li>
              <li>
                <strong>Kunnen jullie dezelfde dag nog helpen?</strong> Ja, met onze 24/7 spoedservice zijn wij vaak binnen enkele uren op locatie.
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
              src="/afvoer-verstopping.webp"
              alt="FAQ over Afvoer Ontstoppen"
              fill
              priority
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
            <h2 className="text-3xl font-bold mb-6">Heeft u een verstopte afvoer?</h2>
            <p className="text-lg mb-6">
              Neem vandaag nog contact met ons op en laat onze experts uw probleem snel en professioneel oplossen.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Afvoer ontstoppen',
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


