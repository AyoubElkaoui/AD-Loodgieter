'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';

export default function LekkagesOplossenPage() {
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
              src="/lekkage-oplossen.jpg"
              alt="Lekkages Oplossen"
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
          <h1 className="text-5xl font-bold mb-4">Lekkages Oplossen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Detectie en reparatie van lekkages om verdere schade te voorkomen.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Waarom kiezen voor onze lekkagediensten?</h2>
            <p className="text-gray-600 mb-4">
              Lekkages kunnen grote schade veroorzaken aan uw woning of bedrijfspand. Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> zorgen wij voor een snelle en grondige oplossing. Onze experts sporen de oorzaak van de lekkage op en herstellen deze met precisie.
            </p>
            <p className="text-gray-600 mb-4">
              Wij zijn <strong>24/7 beschikbaar</strong> in regio Utrecht, Amersfoort en omgeving, zodat u ons altijd kunt bereiken voor hulp.
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
              src="/Loodgieter-lekkage-vrouw.jpg"
              alt="Lekkagedetectie"
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
                title: 'Snelle Reactie',
                text: 'Binnen korte tijd op locatie voor spoedreparaties.'
              },
              {
                icon: faTools,
                title: 'Geavanceerde Apparatuur',
                text: 'Wij gebruiken moderne technologie voor lekkagedetectie.'
              },
              {
                icon: faShieldAlt,
                title: 'Duurzame Reparaties',
                text: 'Langdurige oplossingen voor uw lekkageproblemen.'
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Veelgestelde vragen over lekkages</h2>
            <p className="text-gray-600 mb-4">
              Heeft u vragen over onze lekkagediensten? Hier zijn enkele van de meest gestelde vragen door onze klanten:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Hoe detecteren jullie een lekkage?</li>
              <li>Wat zijn de kosten voor lekkagedetectie en reparatie?</li>
              <li>Hoe snel kunnen jullie ter plaatse zijn?</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Neem contact met ons op als u meer specifieke vragen heeft of een afspraak wilt maken.
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
              src="/Lekkage-installatie.jpg"
              alt="FAQ over lekkages"
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
            <h2 className="text-3xl font-bold mb-6">Heeft u een lekkageprobleem?</h2>
            <p className="text-lg mb-6">
              Neem vandaag nog contact met ons op en wij zorgen ervoor dat uw probleem snel en professioneel wordt opgelost.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - lekkages',
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
