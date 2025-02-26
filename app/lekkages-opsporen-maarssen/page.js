"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import { FaPhoneAlt } from "react-icons/fa";
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

export default function LekkageOpsporenMaarssenPage() {

  // FAQ-items
  const faqItems = [
    {
      question: 'Hoe herken ik een verborgen lekkage?',
      answer:
        'Let op vochtplekken, schimmel, of plotselinge stank. Ook een stijgende waterrekening kan wijzen op een lek.',
    },
    {
      question: 'Repareren jullie ook ’s nachts?',
      answer:
        'Ja, wij zijn 24/7 bereikbaar. In geval van nood staan onze monteurs altijd paraat.',
    },
  ];

  return (
    <>

      {/* ================
          HERO
      =================*/}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/lekkage-oplossen.webp"
            alt="Lekkage opsporen in Maarssen - lekkage-oplossen"
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
            Lekkage Opsporen in Maarssen
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Laat <strong className="text-blue-500">waterschade</strong> niet uit de
            hand lopen. Wij detecteren en repareren lekkages dag én nacht.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Bel Nu: 24/7 Service
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================
          MAIN CONTENT
      =================*/}
      <section className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 leading-relaxed text-base md:text-lg">
          {/* H2-1 */}
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Waarom lekdetectie zo belangrijk is
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Een <strong className="text-blue-500">lekkage</strong> kan voor
              vervelende gevolgen zorgen, zoals schimmel, verrotte vloeren en
              hoge kosten door waterverlies. In <strong className="text-blue-500">
              Maarssen</strong> komen we vaak onopgemerkte lekken tegen die
              al maanden aanwezig zijn. Hoe langer u wacht, hoe groter de
              schade kan worden.
            </p>
            {/* H3-1 */}
            <h3 className="text-2xl font-bold mt-6">
              Snel ingrijpen bespaart geld
            </h3>
            <p>
              Door vroegtijdig te zoeken naar <strong className="text-blue-500">
              vochtplekken</strong> of scheurtjes in leidingen, voorkomt u
              ernstige waterschade. Ons team gebruikt thermografie,
              akoestische detectie en endoscopie om lekken snel op te sporen,
              zonder grote breekwerkzaamheden. Zo hoeft u geen volledige muur
              open te breken om een klein scheurtje te vinden.
            </p>
            <p>
              Meer weten over al onze diensten, zoals loodgieterswerk en
              rioolonderhoud? Bekijk gerust onze{' '}
              <Link
                href="/diensten"
                className="font-bold underline hover:text-gray-700 text-green-500"
              >
                Diensten-pagina
              </Link>
              .
            </p>

            {/* H3-2 */}
            <h3 className="text-2xl font-bold mt-6">
              Hoe ontstaan lekkages?
            </h3>
            <p>
              Lekkages kunnen ontstaan door <strong className="text-blue-500">
              verouderde leidingen</strong>, bevriezing in de winter of slechte
              kitnaden in de badkamer. Soms is het een dakgoot die niet goed
              aansluit, soms een klein defect achter de muur. Wat de oorzaak
              ook is, onze experts hebben de juiste apparatuur en kennis om het
              snel op te lossen.
            </p>
            <p>
              Benieuwd naar wat u moet doen bij lekkage?
              Neem eens een kijkje bij de{' '}
              <a
                href="https://www.unive.nl/woonverzekering/opstalverzekering/lekkage/wat-te-doen-lekkage"
                className="font-bold underline hover:text-gray-700 text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unive
              </a>
              , waar u algemene informatie vindt over Leakage&#39;s.
            </p>

            <p>
              Zodra we de bron van het lek hebben gevonden, gaan we direct
              over tot reparatie. Of het nu een kapotte koppeling is,
              een gescheurde leiding of een lekkage in de dakrand,
              we zorgen voor een <strong className="text-blue-500">duidelijke oplossing</strong>.
              In veel gevallen kunnen we het probleem verhelpen zonder
              dat u grote renovatiewerkzaamheden hoeft uit te voeren.
            </p>
          </motion.div>

          {/* H2-2 */}
          <motion.h2
            className="text-3xl font-bold mt-10 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Waterschade en verzekering
          </motion.h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Veel opstalverzekeringen dekken <strong className="text-blue-500">
              lekkageschade</strong>, afhankelijk van de oorzaak en polisvoorwaarden.
              Komt de schade door achterstallig onderhoud? Dan is de dekking
              mogelijk beperkt. U kunt bij ons altijd een
              <strong className="text-blue-500"> professioneel rapport </strong>
              krijgen na de reparatie, zodat u het gemakkelijk kunt indienen bij
              uw verzekeraar.
            </p>
            <p>
              Heeft u direct een vraag of wilt u een offerte ontvangen?
              Ga dan naar onze{' '}
              <Link
                href="/contact"
                className="font-bold underline hover:text-gray-700 text-green-500"
              >
                Contact-pagina
              </Link>
              . We reageren doorgaans binnen één werkdag. <br/> Gaat het om
              <strong className="text-blue-500"> spoed</strong>?{" "}
              Wij kunnen u direct helpen 24/7.
              <Link
                href="tel:+31640961848"
                className="inline-flex items-center bg-green-500 text-white font-bold py-3 px-5 rounded-full shadow-lg hover:bg-green-600 transition h-10 my-5 mx-5"
              >
                <FaPhoneAlt className="w-5 h-5 mr-2" />
                Bel ons
              </Link>{" "}


            </p>
            <p>
              Ook handig om te weten is dat <strong className="text-blue-500">
              schimmelgroei</strong> en rottend hout niet alleen slecht zijn
              voor uw woning, maar ook voor uw gezondheid. Een vochtige
              leefomgeving kan leiden tot allergische reacties of luchtwegklachten.
              Reden te meer om een lekkage geen kans te geven om te verergeren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================
          FAQ
      ======================*/}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-toilet.webp"/>
        </div>
      </section>

      {/* =====================
          CTA / CONTACT
      ======================*/}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Neem vandaag nog contact op
            </h2>
            <p className="text-lg mb-6">
              Lekkage in <strong className="text-blue-500">Maarssen</strong> of
              omgeving? Ons team staat 24/7 voor u klaar. Laat
              <strong className="text-blue-500"> waterschade</strong> niet escaleren.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• Deskundig advies</li>
              <li className="font-bold">• Heldere tarieven</li>
              <li className="font-bold">• Moderne apparatuur</li>
            </ul>
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block"
            >
              Bel Nu
            </Link>
          </motion.div>

          {/* ContactForm zonder extra achtergrond */}
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
