'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTools, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import FAQSection from '@/components/FAQ/FAQSection';
import { sendGTMEvent } from '@next/third-parties/google';

export default function WcOntstoppenPage() {
  const faqItems = [
    {
      question: "Hoe snel kunt u langskomen bij een verstopt toilet?",
      answer: "Wij hanteren een 24/7 spoedservice en kunnen doorgaans binnen 30 minuten ter plaatse zijn. Zo wordt het probleem snel en vakkundig verholpen."
    },
    {
      question: "Welke technieken gebruiken jullie bij WC ontstoppen?",
      answer: "Wij zetten onder andere hogedrukreiniging, mechanische reiniging en camera-inspecties in. Hierdoor kunnen we de verstopping gericht opsporen en efficiënt oplossen."
    },
    {
      question: "Hoe voorkom ik dat mijn toilet weer verstopt raakt?",
      answer: "Gooi geen vochtige doekjes, maandverband of andere niet-afbreekbare materialen in het toilet. Daarnaast helpt regelmatig onderhoud om toekomstige verstoppingen te voorkomen."
    },
    {
      question: "Werken jullie alleen in Utrecht?",
      answer: "Nee, wij zijn actief in de hele regio: Utrecht, Amersfoort, Nieuwegein, Maarssen en omliggende plaatsen. Ook buiten deze regio’s kunnen wij in overleg helpen."
    },
    {
      question: "Bieden jullie garantie op de werkzaamheden?",
      answer: "Ja, op onze reparaties en ontstoppingswerkzaamheden bieden wij altijd garantie. U kunt dus rekenen op een duurzame oplossing."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/wc-ontstoppen.webp"
              alt="WC Ontstoppen - Professionele en snelle service voor uw toilet"
              fill
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
          <h1 className="text-5xl font-bold mb-4">WC Ontstoppen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Snel, deskundig en 24/7 beschikbaar – wij zorgen dat uw toilet weer probleemloos doorspoelt.
          </p>
        </motion.div>
      </section>

      {/* Introductie & Probleemstelling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Waarom een verstopt toilet snel aanpakken?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een verstopt toilet is niet alleen onhandig, maar kan ook leiden tot onaangename geuren, overstromingen en zelfs waterschade. Bovendien kan de verstopping zich uitbreiden naar andere leidingen, waardoor het probleem groter (en duurder) wordt. Onze missie bij AD-Loodgietersbedrijf is om deze ellende te voorkomen door snel en effectief in te grijpen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Door onze jarenlange ervaring in Utrecht, Amersfoort, Nieuwegein en Maarssen hebben wij alle soorten verstoppingen gezien en opgelost. Of het nu gaat om een eenvoudige blokkade of een hardnekkige verstopping dieper in het riool, wij hebben de expertise én de juiste apparatuur.
          </p>
        </div>
      </section>

      {/* Onze Werkwijze */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Onze werkwijze: van diagnose tot oplossing
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bij aankomst voert onze loodgieter eerst een grondige inspectie uit om de precieze locatie van de verstopping te achterhalen. Daarna bepalen we de meest geschikte methode om de blokkade te verwijderen, zoals mechanische reiniging of hogedrukreiniging. Na afloop controleren we uw toilet en leidingen om er zeker van te zijn dat alles weer perfect werkt.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Mocht uit onze inspectie blijken dat er sprake is van een groter probleem, dan overleggen we direct met u over de vervolgstappen. Transparantie en duidelijkheid staan bij ons voorop, zodat u nooit voor verrassingen komt te staan.
            </p>
            <Link
              href="/contact"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - WC Ontstoppen Intro',
                })
              }
            >
              Neem direct contact op
            </Link>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/afvoer-verstopping.webp"
              alt="Afvoer verstopping - een van de oorzaken van toiletproblemen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Technieken & Voordelen */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Geavanceerde technieken & waarom klanten ons kiezen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FontAwesomeIcon icon={faClock} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Spoedservice</h3>
              <p className="text-gray-700">
                Wij zijn dag en nacht beschikbaar om verstoppingen te verhelpen, zodat u nooit lang in de problemen zit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FontAwesomeIcon icon={faTools} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Moderne Apparatuur</h3>
              <p className="text-gray-700">
                Met hogedruk- en mechanische reinigingstechnieken lossen wij zelfs de hardnekkigste verstoppingen op.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Garantie & Nazorg</h3>
              <p className="text-gray-700">
                U krijgt altijd garantie op onze werkzaamheden, plus deskundig advies om herhaling te voorkomen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde Diensten (Interne Links) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Gerelateerde Diensten</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Naast het ontstoppen van uw toilet bieden wij ook andere loodgietersdiensten aan.
            Zo kunt u bij ons terecht voor:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <Link href="/diensten/afvoer-ontstoppen" className="text-blue-500 hover:underline font-bold">
                Afvoer Ontstoppen
              </Link> – voorkom terugkerende verstoppingen in uw gehele afvoersysteem.
            </li>
            <li>
              <Link href="/diensten/lekkages-oplossen" className="text-blue-500 hover:underline font-bold">
                Lekkages Oplossen
              </Link> – bescherm uw woning of bedrijfspand tegen waterschade.
            </li>
            <li>
              <Link href="/diensten/installaties" className="text-blue-500 hover:underline font-bold">
                Installaties
              </Link> – van nieuw sanitair tot complete renovaties, wij staan voor u klaar.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Wilt u een volledig overzicht van onze diensten? Bezoek dan onze
            {' '}<Link href="/diensten" className="text-blue-500 hover:underline font-bold">Dienstenpagina</Link>.
          </p>
        </div>
      </section>

      {/* Externe Link Sectie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meer weten over veilig watergebruik?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Een goed onderhouden riolerings- en waterleidingsysteem is essentieel voor een gezond leefklimaat.
            Meer informatie over waterbeheer en drinkwatervoorziening vindt u bij de
            {' '}<a
            href="https://www.vewin.nl/nieuws/impact-van-warmtenetten-en-energietransitie-op-drinkwater-in-het-leidingnet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-bold"
          >
            Vewin
          </a>,
            de vereniging van waterbedrijven in Nederland.
          </p>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQSection faqItems={faqItems} bannerImage="/loodgieter-toilet.webp"/>

      {/* Contact Call-to-Action */}
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
              Neem vandaag nog contact met ons op. Ons deskundige team staat 24/7 klaar om uw toilet snel en professioneel te ontstoppen.
            </p>
            <Link
              href="/contact"
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition"
              onClick={() =>
                sendGTMEvent({
                  event: 'buttonClicked',
                  category: 'Link',
                  label: 'Contact knop - WC Ontstoppen CTA',
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
