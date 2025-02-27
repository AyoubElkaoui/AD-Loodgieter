'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import KlantBeoordelingen from '@/components/KlantBeoordelingen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWrench, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

const services = [
  {
    title: 'WC Ontstoppen',
    description: 'Heeft u last van een verstopt toilet? Ons gespecialiseerde team voor wc-ontstopping staat 24/7 voor u klaar. Wij maken gebruik van geavanceerde reinigingstechnieken en moderne apparatuur om hardnekkige verstoppingen snel en effectief op te lossen. Zo garanderen wij een duurzame en hygiënische oplossing, zodat uw sanitair weer optimaal functioneert.',
    image: '/ontstoppen-wc-loodgieter.webp',
    link: '/diensten/wc-ontstoppen',
  },
  {
    title: 'Afvoer Ontstoppen',
    description: 'Een verstopte afvoer kan voor veel overlast zorgen. Onze ervaren loodgieters zetten innovatieve reinigingsmethoden in om uw afvoer grondig te ontstoppen en te reinigen. Met een focus op preventie en duurzaamheid zorgen wij ervoor dat uw waterafvoer weer efficiënt werkt en toekomstige verstoppingen worden voorkomen.',
    image: '/wc-ontstoppen.webp',
    link: '/diensten/afvoer-ontstoppen',
  },
  {
    title: 'Lekkages Oplossen',
    description: 'Kleine of grote lekkages kunnen ernstige schade veroorzaken. Wij detecteren en herstellen lekkages snel met behulp van moderne detectietechnieken en apparatuur. Onze duurzame reparaties voorkomen verdere waterschade en structurele problemen, zodat uw woning of bedrijfspand veilig en droog blijft.',
    image: '/Lekkage-installatie.webp',
    link: '/diensten/lekkages-oplossen',
  },
  {
    title: 'Installaties',
    description: 'Of het nu gaat om nieuwbouw of renovatie, wij verzorgen de professionele installatie van sanitair en complete loodgieterssystemen op maat. Ons team ontwerpt en installeert oplossingen die voldoen aan de hoogste kwaliteits- en veiligheidsnormen, met aandacht voor energiezuinigheid en duurzaamheid.',
    image: '/loodgieter-staand.webp',
    link: '/diensten/installaties',
  },
  {
    title: 'Reparaties',
    description: 'Bij storingen of slijtage zorgen onze experts voor snelle en vakkundige reparaties aan leidingen, verwarmingssystemen en andere installaties. Met hoogwaardige materialen en moderne technieken herstellen wij uw systemen efficiënt, zodat u snel weer kunt rekenen op een betrouwbaar en optimaal werkend sanitairsysteem.',
    image: '/reparatie-loodgieter.webp',
    link: '/diensten/reparaties',
  },
];

const whyChooseUsData = [
  { icon: faClock, title: '24/7 Beschikbaar', text: 'Altijd bereikbaar voor spoedklussen, dag en nacht.' },
  { icon: faWrench, title: 'Professioneel', text: 'Vakkundige monteurs met jarenlange ervaring en expertise.' },
  { icon: faShieldAlt, title: 'Betrouwbaar', text: 'Transparante prijzen en topkwaliteit in alle projecten.' },
  { icon: faSmile, title: 'Tevreden Klanten', text: 'Onze klanttevredenheid en positieve reviews spreken voor zich.' },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/loodgieter-werken-aan-afvoer.webp"
              alt="Professionele loodgietersdiensten in Utrecht en omgeving"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 break-words">Onze Diensten</h1>
          <p className="text-base sm:text-lg px-2">
            Uw vertrouwde partner voor professionele loodgietersdiensten in Utrecht, Amersfoort, Nieuwegein en omgeving.
          </p>
          <p className="text-base sm:text-lg px-2">
            Of het nu gaat om spoedklussen, preventief onderhoud of op maat gemaakte installaties, wij bieden snelle, duurzame en efficiënte oplossingen voor al uw loodgietersproblemen.
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
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> leveren wij een uitgebreid assortiment aan hoogwaardige
            loodgietersdiensten. Onze expertise strekt zich uit over spoedinterventies, preventief onderhoud en op maat gemaakte installaties. Door het combineren van moderne technologie met traditioneel vakmanschap, bieden wij duurzame en betrouwbare oplossingen voor zowel particuliere als zakelijke klanten.
          </p>

          <div className="flex flex-col items-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {services.slice(0, 2).map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={`${service.title} - AD Loodgietersbedrijf dienst`}
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
                      Lees meer over {service.title}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative h-56">
                    <Image
                      src={service.image}
                      alt={`${service.title} - AD Loodgietersbedrijf dienst`}
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
                      Lees meer over {service.title}
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
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Waarom kiezen voor AD-Loodgietersbedrijf?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bent u verzekerd van hoogwaardig vakmanschap en
            uitstekende service. Wij hanteren transparante prijzen, duidelijke communicatie en leveren oplossingen die perfect zijn afgestemd op uw
            specifieke behoeften. Onze moderne technieken en hoogwaardige materialen garanderen dat elk project duurzaam, energiezuinig en veilig wordt
            uitgevoerd.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-4xl mb-4" />
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
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> staat klanttevredenheid voorop. Onze snelle service, duurzame oplossingen en deskundige aanpak zorgen ervoor dat u altijd op ons kunt rekenen in Utrecht, Amersfoort en omgeving.
          </p>
          <KlantBeoordelingen />
        </div>
      </section>

      {/* Contact Form Sectie */}
      <section className="py-16 bg-gray-900 text-white max-sm:p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Neem contact op met ons</h2>
            <p className="text-lg mb-6">
              Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in en wij nemen zo snel mogelijk contact met u op. Ons deskundige en klantgerichte team staat klaar om u te voorzien van een op maat gemaakte oplossing voor al uw loodgietersproblemen.
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ContactFormWrapper />
          </motion.div>
        </div>
      </section>
    </>
  );
}
