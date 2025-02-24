'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTools, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';
import FAQSections from '@/components/FAQ/FAQSection'; // Zorg dat dit pad klopt met jouw projectstructuur

export default function AfvoerOntstoppenPage() {
  const faqItems = [
    {
      question: "Welke methoden gebruikt u voor het ontstoppen van afvoeren?",
      answer: "Wij maken gebruik van hogedrukreiniging, roterende afvoerspiralen en waterstraaltechnieken om zelfs de hardnekkigste verstoppingen grondig te verwijderen."
    },
    {
      question: "Hoe snel kunnen jullie ter plaatse zijn?",
      answer: "Met onze 24/7 spoedservice zijn wij doorgaans binnen 30 minuten op locatie, zelfs bij acute situaties."
    },
    {
      question: "Wat kost het om een afvoer te ontstoppen?",
      answer: "De kosten variëren afhankelijk van de complexiteit van de verstopping, maar wij hanteren altijd transparante tarieven. U ontvangt vooraf een duidelijke offerte."
    },
    {
      question: "Bieden jullie ook preventief onderhoud?",
      answer: "Ja, wij adviseren u graag over preventief onderhoud om toekomstige verstoppingen te voorkomen."
    },
    {
      question: "Bedient u ook commerciële panden?",
      answer: "Absoluut, wij bieden onze diensten aan voor zowel particuliere als commerciële panden in de regio."
    }
  ];

  const bannerImage = "/faq-banner.webp";

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
          <h1 className="text-5xl font-bold mb-4">Afvoer Ontstoppen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Laat uw verstopte afvoer snel, grondig en duurzaam reinigen door onze gespecialiseerde experts.
          </p>
        </motion.div>
      </section>

      {/* Introductie & Probleemstelling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Waarom uw afvoer direct laten ontstoppen?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een verstopte afvoer kan leiden tot overstromingen, onaangename geuren en zelfs structurele schade aan uw pand. Bij
            <span className="font-bold text-blue-500"> AD-Loodgietersbedrijf</span> begrijpen we dat u snel een oplossing nodig heeft. Met onze
            <strong> 24/7 spoedservice</strong> en moderne reinigingstechnieken garanderen wij een efficiënte en duurzame oplossing.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Of het nu gaat om een verstopte keukenafvoer of een hardnekkige verstopping in de badkamer, wij zorgen ervoor dat u snel weer normaal kunt functioneren.
          </p>
        </div>
      </section>

      {/* Dienst Details / Werkwijze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Onze werkwijze: van diagnose tot oplossing
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Wij maken gebruik van geavanceerde technieken zoals hogedrukreiniging en roterende afvoerspiralen om verstoppingen snel en grondig te verwijderen. Zodra de oorzaak is vastgesteld, kiezen wij de meest efficiënte methode voor een langdurige oplossing.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Na de interventie krijgt u van ons preventief advies zodat toekomstige verstoppingen voorkomen kunnen worden. Wij zorgen voor transparantie in elke stap en bieden u een duidelijke offerte vooraf.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition font-bold"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Afvoer Ontstoppen',
                })
              }
            >
              Neem direct contact op
            </Link>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/ontstoppingsveer.webp"
              alt="Verstopte afvoer – professionele reinigingstechniek in actie"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
              className="object-cover"
              priority
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
                title: 'Snel Ter Plaatse',
                text: 'Onze experts zijn binnen korte tijd op locatie om de verstopping grondig te verhelpen.',
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
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Component (DaisyUI versie) */}
      <FAQSections faqItems={faqItems} bannerImage="/loodgieter-lekkage.webp" />

      {/* Externe Link */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meer weten over afvoerproblemen?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Lees meer over veelvoorkomende afvoerproblemen en oplossingen op de website van{' '}
            <a
              href="https://www.rijksoverheid.nl/onderwerpen/water"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-bold"
            >
              de Rijksoverheid over water
            </a>.
          </p>
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
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition font-bold"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - Afvoer Ontstoppen',
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
