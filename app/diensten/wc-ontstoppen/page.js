'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';

export default function DienstPage() {
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
              src="/wc-ontstoppen.webp"
              alt="WC Ontstoppen - Professionele en snelle service"
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
          <h1 className="text-5xl font-bold mb-4">WC Ontstoppen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Laat uw verstopt toilet snel en professioneel ontstoppen door onze gecertificeerde experts, met innovatieve technieken en 24/7 spoedservice.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Waarom uw toilet laten ontstoppen?</h2>
            <p className="text-gray-600 mb-4">
              Een verstopt toilet kan niet alleen voor ernstig ongemak zorgen, maar ook leiden tot schade en onhygiënische situaties. Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> begrijpen wij dat snelle en efficiënte interventie essentieel is. Onze gespecialiseerde loodgieters maken gebruik van moderne hogedrukreiniging, mechanische reiniging en camera-inspecties om de verstopping nauwkeurig te lokaliseren en grondig te verhelpen.
            </p>
            <p className="text-gray-600 mb-4">
              Door tijdig een verstopping te verhelpen, voorkomt u niet alleen verdere waterschade, maar verhoogt u ook de levensduur van uw sanitairsystemen. Onze service is 24/7 beschikbaar in regio Utrecht, Amersfoort, Nieuwegein en omstreken, zodat u altijd op ons kunt rekenen, ongeacht het tijdstip.
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
              src="/toilet-problem.webp"
              alt="Verstopt toilet - snelle en efficiënte ontstopping"
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
                title: '24/7 Beschikbaarheid',
                text: 'Wij bieden altijd een spoedservice, dag en nacht, zodat u nooit lang hoeft te wachten op professionele hulp.',
              },
              {
                icon: faTools,
                title: 'Professionele Service',
                text: 'Onze gecertificeerde loodgieters beschikken over jarenlange ervaring en maken gebruik van bewezen technieken voor optimale resultaten.',
              },
              {
                icon: faShieldAlt,
                title: 'Moderne Technieken',
                text: 'Wij maken gebruik van de nieuwste apparatuur, zoals hogedrukreiniging en camera-inspectie, om de verstopping grondig en duurzaam te verhelpen.',
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Veelgestelde vragen over WC Ontstoppen</h2>
            <p className="text-gray-600 mb-4">
              Heeft u vragen over onze ontstoppingsdiensten? Wij beantwoorden de meest gestelde vragen zodat u precies weet wat u kunt verwachten.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Hoe lang duurt het?</strong> Onze interventies duren doorgaans minder dan 30 minuten, afhankelijk van de aard van de verstopping.</li>
              <li><strong>Welke technieken gebruiken jullie?</strong> Wij maken gebruik van hogedrukreiniging, mechanische reiniging en camera-inspecties om de oorzaak van de verstopping nauwkeurig te lokaliseren en te verhelpen.</li>
              <li><strong>Wat zijn de kosten?</strong> De kosten zijn afhankelijk van de complexiteit van de klus. Wij hanteren duidelijke en transparante tarieven zonder verrassingen.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Heeft u aanvullende vragen of wilt u direct een afspraak maken? Neem dan gerust contact met ons op.
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
              src="/faq-toilet.webp"
              alt="Veelgestelde vragen over WC Ontstoppen"
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
            <h2 className="text-3xl font-bold mb-6">Heeft u een verstopt toilet?</h2>
            <p className="text-lg mb-6">
              Neem vandaag nog contact met ons op. Ons deskundige team staat 24/7 klaar om uw probleem snel en professioneel op te lossen met de nieuwste technologieën.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Wc-ontstoppen',
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

