'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import KlantBeoordelingen from '@/components/KlantBeoordelingen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWrench, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'WC Ontstoppen',
    description: 'Last van een verstopt toilet? Wij zorgen voor snelle en effectieve ontstopping, 24/7 bereikbaar.',
    image: '/ontstoppen-wc-loodgieter.webp',
    link: '/diensten/wc-ontstoppen',
  },
  {
    title: 'Afvoer Ontstoppen',
    description: 'Laat uw verstopte afvoer grondig reinigen door onze ervaren loodgieters.',
    image: '/wc-ontstoppen.webp',
    link: '/diensten/afvoer-ontstoppen',
  },
  {
    title: 'Lekkages Oplossen',
    description: 'Detectie en reparatie van lekkages om verdere schade te voorkomen.',
    image: '/Lekkage-installatie.webp',
    link: '/diensten/lekkages-oplossen',
  },
  {
    title: 'Installaties',
    description: 'Professionele installatie van sanitair en loodgieterssystemen op maat.',
    image: '/loodgieter-staand.webp',
    link: '/diensten/installaties',
  },
  {
    title: 'Reparaties',
    description: 'Snelle en vakkundige reparaties aan leidingen en verwarmingssystemen.',
    image: '/reparatie-loodgieter.webp',
    link: '/diensten/reparaties',
  },
];

const whyChooseUsData = [
  { icon: faClock, title: '24/7 Beschikbaar', text: 'Altijd bereikbaar voor spoedklussen.' },
  { icon: faWrench, title: 'Professioneel', text: 'Vakkundige monteurs met ervaring.' },
  { icon: faShieldAlt, title: 'Betrouwbaar', text: 'Heldere prijzen en topkwaliteit.' },
  { icon: faSmile, title: 'Tevreden Klanten', text: 'Hoge klanttevredenheid staat voorop.' },
];

export default function DienstenPage() {
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
              src="/loodgieter-werken-aan-afvoer.webp"
              alt="Loodgietersdiensten in Utrecht en omgeving"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 break-words">Onze Diensten</h1>
          <p className="text-base sm:text-lg px-2">
            Uw vertrouwde partner voor loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.</p>
          <p>Of het nu gaat om spoedklussen of geplande installaties, wij staan klaar om u te helpen met snelle,
            betrouwbare service.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="#diensten"
              className="bg-green-500 hover:bg-green-600 py-3 px-6 rounded-lg text-white font-semibold shadow-md transition"
            >
              Bekijk Onze Diensten
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Diensten Overzicht */}
      <section id="diensten" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Wat wij bieden</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 text-center">
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bieden we een uitgebreid scala
            aan professionele loodgietersdiensten. Ons doel is om uw leven makkelijker te maken door oplossingen te
            bieden voor elke uitdaging, groot of klein. Met een focus op kwaliteit en betrouwbaarheid zorgen wij ervoor
            dat onze klanten in <strong>Utrecht</strong>, <strong>Amersfoort</strong> en daarbuiten altijd op ons kunnen
            rekenen.
          </p>

          <div className="flex flex-col items-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: index * 0.2}}
                >
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <Link
                      href={service.link}
                      className="text-blue-500 font-semibold hover:underline mt-4 block"
                    >
                      Lees meer
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {services.slice(2).map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: index * 0.2}}
                >
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <Link
                      href={service.link}
                      className="text-blue-500 font-semibold hover:underline mt-4 block"
                    >
                      Lees meer
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Wij */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
          >
            Waarom kiezen voor AD-Loodgietersbedrijf?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto mb-8"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bent u verzekerd van hoogwaardig
            vakmanschap en uitstekende service.
            Wij bieden transparante prijzen, duidelijke communicatie, en oplossingen die op maat gemaakt zijn voor uw
            situatie. Ons team werkt met
            de nieuwste technologieën en hoogwaardige materialen om ervoor te zorgen dat elk project aan de hoogste
            standaarden voldoet.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.2}}
              >
                <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-4xl mb-4"/>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Klantbeoordelingen */}
      <section id="reviews" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Wat onze klanten zeggen</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> draait alles om
            klanttevredenheid. Onze missie is om ervoor te zorgen dat elke klant tevreden is met onze service en
            vakmanschap. Lees de ervaringen van onze klanten en ontdek waarom wij de meest gewaardeerde loodgieter zijn
            in <strong>Utrecht</strong>, <strong>Amersfoort</strong>.
          </p>
          <KlantBeoordelingen/>
        </div>
      </section>

      {/* Contact Form Sectie */}
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
