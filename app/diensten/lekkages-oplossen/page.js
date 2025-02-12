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
              src="/lekkage-oplossen.webp"
              alt="Lekkages Oplossen – Snelle detectie en reparatie"
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
            Laat lekkages snel en professioneel detecteren en herstellen om verdere schade en hoge herstelkosten te voorkomen.
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
              Waarom kiezen voor onze lekkagediensten?
            </h2>
            <p className="text-gray-600 mb-4">
              Lekkages kunnen ernstige schade veroorzaken aan zowel uw woning als bedrijfspand. Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> zetten wij onze jarenlange expertise in om lekkages met precisie op te sporen en te herstellen. Wij gebruiken geavanceerde detectietechnieken, zoals thermische beeldvorming en druktesten, om zelfs verborgen lekkages snel te lokaliseren.
            </p>
            <p className="text-gray-600 mb-4">
              Onze service garandeert niet alleen een directe interventie bij noodgevallen, maar zorgt er ook voor dat toekomstige problemen worden voorkomen. Met onze 24/7 beschikbaarheid in regio Utrecht, Amersfoort, Nieuwegein en omstreken bent u verzekerd van een snelle en duurzame oplossing.
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
              src="/Loodgieter-lekkage-vrouw.webp"
              alt="Lekkagedetectie en reparatie in uitvoering"
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
                text: 'Binnen enkele minuten op locatie, zelfs bij acute lekkages.',
              },
              {
                icon: faTools,
                title: 'Geavanceerde Apparatuur',
                text: 'Wij maken gebruik van de nieuwste technologieën voor nauwkeurige lekkagedetectie.',
              },
              {
                icon: faShieldAlt,
                title: 'Duurzame Reparaties',
                text: 'Langdurige en energiezuinige oplossingen die toekomstige lekkages voorkomen.',
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
              Heeft u vragen over onze lekkagediensten? Hier beantwoorden wij de meest gestelde vragen zodat u precies weet wat u kunt verwachten.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Hoe detecteren jullie een lekkage?</strong> Wij maken gebruik van geavanceerde detectietechnieken zoals thermische beeldvorming en druktesten.</li>
              <li><strong>Wat zijn de kosten?</strong> Onze tarieven zijn transparant en afhankelijk van de complexiteit van de klus, zodat u nooit voor verrassingen komt te staan.</li>
              <li><strong>Hoe snel kunnen jullie ter plaatse zijn?</strong> Met onze 24/7 spoedservice zijn wij binnen enkele minuten op locatie, zelfs in acute situaties.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Voor meer informatie of specifieke vragen kunt u altijd contact met ons opnemen.
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
              src="/Lekkage-installatie.webp"
              alt="Installatie en reparatie van lekkages"
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
              Neem vandaag nog contact met ons op en laat onze experts uw lekkage snel en professioneel oplossen. Wij bieden een 24/7 spoedservice met duurzame en kosteneffectieve oplossingen.
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


