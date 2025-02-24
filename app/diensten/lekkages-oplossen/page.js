'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';
import FAQSections from '@/components/FAQ/FAQSection'; // Gebruik de component uit components/FAQ/FAQSections.js

export default function LekkagesOplossenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh' }}>
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
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              className="object-cover"
              priority
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
            Laat lekkages snel en professioneel detecteren en herstellen om verdere schade en onnodige kosten te voorkomen.
          </p>
        </motion.div>
      </section>

      {/* Introductie & Probleemstelling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Waarom uw lekkage direct laten oplossen?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een lekkage kan al snel uitgroeien tot een groot probleem: schimmelvorming, waterschade en zelfs structurele aantasting van uw pand. Bij
            <span className="font-bold text-blue-500"> AD-Loodgietersbedrijf</span> snappen we dat u dit zo snel mogelijk wilt verhelpen. Met onze
            <strong> 24/7 spoedservice</strong> en geavanceerde detectiemethoden staan wij paraat om elke lekkage snel en effectief aan te pakken.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Of het nu gaat om een lekkende kraan, een verborgen lek in de muur of een defecte waterleiding, wij bieden een
            <strong> duurzame oplossing</strong> die de kern van het probleem aanpakt en toekomstige complicaties voorkomt.
          </p>
        </div>
      </section>

      {/* Dienst Details / Werkwijze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Onze werkwijze: van detectie tot reparatie
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Wij maken gebruik van <strong>thermische beeldvorming</strong>, <strong>ultrasone detectie</strong> en <strong>druktesten</strong> om zelfs de kleinste lekkages te lokaliseren. Zodra de bron is vastgesteld, starten wij direct met een passende reparatiemethode, zoals het vervangen van leidingen of het afdichten van scheuren.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Na de reparatie voeren we een grondige controle uit zodat u zeker weet dat de lekkage volledig is verholpen. Bovendien geven wij preventief advies zodat toekomstige problemen worden voorkomen.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition font-bold"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Lekkages Oplossen Intro',
                })
              }
            >
              Neem direct contact op
            </Link>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Loodgieter-lekkage-vrouw.webp"
              alt="Lekkagedetectie en reparatie in uitvoering"
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              className="object-cover"
            />
          </div>
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
                text: 'Binnen 30 minuten op locatie, zelfs bij acute lekkages.',
              },
              {
                icon: faTools,
                title: 'Geavanceerde Apparatuur',
                text: 'Thermische camera’s en ultrasone detectie voor nauwkeurige lekkagedetectie.',
              },
              {
                icon: faShieldAlt,
                title: 'Duurzame Reparaties',
                text: 'Oplossingen die lang meegaan en de kans op nieuwe lekkages minimaliseren.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <FontAwesomeIcon icon={item.icon} className="text-blue-500 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gerelateerde Diensten (Interne Links) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Gerelateerde Diensten</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> kunt u niet alleen terecht voor lekkages, maar ook voor:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <Link href="/diensten/reparaties" className="text-blue-500 hover:underline font-bold">
                Reparaties
              </Link> – vakkundige en duurzame oplossingen voor kapotte leidingen en verwarmingssystemen.
            </li>
            <li>
              <Link href="/diensten/afvoer-ontstoppen" className="text-blue-500 hover:underline font-bold">
                Afvoer Ontstoppen
              </Link> – voorkom hardnekkige verstoppingen en mogelijke lekkages in uw afvoersysteem.
            </li>
            <li>
              <Link href="/diensten/installaties" className="text-blue-500 hover:underline font-bold">
                Installaties
              </Link> – van nieuwe leidingen tot complete renovaties, wij staan voor u klaar.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Bekijk al onze opties op de{' '}
            <Link href="/diensten" className="text-blue-500 hover:underline font-bold">
              Dienstenpagina
            </Link>.
          </p>
        </div>
      </section>

      {/* Externe Link (Relevante bron) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meer weten over waterschadepreventie?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Een goed onderhoud en tijdige detectie van lekkages kan veel schade besparen. Voor extra informatie over waterbeheer en preventie van waterschade, bezoek de{' '}
            <a
              href="https://www.rijksoverheid.nl/onderwerpen/water"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-bold"
            >
              Rijksoverheid over water
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQSections
        faqItems={[
          {
            question: "Hoe detecteren jullie een lekkage?",
            answer: "Wij maken gebruik van thermische beeldvorming, ultrasone detectie en druktesten om zelfs de kleinste lekkages snel te lokaliseren.",
          },
          {
            question: "Wat zijn de kosten voor een reparatie?",
            answer: "Onze tarieven zijn transparant en variëren afhankelijk van de omvang van de klus. U ontvangt altijd een duidelijke offerte vooraf.",
          },
          {
            question: "Hoe snel kunnen jullie ter plaatse zijn?",
            answer: "Dankzij onze 24/7 spoedservice zijn wij doorgaans binnen 30 minuten op locatie, zelfs in acute situaties.",
          },
          {
            question: "Bieden jullie garantie op de werkzaamheden?",
            answer: "Ja, op al onze reparaties geven wij garantie zodat u verzekerd bent van een duurzame oplossing.",
          },
          {
            question: "Kan ik een onderhoudscontract afsluiten?",
            answer: "Wij bieden tevens onderhoudscontracten voor periodieke controles en preventief onderhoud.",
          },
        ]} bannerImage="/loodgieter-staand.webp"
      />

      {/* Contact CTA */}
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
              Neem vandaag nog contact met ons op en laat onze experts uw lekkage snel en professioneel oplossen. Wij bieden een <strong>24/7 spoedservice</strong> met duurzame en kosteneffectieve oplossingen.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition font-bold"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Lekkages Oplossen CTA',
                })
              }
            >
              Neem direct contact op
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
