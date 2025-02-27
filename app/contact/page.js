'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';
import Image from 'next/image';
import ContactFormWrapper from "@/components/ContactForm/ContactFormWrapper";

const contactDetails = [
    {
        icon: faPhone,
        title: 'Telefoon',
        content: '+31 6 40 96 18 48',
        link: 'tel:+31640961848',
    },
    {
        icon: faEnvelope,
        title: 'Email',
        content: 'info@adloodgietersbedrijf.nl',
        link: 'mailto:info@adloodgietersbedrijf.nl',
    },
    {
        icon: faMapMarkerAlt,
        title: 'Adres',
        content: 'Spechtenkamp 334, 3607 KT Maarssen',
        link: 'https://www.google.com/maps?q=Spechtenkamp+334,+3607+KT+Maarssen',
    },
];

export default function ContactPage() {
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
                        src="/front-view-man-working-as-plumber.webp"
                        alt="Neem contact op – Professionele loodgietersdiensten"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
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
                  <h1 className="text-5xl font-bold mb-4">
                      Neem <strong>Contact</strong> met Ons Op
                  </h1>
                  <p className="text-lg max-w-2xl mx-auto">
                      Wij zijn 24/7 beschikbaar in <strong>Maarssen</strong> en omgeving. Heeft u vragen over onze <strong>professionele loodgietersdiensten</strong> of wilt u direct een afspraak maken?
                  </p>
              </motion.div>
          </section>

          {/* Contact Details */}
          <section className="py-16 bg-gray-100">
              <div className="container mx-auto px-6 text-center md:text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                          <h2 className="text-3xl font-bold text-gray-800 mb-6">Onze Contactgegevens</h2>
                          <p className="text-lg text-gray-600 mb-8">
                              Heeft u vragen, wilt u direct een afspraak maken of zoekt u deskundig advies? Neem contact met ons op via de onderstaande gegevens.
                          </p>
                          <ul className="space-y-6">
                              {contactDetails.map((detail, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-center space-x-4 text-lg text-gray-600"
                                  initial={{ opacity: 0, x: -50 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <FontAwesomeIcon icon={detail.icon} className="text-blue-500 text-2xl" />
                                    <span className="font-bold text-gray-800">{detail.title}:</span>
                                    <Link
                                      href={detail.link}
                                      className="hover:underline"
                                      onClick={() =>
                                        sendGTMEvent({
                                            event: 'buttonClicked',
                                            category: 'Link',
                                            label: 'Contact knop - Contact gegevens',
                                        })
                                      }
                                    >
                                        {detail.content}
                                    </Link>
                                </motion.li>
                              ))}
                          </ul>
                          <p className="mt-8 text-gray-600">
                              Lees meer over onze <Link href="/diensten" className="text-blue-500 hover:underline">diensten</Link> of ontdek wie wij zijn op onze <Link href="/over-ons" className="text-blue-500 hover:underline">Over Ons</Link> pagina.
                          </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
                      >
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39177.62368336463!2d5.016684348671651!3d52.14157039885579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66e3b84fef1b3%3A0x9d7cd305a9fcbf9e!2sMaarssen!5e0!3m2!1snl!2snl!4v1736213320228!5m2!1snl!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Locatie Maarssen"
                          ></iframe>
                      </motion.div>
                  </div>
              </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16 bg-white">
              <div className="container mx-auto px-6">
                  <div className="text-center mb-8">
                      <motion.h2
                        className="text-3xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                          Stuur Ons Een Bericht
                      </motion.h2>
                      <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                          Vul het onderstaande formulier in voor snel en deskundig contact. Wij reageren direct op uw aanvraag.
                      </motion.p>
                  </div>
                  <ContactFormWrapper />
              </div>
          </section>
      </>
    );
}
