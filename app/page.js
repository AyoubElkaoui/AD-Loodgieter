'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faToilet,
  faShower,
  faSink,
  faWrench,
  faWater,
  faHandHoldingWater,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { sendGTMEvent } from "@next/third-parties/google";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import DiscountPopup from "@/components/PopUp";
import Head from "next/head";
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

// Dynamisch importeren
const FAQSection = dynamic(() => import('../components/FAQ/FAQSection'), { ssr: false });
const ContactForm = dynamic(() => import('../components/ContactForm/ContactForm'), { ssr: false });

export default function Home() {
  const isMobile = useIsMobile();

  // Unieke FAQ-items voor de homepage
  const homepageFAQItems = [
    {
      question: 'Wat maakt AD-Loodgietersbedrijf uniek?',
      answer: 'Wij bieden snelle service, deskundige oplossingen en werken 24/7 om uw loodgietersproblemen snel op te lossen.',
    },
    {
      question: 'Welke diensten bieden jullie aan?',
      answer: 'Van lekkages en verstoppingen tot installaties en preventief onderhoud, wij dekken het volledige spectrum.',
    },
    {
      question: 'Hoe snel zijn jullie ter plaatse?',
      answer: 'In de meeste gevallen zijn wij binnen 30 tot 60 minuten op locatie, zodat u snel geholpen wordt.',
    },
    {
      question: 'Bieden jullie garantie op het werk?',
      answer: 'Ja, al onze werkzaamheden worden uitgevoerd met garantie, zodat u verzekerd bent van duurzame oplossingen.',
    },
  ];

  return (
    <>
      <Head>
        <title key="title">Betrouwbare Loodgieter in Maarssen | AD-Loodgietersbedrijf</title>
        <meta
          name="description"
          content="AD-Loodgietersbedrijf staat 24/7 voor u klaar in Maarssen en de regio Utrecht voor lekkages, verstoppingen en installaties. Snel op locatie!"
          key="description"
        />
        {/* Canonical-tag verwijderd, want die staat in RootLayout */}
      </Head>
      <meta property="og:title" content="Betrouwbare Loodgieter in Maarssen | AD-Loodgietersbedrijf" />
      <meta
        property="og:description"
        content="24/7 beschikbaar voor lekkages, verstoppingen en installaties. Snel op locatie in Maarssen en omgeving."
      />
      <meta property="og:image" content="https://adloodgietersbedrijf.nl/images/hero.webp" />
      <meta property="og:url" content="https://adloodgietersbedrijf.nl/" />
      <meta property="og:type" content="website" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AD-Loodgietersbedrijf",
            "url": "https://adloodgietersbedrijf.nl",
            "description":
              "Uw betrouwbare loodgieter voor Maarssen en omgeving. Snelle service voor lekkages, verstoppingen en installaties.",
            "telephone": "+31640961848",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Spechtenkamp 334",
              "addressLocality": "Maarssen",
              "postalCode": "3607 KT",
              "addressCountry": "NL",
            },
            "image": "https://adloodgietersbedrijf.nl/images/hero.webp",
            "priceRange": "€€",
            "openingHours": ["Mo-Su 00:00-23:59"],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.1319,
              "longitude": 5.0419,
            },
            "sameAs": [
              "https://www.facebook.com/adloodgietersbedrijf",
              "https://www.instagram.com/adloodgietersbedrijf",
            ],
          }),
        }}
      />
      <DiscountPopup />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/loodgieter-toilet-gereedschap.jpg"
            alt="Betrouwbare loodgieter in Maarssen bezig met leidingen"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 break-words">
            Betrouwbare Loodgieter in Maarssen en Regio Utrecht
          </h1>
          <p className="text-base sm:text-lg px-2 break-words w-1/2 mx-auto">
            Wij staan dag en nacht klaar voor al uw loodgietersproblemen. Van verstoppingen tot lekkages: snelle service gegarandeerd. Met meer dan 10 jaar ervaring bieden wij betrouwbare, duurzame en professionele oplossingen voor zowel particuliere als zakelijke klanten in de regio Utrecht en daarbuiten.
          </p>
          <div className="flex space-x-4 justify-center p-4">
            <Link
              href="tel:+31640961848"
              className="bg-green-500 py-3 px-6 rounded-lg text-white font-semibold hover:bg-green-600 transition"
            >
              Bel direct: 24/7 service!
            </Link>
            <Link
              href="/contact"
              className="bg-blue-500 py-3 px-6 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
            >
              Neem contact op
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Over Ons Sectie */}
      <section className="p-8 bg-gray-100 max-sm:p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Over AD-Loodgietersbedrijf</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> is een toegewijd loodgietersbedrijf met 10 jaar ervaring in de sector. Wij leveren hoogwaardige loodgietersdiensten voor zowel bedrijven als particulieren, met specialisaties in renovatie, nieuwbouw en service-installaties. Onze ervaren professionals gebruiken de nieuwste technologieën om elke klus tot in de puntjes af te werken.
            </p>
            <p className="text-gray-600 mb-6">
              Ons team staat paraat voor alles, van eenvoudige reparaties tot complexe installaties. Wij streven naar maatwerkoplossingen, kwaliteit en betrouwbaarheid.
            </p>
            <p className="text-gray-600">
              Gevestigd in <strong>Maarssen</strong> bedienen wij de regio Utrecht en omliggende steden. Onze lokale expertise zorgt voor snelle service op locatie.
            </p>
            <Link href="/over-ons" className="text-blue-500 font-semibold hover:underline">
              Lees meer over ons
            </Link>
          </div>
          <motion.div
            className="inset-0"
            initial={isMobile ? null : { scale: 1.1 }}
            animate={isMobile ? null : { scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/loodgieter-toilet.webp"
              alt="Ons team in actie"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Diensten Sectie */}
      <section className="py-16 bg-white max-sm:p-8">
        <div className="container mx-auto">
          <div className="text-center max-w-7xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Onze Diensten</h2>
            <p className="text-gray-600 mb-4">
              Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bieden wij een breed scala aan professionele loodgietersdiensten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: faToilet,
                title: 'WC Ontstoppen',
                description: 'Snel en professioneel uw toilet weer vrij van verstoppingen.',
                linkText: 'Lees meer over WC ontstoppen',
              },
              {
                icon: faSink,
                title: 'Afvoer Ontstoppen',
                description: 'Wij zorgen ervoor dat uw afvoer weer vrij en goed doorloopt.',
                linkText: 'Lees meer over afvoer ontstoppen',
              },
              {
                icon: faWrench,
                title: 'Reparaties',
                description: 'Efficiënte oplossingen voor al uw loodgietersproblemen.',
                linkText: 'Lees meer over reparaties',
              },
              {
                icon: faShower,
                title: 'Douche Ontstoppen',
                description: 'Wij zorgen ervoor dat uw douche weer probleemloos werkt.',
                linkText: 'Lees meer over douche ontstoppen',
              },
              {
                icon: faHandHoldingWater,
                title: 'Vaatwasser Ontstoppen',
                description: 'De beste en snelste oplossing voor vaatwasserproblemen.',
                linkText: 'Lees meer over vaatwasser ontstoppen',
              },
              {
                icon: faWater,
                title: 'Lekkages Oplossen',
                description: 'Laat lekkages snel en efficiënt repareren door ons professionele team.',
                linkText: 'Lees meer over lekkages oplossen',
              },
            ].map((dienst, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <FontAwesomeIcon icon={dienst.icon} className="text-blue-500 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{dienst.title}</h3>
                <p className="text-gray-600 mb-2">{dienst.description}</p>
                <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                  {dienst.linkText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wijken Sectie */}
      <section className="py-16 bg-gray-100 max-sm:p-8">
        <motion.div
          className="container mx-auto grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="max-sm:-ml-3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">AD-Loodgietersbedrijf: Actief in heel Nederland</h2>
            <p className="text-lg text-gray-600 mb-4">
              Wij bedienen niet alleen de regio Utrecht, maar hebben ook een uitgebreid netwerk in heel Nederland.
            </p>
            <ul className="space-y-3">
              {[
                'Actief in Utrecht, Amersfoort, Nieuwegein, Maarssen en Culemborg en meer',
                'Landelijke dekking in heel Nederland',
                'Snel op locatie, 24/7 beschikbaar',
              ].map((text, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-6 h-6 mr-3" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Kaart met CSS-klasse voor border verwijderen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold mb-4">Waar zijn wij gevestigd?</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131921.06150352178!2d4.933146124625249!3d52.09296495760228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4339d32d37%3A0xd6c8fc4c19af4ae9!2sUtrecht!5e0!3m2!1sen!2snl!4v1735878699192!5m2!1sen!2snl"
              width="100%"
              id="iframe-page"
              height="350"
              className="rounded-lg shadow-lg iframe-no-border"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white p-8 rounded-lg shadow-md w-3/4 mx-auto max-sm:w-full"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Hulp nodig?</h3>
          <p className="text-lg text-gray-600">
            Naast onze hoofdlocatie in Utrecht bedienen wij ook diverse steden en dorpen in Nederland.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Neem contact op
          </Link>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection faqItems={homepageFAQItems} bannerImage="/loodgieter-staand.webp"/>


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
              Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
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
