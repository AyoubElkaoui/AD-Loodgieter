'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// Definieer de gtag_report_conversion functie volgens Google Ads
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16875681251/7fBTCPyX8qMaEOPr-e4-", // Vervang dit met de exacte waarde uit Google Ads
      value: 1.0,
      currency: "EUR",
      event_callback: callback,
    });
    console.log("Google Ads conversie getriggerd!");
  } else {
    console.error("gtag is niet beschikbaar!");
  }
  return false;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postalCode: '',
    houseNumber: '',
    houseNumberAddition: '',
    phone: '',
    message: '',
  });
  const [files, setFiles] = useState([]);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [status, setStatus] = useState('');
  const formRef = useRef(null);

  // Haal de reCAPTCHA site key uit de environment
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter((file) =>
        file.type.startsWith('image/')
    );
    setFiles(selectedFiles);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postalCodeRegex = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.name.trim()) return 'Naam is verplicht.';
    if (!emailRegex.test(formData.email)) return 'Ongeldig e-mailadres.';
    if (!postalCodeRegex.test(formData.postalCode)) return 'Ongeldige postcode. Gebruik bijv. 1234 AB.';
    if (!formData.houseNumber || isNaN(formData.houseNumber)) return 'Huisnummer moet een getal zijn.';
    if (formData.houseNumberAddition && !/^[A-Za-z0-9\s]+$/.test(formData.houseNumberAddition))
      return 'Huisnummer toevoeging bevat ongeldige tekens.';
    if (!phoneRegex.test(formData.phone)) return 'Telefoonnummer moet exact 10 cijfers bevatten.';
    if (!recaptchaToken) return 'Bevestig alstublieft de reCAPTCHA.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Verzenden...');

    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    files.forEach((file) => {
      formDataToSend.append('files', file);
    });
    formDataToSend.append('recaptchaToken', recaptchaToken);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus('Bericht succesvol verzonden! Bedankt, wij nemen snel contact met u op.');
        setFormData({
          name: '',
          email: '',
          postalCode: '',
          houseNumber: '',
          houseNumberAddition: '',
          phone: '',
          message: '',
        });
        setFiles([]);
        setRecaptchaToken(null);
      } else {
        const { error } = await response.json();
        setStatus(error || 'Er is iets misgegaan bij het verzenden van het bericht.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Fout bij het verzenden van het bericht. Probeer het later opnieuw.');
    }
  };

  // Deze functie wordt aangeroepen wanneer op de verstuurknop wordt geklikt.
  // Hij triggert eerst de Google Ads conversie en daarna verstuurt hij het formulier.
  const handleButtonClick = () => {
    // Trigger de Google Ads conversie
    gtag_report_conversion();
    // Vervolgens verstuur je het formulier door een submit-event te dispatchen.
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Neem vandaag nog contact op</h2>
        <p className="mb-4 text-gray-300">
          Heeft u vragen of wilt u een afspraak maken? Vul onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op.
        </p>
        <form onSubmit={handleSubmit} encType="multipart/form-data" id="contact-form" ref={formRef}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Naam <span className="text-red-500">*</span></label>
              <input
                  type="text"
                  name="name"
                  placeholder="Uw naam"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">E-mailadres <span className="text-red-500">*</span></label>
              <input
                  type="email"
                  name="email"
                  placeholder="Uw e-mailadres"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Postcode <span className="text-red-500">*</span></label>
              <input
                  type="text"
                  name="postalCode"
                  placeholder="1234 AB"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block mb-1 text-sm">Huisnummer <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    name="houseNumber"
                    placeholder="Bijv. 12"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm">Toevoeging</label>
                <input
                    type="text"
                    name="houseNumberAddition"
                    placeholder="Bijv. A"
                    value={formData.houseNumberAddition}
                    onChange={handleChange}
                    className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block mb-1 text-sm">Telefoonnummer <span className="text-red-500">*</span></label>
              <input
                  type="tel"
                  name="phone"
                  placeholder="Bijv. 0612345678"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 border border-gray-700 w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-2">Wilt u foto's toevoegen?</label>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="block w-full p-3 rounded bg-gray-800 border border-gray-700"
            />
            <p className="text-xs mt-1 text-gray-400">Max. bestandsgrootte: 256 MB. Alleen afbeeldingsbestanden toegestaan.</p>
          </div>
          <div className="mt-4">
            <label className="block mb-1 text-sm">Bericht</label>
            <textarea
                name="message"
                placeholder="Uw bericht"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded bg-gray-800 border border-gray-700"
                rows={4}
            />
          </div>
          <div className="mt-4">
            {RECAPTCHA_SITE_KEY ? (
                <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
            ) : (
                <p className="text-red-500">Er ontbreekt een reCAPTCHA site key in de omgeving (NEXT_PUBLIC_RECAPTCHA_SITE_KEY).</p>
            )}
          </div>
          <div className="flex flex-wrap gap-4 xl:justify-between">
            <button
                type="button"
                onClick={handleButtonClick}
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-blue-600 transition"
            >
              Versturen
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-sm text-yellow-400">{status}</p>}
      </div>
  );
}
