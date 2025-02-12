'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';

export default function ReparatiesPage() {
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
              src="/loodgieter-reparatie.webp"
              alt="Reparaties – Snelle en vakkundige service voor uw leidingen en verwarmingssystemen"
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
          <h1 className="text-5xl font-bold mb-4">Reparaties</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Snelle, vakkundige en duurzame reparaties aan leidingen en verwarmingssystemen, uitgevoerd door gecertificeerde professionals.
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
              Waarom kiezen voor onze reparaties?
            </h2>
            <p className="text-gray-600 mb-4">
              Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> leveren wij hoogwaardige reparaties voor al uw loodgietersproblemen. Of het nu gaat om lekkende kranen, kapotte leidingen of defecte verwarmingssystemen, onze gecertificeerde experts zorgen voor een snelle en effectieve oplossing. We maken gebruik van moderne technieken zoals precisie-instrumenten en innovatieve materialen, zodat uw systemen weer optimaal en veilig werken.
            </p>
            <p className="text-gray-600 mb-4">
              Onze reparatieservice is 24/7 beschikbaar in regio Utrecht, Amersfoort, Nieuwegein en omgeving. Wij garanderen niet alleen een directe respons bij spoedgevallen, maar ook duurzame en kostenbesparende oplossingen op de lange termijn.
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Reparaties',
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
              src="/reparatie.webp"
              alt="Reparatie Gereedschap – Vakkundige reparatie van leidingen en verwarmingssystemen"
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
                text: 'Altijd bereikbaar voor spoedgevallen, zodat uw reparatie snel wordt gestart, ongeacht het tijdstip.',
              },
              {
                icon: faTools,
                title: 'Deskundige Reparaties',
                text: 'Onze gecertificeerde professionals voeren reparaties uit met moderne technieken en hoogwaardige materialen.',
              },
              {
                icon: faShieldAlt,
                title: 'Duurzame Oplossingen',
                text: 'Wij garanderen langdurige en energiezuinige reparaties, zodat uw systemen optimaal blijven functioneren.',
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

      {/* Contact Section */}
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
              Neem vandaag nog contact met ons op en laat onze experts uw probleem snel en professioneel oplossen. Wij staan klaar met een 24/7 spoedservice en een op maat gemaakte oplossing voor elk technisch probleem.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Reparaties',
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


