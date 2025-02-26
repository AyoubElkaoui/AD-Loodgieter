"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function ADInstallatiesLandingPage() {

  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Wat houdt AD Installaties precies in?',
      answer:
        'AD Installaties is onze gespecialiseerde dienst voor installaties. Wij verzorgen onder meer waterinstallaties, verwarmings- en ventilatiesystemen en implementeren duurzame energieoplossingen.',
    },
    {
      question: 'Biedt u ook onderhoudsdiensten aan?',
      answer:
        'Ja, naast de installatie verzorgen wij periodiek onderhoud en inspecties om de optimale werking van uw installaties te garanderen.',
    },
    {
      question: 'Hoe vraag ik een vrijblijvende offerte aan?',
      answer:
        'U kunt eenvoudig telefonisch contact opnemen of het contactformulier invullen. Wij nemen dan snel contact met u op voor een op maat gemaakte offerte.',
    },
    {
      question: 'Wat maakt AD Installaties uniek?',
      answer:
        'Onze combinatie van technische expertise, innovatieve oplossingen en klantgerichte service zorgt voor een installatie die volledig aansluit op uw wensen.',
    },
  ];

  return (
    <>
      {/* ===================
          HERO SECTION
      ==================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/ad-installaties-hero.webp"
            alt="AD Installaties - Complete Installatieservice"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AD Installaties</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Ontdek onze complete installatieservice – van water- en verwarmingssystemen tot ventilatie en duurzame energieoplossingen. Ook al bent u bij ons voor loodgieterswerk, wij leveren tevens topklasse installaties.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Direct Contact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===================
          MAIN CONTENT
      ==================== */}
      <section className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 leading-relaxed text-base md:text-lg">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Complete Installatiediensten op Maat
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Hoewel onze naam AD-Loodgietersbedrijf u wellicht doet denken aan loodgieterswerk, hebben wij ons dienstenaanbod uitgebreid met AD Installaties. Dit betekent dat wij naast reparaties en lekkageopsporing ook een complete installatieservice aanbieden voor water-, verwarmings- en ventilatiesystemen, alsook voor duurzame energieprojecten.
            </p>
            <p>
              Onze aanpak is volledig maatwerk: wij luisteren naar uw wensen en zorgen ervoor dat elke installatie perfect wordt geïntegreerd in uw woning of bedrijfspand. Hierdoor bent u verzekerd van een efficiënte, veilige en toekomstbestendige oplossing.
            </p>
            <h3 className="text-2xl font-bold mt-6">Onze Installatiediensten</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Waterinstallaties</strong> – voor een optimaal functionerend leidingsysteem.
              </li>
              <li>
                <strong className="text-blue-500">Verwarmingssystemen</strong> – voor een efficiënte en comfortabele warmteverdeling.
              </li>
              <li>
                <strong className="text-blue-500">Ventilatiesystemen</strong> – voor een gezonde binnenlucht en energiebesparing.
              </li>
              <li>
                <strong className="text-blue-500">Duurzame Energie</strong> – implementatie van zonnepanelen, warmtepompen en meer.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-6">Waarom Kiezen voor AD Installaties?</h3>
            <p>
              Onze unieke combinatie van jarenlange ervaring in loodgieterswerk en innovatieve installatietechnieken maakt ons de ideale partner voor uw project. Wij bieden:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong className="text-blue-500">Maatwerkoplossingen</strong> – elk project is uniek en krijgt een persoonlijke aanpak.
              </li>
              <li>
                <strong className="text-blue-500">Transparante prijzen</strong> – duidelijke offertes en geen verborgen kosten.
              </li>
              <li>
                <strong className="text-blue-500">Snelle en efficiënte uitvoering</strong> – wij realiseren uw project binnen de afgesproken termijn.
              </li>
              <li>
                <strong className="text-blue-500">Uitstekende nazorg</strong> – ook na de installatie staan wij voor u klaar.
              </li>
            </ul>
            <p>
              Wilt u weten hoe wij uw installatiewensen kunnen realiseren? Neem dan vrijblijvend contact met ons op voor meer informatie en een offerte op maat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================
          FAQ SECTION
      ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-toilet.webp"/>
        </div>
      </section>

      {/* =====================
          CTA / CONTACT SECTION
      ====================== */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Vraag Nu Uw Offerte Aan</h2>
            <p className="text-lg mb-6">
              Heeft u vragen over onze installatiediensten of wilt u direct een afspraak maken? Ons deskundige team staat klaar om u een passende en transparante offerte te leveren.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• Persoonlijke service en advies</li>
              <li className="font-bold">• Complete installatieservice op maat</li>
              <li className="font-bold">• Transparante en scherpe prijzen</li>
            </ul>
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block"
            >
              Bel Nu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-6 rounded-lg shadow"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
