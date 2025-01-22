'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import FAQSection from "@/components/FAQ/FAQSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faLeaf, faPhone, faCogs, faSmile } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Over AD-Loodgietersbedrijf",
            "description": "Meer dan 10 jaar ervaring in loodgietersdiensten in Maarssen, Utrecht en omgeving. Klantgericht en betrouwbaar.",
            "publisher": {
              "@type": "Organization",
              "name": "AD-Loodgietersbedrijf",
              "url": "https://adloodgietersbedrijf.nl",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
        <Image
          src="/plumbing-tools.webp"
          alt="Professionele loodgietersdiensten"
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
            Uw specialist in loodgietersdiensten voor Maarssen, Utrecht en heel Nederland.
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
              Met meer dan <strong>10 jaar ervaring</strong> biedt <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> hoogwaardige loodgietersoplossingen, van spoedklussen tot grote renovaties.
            </p>
            <p className="text-gray-600 mb-6">
              Onze <strong>gecertificeerde loodgieters</strong> combineren vakmanschap en innovatie om ervoor te zorgen dat elke klus snel, duurzaam en klantgericht wordt uitgevoerd.
            </p>
            <p className="text-gray-600">
              Ons werkgebied omvat <strong>Maarssen</strong>, <strong>Utrecht</strong>, en omliggende regio’s. Bezoek onze pagina over <Link href="/diensten/wc-ontstoppen" className="text-blue-500 hover:underline">WC ontstoppen</Link> of ontdek hoe wij <Link href="/diensten/lekkages-oplossen" className="text-blue-500 hover:underline">lekkages oplossen</Link>.
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
              alt="Professioneel loodgietersteam aan het werk"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
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
            Bij AD-Loodgietersbedrijf staan wij voor kwaliteit, betrouwbaarheid en klantgerichtheid. Onze missie is om u de beste loodgieterservaring te bieden, met snelle en duurzame oplossingen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faUsers, title: 'Ervaren Team', description: 'Ons team bestaat uit gecertificeerde loodgieters met meer dan 10 jaar ervaring.' },
              { icon: faClock, title: 'Snelle Service', description: 'Wij zijn binnen 30 minuten ter plaatse in Maarssen, Utrecht en omliggende regio’s.' },
              { icon: faLeaf, title: 'Duurzame Oplossingen', description: 'Wij bieden oplossingen die niet alleen uw probleem oplossen, maar ook toekomstbestendig zijn.' },
              { icon: faPhone, title: '24/7 Bereikbaarheid', description: 'Wij zijn dag en nacht bereikbaar voor spoedgevallen en dringende reparaties.' },
              { icon: faCogs, title: 'Op Maat Gemaakt', description: 'Elke situatie is uniek. Wij bieden op maat gemaakte oplossingen die perfect bij uw behoeften passen.' },
              { icon: faSmile, title: 'Klanttevredenheid', description: 'Meer dan 95% van onze klanten beveelt ons aan dankzij onze betrouwbare service.' },
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
          <FAQSection />
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
            <h2 className="text-3xl font-bold mb-4">Neem contact op met ons</h2>
            <p className="text-lg mb-6">
              Heeft u vragen over onze diensten of wilt u een afspraak maken? Vul het contactformulier in en wij nemen direct contact met u op.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center"><span className="text-green-500 text-lg mr-3">&#9679;</span> 24/7 bereikbaar voor spoedgevallen.</li>
              <li className="flex items-center"><span className="text-green-500 text-lg mr-3">&#9679;</span> Snelle en betrouwbare service.</li>
              <li className="flex items-center"><span className="text-green-500 text-lg mr-3">&#9679;</span> Klantgericht en professioneel.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
