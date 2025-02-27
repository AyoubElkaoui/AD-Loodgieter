"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

export default function ErkendeLoodgieterAmsterdamPage() {


  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Wat betekent het dat u een erkende loodgieter bent?',
      answer:
        'Een erkende loodgieter voldoet aan strenge kwaliteits- en veiligheidsnormen en is gecertificeerd door relevante brancheorganisaties. Dit garandeert dat u kunt vertrouwen op vakmanschap en professionele uitvoering van alle werkzaamheden.',
    },
    {
      question: 'Welke diensten biedt u als erkende loodgieter in Amsterdam?',
      answer:
        'Wij verzorgen onder andere lekkage reparaties, de installatie van sanitair, reparatie van defecte kranen, en preventief onderhoud. Al deze diensten worden uitgevoerd volgens de hoogste kwaliteitsnormen en met de nieuwste technieken.',
    },
    {
      question: 'Wat zijn de voordelen van werken met een erkende loodgieter?',
      answer:
        'U profiteert van hoogwaardige service, een professionele aanpak en de zekerheid dat alle werkzaamheden voldoen aan de geldende normen en regelgeving. Dit zorgt voor duurzame oplossingen en minder risico op toekomstige problemen.',
    },
    {
      question: 'Hoe snel kan uw team reageren in een noodgeval?',
      answer:
        'Bij spoedsituaties streven wij ernaar binnen 30 tot 60 minuten bij u te zijn, zodat verdere schade wordt voorkomen en u snel weer gerust kunt zijn.',
    },
  ] ;

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
            src="/erkende-loodgieter-amsterdam.webp"
            alt="Erkende Loodgieter Amsterdam - AD-Loodgietersbedrijf"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Erkende Loodgieter Amsterdam
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Wij zijn een gecertificeerd en erkend loodgietersbedrijf in Amsterdam dat garant staat voor kwaliteit en betrouwbaarheid. Snel hulp nodig? Wij staan 24/7 voor u klaar.
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
          <h2 className="text-3xl font-bold mb-6">Gecertificeerde Loodgietersdiensten in Amsterdam</h2>
          <p className="mb-4">
            Als erkende loodgieter in Amsterdam leveren wij een compleet pakket aan loodgietersdiensten. Of u nu te maken heeft met een kleine lekkage in uw keuken, een verstopte afvoer in de badkamer of een grote renovatie van uw sanitair, onze gecertificeerde vakmensen helpen u snel en efficiënt. Wij begrijpen hoe vervelend een plotseling probleem kan zijn en staan daarom dag en nacht voor u klaar.
          </p>
          <p className="mb-4">
            Amsterdam kent veel oudere gebouwen en woningen, waardoor leidingen en afvoeren soms verouderd kunnen zijn. Een erkende loodgieter zoals AD-Loodgietersbedrijf heeft de expertise om deze uitdagingen te tackelen, ongeacht de leeftijd of complexiteit van uw installatie. Wij gebruiken moderne technieken en hoogwaardige materialen om een duurzame oplossing te bieden die aansluit op uw wensen.
          </p>
          <p className="mb-4">
            Bent u benieuwd naar onze andere locaties en diensten? Neem dan eens een kijkje op onze{' '}
            <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
              dienstenpagina
            </Link>{' '}
            of lees meer over ons team op de{' '}
            <Link href="/over-ons" className="text-blue-500 font-semibold hover:underline">
              Over Ons
            </Link>{' '}
            pagina. Zo krijgt u een volledig beeld van onze aanpak, certificeringen en specialisaties.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Waarom Kiezen voor een Erkende Loodgieter?</h3>
          <ul className="list-disc list-inside mb-6 space-y-3">
            <li>
              <strong className="text-blue-500">Gecertificeerde Expertise:</strong> Onze vakmensen volgen regelmatig bijscholing en werken volgens strikte kwaliteitsnormen. Dit betekent dat u kunt rekenen op kennis van de nieuwste technieken en materialen.
            </li>
            <li>
              <strong className="text-blue-500">Transparante Werkwijze:</strong> Wij geloven in eerlijkheid en openheid over prijzen en werkwijze. U ontvangt altijd een duidelijke offerte, zodat u precies weet waar u aan toe bent.
            </li>
            <li>
              <strong className="text-blue-500">Duurzame Oplossingen:</strong> Of het nu gaat om reparaties of nieuwe installaties, wij zetten in op energiezuinige en milieuvriendelijke materialen die lang meegaan.
            </li>
            <li>
              <strong className="text-blue-500">24/7 Service:</strong> Een noodsituatie komt vaak onverwacht. Met onze spoedservice bent u verzekerd van snelle hulp, ook in het weekend en tijdens feestdagen.
            </li>
          </ul>
          <p className="mb-4">
            Dankzij deze aanpak kunt u met een gerust hart de zorg voor uw leidingen, sanitair en installaties aan ons overlaten. Wij pakken elk probleem grondig aan en geven u graag advies over hoe u toekomstige ongemakken kunt voorkomen.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Onze Werkwijze</h3>
          <p className="mb-4">
            Voorafgaand aan elke klus voeren wij eerst een grondige inspectie uit. Op basis daarvan stellen we een heldere diagnose en bespreken we de mogelijke oplossingen met u. Vervolgens ontvangt u een vrijblijvende offerte, zodat u niet voor verrassingen komt te staan.
          </p>
          <p>
            Zodra u akkoord gaat, gaan wij snel aan de slag. Bij spoedklussen, zoals grote lekkages of verstoppingen, streven we ernaar binnen 30 tot 60 minuten ter plaatse te zijn. Kwaliteit en klanttevredenheid staan voorop: we laten de werkplek netjes achter en geven u tips om toekomstige problemen te voorkomen. Heeft u na afloop nog vragen? Dan staan we altijd voor u klaar.
          </p>
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
            <h2 className="text-3xl font-bold mb-4">Neem Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Bent u op zoek naar een erkende en gecertificeerde loodgieter in Amsterdam? Bel ons direct voor een snelle en professionele service.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="font-bold">Gecertificeerde vakmensen</li>
              <li className="font-bold">24/7 bereikbaar voor spoedgevallen</li>
              <li className="font-bold">Persoonlijk en betrouwbaar advies</li>
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
            <ContactFormWrapper />
          </motion.div>
        </div>
      </section>
    </>
  );
}
