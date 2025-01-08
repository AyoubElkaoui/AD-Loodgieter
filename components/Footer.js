'use client';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 sm:py-10 max-sm:p-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contactgegevens */}
              <div>
                  <h3 className="text-lg font-bold mb-4">Contactgegevens</h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                      <li>
                          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-green-500" />
                          <Link href="tel:+31640961848"
                             onClick={() =>
                               gtag('event', 'click', {
                                   event_category: 'Button',
                                   event_label: 'Bel knop - Footer',
                                   value: 1,
                               })
                             }>
                              +31 6 40 96 18 48</Link>
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
                          <Link href="mailto:info@adloodgietersbedrijf.nl"
                             onClick={() =>
                               gtag('event', 'click', {
                                   event_category: 'Button',
                                   event_label: 'Mail knop - Footer',
                                   value: 1,
                               })
                             }>
                              info@adloodgietersbedrijf.nl</Link>
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-green-500" />
                          Utrecht, Nederland
                      </li>
                  </ul>
              </div>

              {/* Snelle Links */}
              <div>
                  <h3 className="text-lg font-bold mb-4">Snelle Links</h3>
                  <ul className="space-y-2">
                      <li>
                          <Link href="/over-ons" className="hover:text-green-500 transition">
                              Over Ons
                          </Link>
                      </li>
                      <li>
                          <Link href="/diensten" className="hover:text-green-500 transition">
                              Diensten
                          </Link>
                      </li>
                      <li>
                          <Link href="/faq" className="hover:text-green-500 transition">
                              Veelgestelde Vragen
                          </Link>
                      </li>
                      <li>
                          <Link href="/contact" className="hover:text-green-500 transition">
                              Contact
                          </Link>
                      </li>
                  </ul>
              </div>

              {/* Nieuwsbrief */}
              <div>
                  <h3 className="text-lg font-bold mb-4">Blijf op de hoogte</h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">
                      Schrijf u in voor onze nieuwsbrief en blijf op de hoogte van onze laatste updates en aanbiedingen.
                  </p>
                  <form className="flex space-x-2">
                      <input
                        type="email"
                        placeholder="Uw e-mailadres"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:ring focus:ring-green-500"
                      />
                      <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 transition text-white py-2 px-4 rounded"
                      >
                          Aanmelden
                      </button>
                  </form>
              </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm sm:text-base">
              <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} AD-Loodgietersbedrijf. Alle rechten voorbehouden.
              </p>
          </div>
      </footer>
    );
}
