"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQ/FAQSection';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

export default function LoodgieterNieuwegeinPage() {

  // ================
  // 2. FAQ-items
  // ================
  const faqItems = [
    {
      question: 'Is uw service 24/7 beschikbaar in Nieuwegein?',
      answer:
        'Ja, onze loodgieters in Nieuwegein zijn dag en nacht bereikbaar om spoedgevallen snel op te lossen.',
    },
    {
      question: 'Kan ik rekenen op een snelle interventie bij lekkage?',
      answer:
        'Absoluut, in urgente situaties zijn wij doorgaans binnen 30 tot 60 minuten ter plaatse.',
    },
    {
      question: 'Biedt u ook preventief onderhoud aan?',
      answer:
        'Ja, wij adviseren en onderhouden uw sanitair om toekomstige problemen te voorkomen.',
    },
    {
      question: 'Hoe kan ik een vrijblijvende offerte aanvragen?',
      answer:
        'U kunt ons eenvoudig bellen of het contactformulier invullen voor een vrijblijvende offerte op maat.',
    },
  ];

  return (
    <>
      {/* =================== HEADER / HERO SECTION =================== */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/loodgieter-nieuwegein.webp"
            alt="Loodgietersbedrijf Nieuwegein - AD-Loodgietersbedrijf"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Loodgietersbedrijf in Nieuwegein
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Heeft u een lekkage, verstopping of ander loodgietersprobleem? Wij staan 24/7 paraat om u snel en vakkundig te helpen.
          </p>
          <div className="mt-6">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow hover:bg-gray-800 transition inline-block"
            >
              Direct Contact
            </Link>
          </div>
        </div>
      </header>

      {/* =================== MAIN CONTENT =================== */}
      <main className="py-16 bg-white text-black">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 leading-relaxed text-base md:text-lg">
          {/* Sectie 1: Introductie */}
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Uw Specialist voor Loodgietersdiensten in Nieuwegein
            </h2>
            <article className="space-y-6">
              <p>
                <strong className="text-blue-500">AD-Loodgietersbedrijf</strong> is een ervaren en betrouwbaar loodgietersbedrijf in <strong className="text-blue-500">Nieuwegein</strong>. Wij bieden een breed scala aan diensten, van snelle lekkagereparaties tot volledige installaties van sanitair. Dankzij onze 24/7 spoedservice kunt u ons dag en nacht bereiken, zodat u niet lang met een probleem blijft zitten.
              </p>
              <p>
                Onze aanpak is altijd gericht op kwaliteit en transparantie. Voordat we aan de slag gaan, ontvangt u een heldere offerte en een duidelijke uitleg van de werkzaamheden. Zo weet u precies wat u kunt verwachten en komt u niet voor verrassingen te staan. Meer weten over onze werkwijze? Neem een kijkje op onze{' '}
                <Link href="/over-ons" className="text-green-600 font-semibold underline hover:text-green-800">
                  Over Ons-pagina
                </Link>.
              </p>
              <h3 className="text-2xl font-bold">Waarom Kiezen voor AD-Loodgietersbedrijf?</h3>
              <p>
                Wij onderscheiden ons door onze snelle respons, deskundige kennis en klantgerichte aanpak. Of het nu gaat om een kleine reparatie of een groot renovatieproject, ons team van vakkundige loodgieters staat voor u klaar. Daarnaast delen wij regelmatig nuttige tips en adviezen op onze{' '}
                <Link href="/blogs" className="text-green-600 font-semibold underline hover:text-green-800">
                  blogpagina
                </Link>
                , zodat u op de hoogte blijft van de nieuwste ontwikkelingen en onderhoudstips.
              </p>
            </article>
          </section>

          {/* Sectie 2: Veelvoorkomende Loodgietersklussen */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">
              Veelvoorkomende Loodgietersklussen
            </h2>
            <article className="space-y-6">
              <p>
                In <strong className="text-blue-500">Nieuwegein</strong> zien we regelmatig dezelfde soorten problemen. Door tijdig in te grijpen, voorkomt u onnodige kosten en overlast:
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li><strong className="text-blue-500">Lekkages</strong> – van kleine druppels tot grote waterschade.</li>
                <li><strong className="text-blue-500">Verstoppingen</strong> – snel en effectief opgelost.</li>
                <li><strong className="text-blue-500">Installaties</strong> – nieuw sanitair, leidingen of cv-ketels.</li>
                <li><strong className="text-blue-500">Onderhoud</strong> – preventief onderhoud voor langdurige zekerheid.</li>
              </ul>
              <p>
                Wilt u weten hoe u waterschade en lekkages kunt voorkomen? Bezoek de website van{' '}
                <a
                  href="https://www.wateroverlastlandelijk.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold underline hover:text-green-800"
                >
                  Wateroverlast Landelijk
                </a>{' '}
                voor praktische adviezen en preventietips.
              </p>
            </article>
          </section>

          {/* Sectie 3: Reparaties, Verzekeringen en Advies */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold mb-6">
              Reparaties, Verzekeringen en Deskundig Advies
            </h2>
            <article className="space-y-6">
              <p>
                Of het nu gaat om een <strong className="text-blue-500">kleine reparatie</strong> of een uitgebreide verbouwing, ons team werkt snel en volgens hoge kwaliteitsnormen. Heeft u vragen over de vergoeding van waterschade via uw verzekering? Vaak worden deze kosten (deels) vergoed, afhankelijk van uw polis.
              </p>
              <p>
                Voor meer informatie kunt u ook terecht op de website van de{' '}
                <a
                  href="https://www.consumentenbond.nl/verzekering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold underline hover:text-green-800"
                >
                  Consumentenbond
                </a>
                . Bij grotere reparaties of lekkages kunnen wij een uitgebreid rapport opstellen, dat u bij uw verzekeraar kunt indienen. Heeft u nog meer vragen over onze diensten? Neem gerust een kijkje op onze{' '}
                <Link href="/diensten" className="text-green-600 font-semibold underline hover:text-green-800">
                  Diensten-pagina
                </Link>
                .
              </p>
            </article>
          </section>
        </div>
      </main>

      {/* ===================== FAQ SECTION ====================== */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <FAQSection faqItems={faqItems} bannerImage="/loodgieter-staand.webp"/>
        </div>
      </section>

      {/* ===================== CTA / CONTACT SECTION ====================== */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="pr-8">
            <h2 className="text-3xl font-bold mb-4">Neem Direct Contact Op</h2>
            <p className="text-lg mb-6">
              Heeft u direct hulp nodig bij een lekkage of ander loodgietersprobleem in Nieuwegein? Ons ervaren team staat 24/7 voor u klaar.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="font-bold">• 24/7 spoedservice</li>
              <li className="font-bold">• Professionele en snelle interventie</li>
              <li className="font-bold">• Deskundig en persoonlijk advies</li>
            </ul>
            <Link
              href="tel:+31640961848"
              className="bg-green-500 text-white border border-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition inline-block"
            >
              Bel Nu
            </Link>
          </div>
          <div className="p-6 rounded-lg shadow">
            <ContactFormWrapper />
          </div>
        </div>
      </footer>
    </>
  );
}
