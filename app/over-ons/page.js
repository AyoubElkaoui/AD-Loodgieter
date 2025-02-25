'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm/ContactForm';
import FAQSection from '@/components/FAQ/FAQSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faClock,
  faLeaf,
  faPhone,
  faCogs,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
        <Image
          src="/plumbing-tools.webp"
          alt="Professionele loodgietersdiensten en spoedreparaties"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 break-words">
            Over AD-Loodgietersbedrijf
          </h1>
          <p className="text-base sm:text-lg px-2">
            Uw specialist in loodgietersdiensten voor spoedreparaties, onderhoud en installatie in Maarssen, Utrecht en heel Nederland.
          </p>
        </motion.div>
      </section>

      {/* Wie zijn wij */}
      <section className="py-16 bg-gray-100 max-sm:p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Wie zijn wij?</h2>
            <p className="text-gray-600 mb-4">
              Met meer dan <strong>10 jaar ervaring</strong> in de loodgietersbranche staat <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bekend als dé expert op het gebied van spoedreparaties, onderhoud en installatie.
            </p>
            <p className="text-gray-600 mb-6">
              Onze gecertificeerde loodgieters combineren traditioneel vakmanschap met moderne technologieën om duurzame en efficiënte oplossingen te bieden voor al uw loodgietersproblemen.
            </p>
            <p className="text-gray-600">
              Ons werkgebied omvat <strong>Maarssen</strong>, <strong>Utrecht</strong> en omliggende regio’s. Ontdek ook onze specifieke diensten zoals{' '}
              <Link href="/diensten/wc-ontstoppen" className="text-blue-500 hover:underline">
                WC ontstoppen
              </Link>{' '}
              en{' '}
              <Link href="/diensten/lekkages-oplossen" className="text-blue-500 hover:underline">
                lekkages oplossen
              </Link>
              .
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/man-installs-heating-system-house-checks-pipes-with-wrench.webp"
              alt="Ons professionele loodgietersteam in actie"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Nieuwe SEO-gericht Gedeelte */}
      <section className="py-16 bg-white max-sm:p-8">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Onze Expertise in Loodgietersdiensten
          </motion.h2>
          <p className="text-gray-600 mb-6">
            Bij <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> draait alles om het leveren van topkwaliteit loodgietersdiensten. Wij zijn gespecialiseerd in het oplossen van verstoppingen, het repareren van lekkages en het uitvoeren van installaties en onderhoud. Onze snelle responstijd en efficiënte aanpak maken ons de ideale keuze voor zowel particuliere als zakelijke klanten.
          </p>
          <p className="text-gray-600 mb-6">
            Onze klanten waarderen onze deskundigheid en klantgerichte service. Wilt u weten hoe wij u kunnen helpen met spoedreparaties of preventief onderhoud? Bekijk dan onze{' '}
            <Link href="/diensten" className="text-blue-500 hover:underline">
              dienstenpagina
            </Link>{' '}
            voor een compleet overzicht van onze oplossingen. Voor direct contact en een vrijblijvende offerte kunt u altijd onze{' '}
            <Link href="/contact" className="text-blue-500 hover:underline">
              contactpagina
            </Link>{' '}
            bezoeken.
          </p>
          <p className="text-gray-600">
            Wij blijven ons continu ontwikkelen door te investeren in de nieuwste technologieën en trainingen. Zo garanderen we dat onze service altijd up-to-date is en voldoet aan de hoogste veiligheids- en milieunormen.
          </p>
        </div>
      </section>

      {/* Kernwaarden en Voordelen */}
      <section className="py-16 bg-white max-sm:p-8">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Waarom kiezen voor AD-Loodgietersbedrijf?
          </motion.h2>
          <p className="text-lg text-gray-600 mb-8">
            Wij bieden meer dan alleen standaard loodgietersdiensten. Onze kernwaarden – betrouwbaarheid, snelheid en maatwerk – zorgen ervoor dat elke klus met de hoogste kwaliteit wordt uitgevoerd.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faUsers,
                title: 'Ervaren Team',
                description: 'Ons team bestaat uit gecertificeerde en ervaren loodgieters die klaarstaan voor elke uitdaging.',
              },
              {
                icon: faClock,
                title: 'Snelle Service',
                description: 'Wij garanderen responstijden binnen 30 minuten in Maarssen, Utrecht en omliggende regio’s.',
              },
              {
                icon: faLeaf,
                title: 'Duurzame Oplossingen',
                description: 'Wij leveren milieuvriendelijke en toekomstbestendige oplossingen voor al uw loodgietersproblemen.',
              },
              {
                icon: faPhone,
                title: '24/7 Bereikbaarheid',
                description: 'Onze service is dag en nacht beschikbaar voor noodgevallen en dringende reparaties.',
              },
              {
                icon: faCogs,
                title: 'Maatwerk Oplossingen',
                description: 'Elke situatie is uniek. Wij leveren oplossingen op maat die perfect aansluiten op uw wensen.',
              },
              {
                icon: faSmile,
                title: 'Tevreden Klanten',
                description: 'Onze klanten waarderen ons voor onze professionaliteit, betrouwbaarheid en klantgerichte aanpak.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 max-sm:p-8">
        <div className="container mx-auto">
          <FAQSection bannerImage="/loodgieter-toilet.webp"/>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900 text-white max-sm:p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Neem contact met ons op</h2>
            <p className="text-lg mb-6">
              Heeft u vragen over onze loodgietersdiensten of wilt u een afspraak maken? Vul het contactformulier in en wij nemen zo snel mogelijk contact met u op.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 text-lg mr-3">&#9679;</span> 24/7 bereikbaar voor spoedgevallen.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-lg mr-3">&#9679;</span> Snel en professioneel in elke situatie.
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-lg mr-3">&#9679;</span> Klantgericht met maatwerkoplossingen.
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
