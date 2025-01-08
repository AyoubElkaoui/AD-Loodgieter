'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faToilet, faShower, faSink, faWrench, faWater, faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQ/FAQSection';

export default function Home() {
    return (
      <>
          {/* Hero Section */}
          <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-4 sm:px-8">
              <motion.div
                className="absolute inset-0"
                initial={{scale: 1.1}}
                animate={{scale: 1}}
                transition={{duration: 1.5}}
              >
                  <Image
                    src="/plumber-working-on-pipes.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                  />
              </motion.div>
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <motion.div
                className="relative z-10 text-center text-white"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
              >
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4 break-words">
                      Uw betrouwbare loodgieter in Nederland</h1>
                  <p className="text-base sm:text-lg px-2">Wij staan dag en nacht klaar voor al uw loodgietersproblemen. Van
                      verstoppingen tot lekkages: wij lossen het op.</p>
                  <div className="flex space-x-4 justify-center">
                      <Link href="tel:+31640961848"
                            className="bg-green-500 py-3 px-6 rounded-lg text-white font-semibold hover:bg-green-600 transition"
                            onClick={() =>
                              gtag('event', 'click', {
                                  event_category: 'Button',
                                  event_label: 'Spoed bellen - Homepage',
                                  value: 1,
                              })
                            }>
                          Spoed? Bel Nu
                      </Link>
                      <Link href="/contact"
                            className="bg-blue-500 py-3 px-6 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
                            onClick={() =>
                            gtag('event', 'click', {
                              event_category: 'Button',
                              event_label: 'Contact knop - Homepage',
                              value: 1,
                              })
                          }>
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
                          <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> is een toegewijd loodgietersbedrijf met 10 jaar ervaring in de sector. Wij bieden hoogwaardige loodgietersdiensten voor zowel bedrijven als particulieren, met specialisaties in renovatie, nieuwbouw en service installaties.
                      </p>
                      <p className="text-gray-600 mb-6">
                          Ons team van hoogopgeleide loodgieters staat klaar om uw projecten aan te pakken, van eenvoudige reparaties tot complexe installaties. Wij streven naar op maat gemaakte oplossingen, kwaliteit en betrouwbaarheid, waardoor we de perfecte partner zijn om uw doelstellingen te bereiken.
                      </p>
                      <Link href="/over-ons" className="text-blue-500 font-semibold hover:underline">
                          Lees meer over ons
                      </Link>
                  </div>
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                      <Image
                        src="/loodgieter-toilet.jpg"
                        alt="Ons team"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                      />
                  </motion.div>
              </div>
          </section>

          {/* Diensten Sectie */}
          <section className="py-16 bg-white max-sm:p-8">
              <div className="container mx-auto">
                  <div className="text-center max-w-7xl mx-auto mb-12">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">Onze Diensten</h2>
                      <p className="text-gray-600">
                          Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bieden we een breed
                          scala aan professionele loodgietersdiensten door heel Nederland. Of het nu gaat om een
                          verstopt toilet, een lekkage of complexe installaties, ons team van ervaren vakmensen staat
                          24/7 voor u klaar. Wij leveren niet alleen snelle service, maar zorgen ook voor een duurzame
                          oplossing. Ontdek hieronder wat wij voor u kunnen betekenen.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                          { icon: faToilet, title: 'WC Ontstoppen', description: 'Snel en professioneel uw toilet weer vrij van verstoppingen.' },
                          { icon: faSink, title: 'Afvoer Ontstoppen', description: 'Wij zorgen ervoor dat uw afvoer weer vrij en goed doorloopt.' },
                          { icon: faWrench, title: 'Reparaties', description: 'Efficiënte oplossingen voor al uw loodgietersproblemen.' },
                          { icon: faShower, title: 'Douche Ontstoppen', description: 'Wij zorgen ervoor dat uw douche weer probleemloos werkt.' },
                          { icon: faHandHoldingWater, title: 'Vaatwasser Ontstoppen', description: 'De beste en snelle oplossingen voor vaatwasserproblemen.' },
                          { icon: faWater, title: 'Lekkages Oplossen', description: 'Laat lekkages snel en efficiënt repareren door ons professionele team.' },
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
                            <p className="text-gray-600">{dienst.description}</p>
                            <Link href="/diensten" className="text-blue-500 font-semibold hover:underline">
                                Meer info
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
                          Bij <span className="font-bold text-blue-500">AD-Loodgietersbedrijf</span> bieden wij uitgebreide loodgietersdiensten aan in de hele regio Utrecht, inclusief Amersfoort, Nieuwegein, Maarssen en Culemborg. Dankzij ons landelijke netwerk zijn we ook beschikbaar in andere steden en dorpen in Nederland.
                      </p>
                      <p className="text-lg text-gray-600 mb-6">
                          Of het nu gaat om een spoedklus of een geplande reparatie, ons team van ervaren vakmensen staat altijd voor u klaar. U kunt rekenen op snelle service en topkwaliteit, waar u ook woont.
                      </p>
                      <ul className="space-y-3">
                          {[
                              'Actief in Utrecht, Amersfoort, Nieuwegein, Maarssen en Culemborg',
                              'Dekking door heel Nederland',
                              'Binnen 30 minuten op locatie',
                          ].map((text, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-6 h-6 mr-3" />
                                {text}
                            </li>
                          ))}
                      </ul>
                  </div>

                  {/* Kaart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative"
                  >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131921.06150352178!2d4.933146124625249!3d52.09296495760228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4339d32d37%3A0xd6c8fc4c19af4ae9!2sUtrecht!5e0!3m2!1sen!2snl!4v1735878699192!5m2!1sen!2snl"
                        width="100%"
                        id="iframe-page"
                        height="350"
                        style={{ border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                      ></iframe>
                  </motion.div>
              </motion.div>

              {/* Lijst met Wijken */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mt-10 bg-white p-8 rounded-lg shadow-md w-3/4 mx-auto max-sm:w-full"
              >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Wij zijn actief in de volgende regio’s:</h3>
                  <p className="text-lg text-gray-600">
                      Naast onze hoofdlocatie in Utrecht zijn we ook beschikbaar in:
                  </p>
                  <p className="text-lg text-gray-600 mt-2 font-semibold">
                      Amersfoort, Nieuwegein, Maarssen, Culemborg, Houten, Zeist, Woerden, De Bilt, IJsselstein, Vleuten, en nog veel meer steden en dorpen in heel Nederland.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block mt-4 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
                  >
                      Neem contact op
                  </Link>
              </motion.div>
          </section>

          <FAQSection />

          {/* Contact Form Sectie */}
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
                      <ContactForm />
                  </motion.div>
              </div>
          </section>
      </>
    );
}
