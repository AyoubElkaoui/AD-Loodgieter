'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{scale: 1.1}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}
          >
            <Image
              src="/plumbing-tools.webp"
              alt="Plumbing Tools Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 break-words">
            Over AD-Loodgietersbedrijf
          </h1>
          <p className="text-base sm:text-lg px-2">
            Uw partner voor hoogwaardige loodgietersdiensten in Nederland, altijd met een glimlach.
          </p>
        </motion.div>
      </section>


      {/* Wie zijn wij */}
      <section className="py-16 bg-gray-100 max-sm:p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 1}}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Wie zijn wij?</h2>
            <p className="text-gray-600 mb-4">
              AD-Loodgietersbedrijf combineert meer dan 25 jaar vakmanschap met een passie voor klanttevredenheid. Wij
              bieden een breed scala aan loodgietersdiensten, van spoedklussen tot geplande renovaties.
            </p>
            <p className="text-gray-600 mb-6">
              Ons team van ervaren loodgieters zorgt voor snelle, betrouwbare en duurzame oplossingen, altijd afgestemd
              op uw behoeften.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 1}}
          >
            <Image
              src="/man-installs-heating-system-house-checks-pipes-with-wrench.webp"
              alt="Ons team"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Dynamische Timeline Sectie */}
      <section className="py-16 bg-whit max-sm:p-8e">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1}}
          >
            Onze Geschiedenis
          </motion.h2>
          <div className="relative">
            <div className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 h-full max-sm:hidden"></div>
            <div className="space-y-8">
              {[
                {year: '1998', text: 'Oprichting van AD-Loodgietersbedrijf.'},
                {year: '2005', text: 'Uitbreiding naar heel Nederland.'},
                {year: '2015', text: '25.000 succesvolle projecten afgerond.'},
                {year: '2023', text: 'Lancering van innovatieve diensten.'},
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{opacity: 0, y: 50}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 1, delay: index * 0.2}}
                >
                  <div className="bg-blue-500 text-white font-bold p-4 rounded-full shadow-md">
                    {item.year}
                  </div>
                  <div className="bg-gray-100 shadow-lg p-6 rounded-lg md:w-5/12">
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 max-sm:p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Veelgestelde Vragen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Array.from({length: 4}, (_, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: i * 0.2}}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vraag {i + 1}: Wat is uw aanpak?</h3>
                <p className="text-gray-600">
                  Wij garanderen dat een ervaren loodgieter binnen 30 minuten op locatie is, ongeacht het tijdstip.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900 text-white max-sm:p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 1}}
          >
            <h2 className="text-3xl font-bold mb-4">Neem contact op met ons</h2>
            <p className="text-lg mb-6">
              Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in en wij nemen zo snel mogelijk contact
              met u op.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 text-lg mr-3">&#9679;</span>
                24/7 beschikbaar voor spoedgevallen
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-lg mr-3">&#9679;</span>
                Snel en betrouwbaar
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-lg mr-3">&#9679;</span>
                Klantgerichte aanpak
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 1}}
          >
            <ContactForm/>
          </motion.div>
        </div>
      </section>
    </>
  );
}