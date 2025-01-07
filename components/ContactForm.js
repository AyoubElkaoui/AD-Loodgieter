'use client';
import { useState } from 'react';

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
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter((file) =>
      file.type.startsWith('image/')
    );
    setFiles(selectedFiles);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postalCodeRegex = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) return 'Naam is verplicht.';
    if (!emailRegex.test(formData.email)) return 'Ongeldig e-mailadres.';
    if (!postalCodeRegex.test(formData.postalCode)) return 'Ongeldige postcode. Gebruik bijv. 1234 AB.';
    if (!formData.houseNumber || isNaN(formData.houseNumber)) return 'Huisnummer moet een getal zijn.';
    if (
      formData.houseNumberAddition &&
      !/^[A-Za-z0-9\s]+$/.test(formData.houseNumberAddition)
    )
      return 'Huisnummer toevoeging bevat ongeldige tekens.';
    if (!phoneRegex.test(formData.phone)) return 'Telefoonnummer moet exact 10 cijfers bevatten.';
    if (!formData.message || formData.message.length > 500) return 'Bericht mag niet leeg zijn en moet minder dan 500 tekens bevatten.';
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus('Bericht succesvol verzonden!');
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
      } else {
        const { error } = await response.json();
        setStatus(error || 'Fout bij het verzenden van het bericht.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Fout bij het verzenden van het bericht.');
    }
  };

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Neem contact op</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Uw naam"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Uw e-mailadres"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Uw postcode"
            value={formData.postalCode}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 border border-gray-700"
          />
          <div className="flex gap-2">
            <input
              type="text"
              name="houseNumber"
              placeholder="Huisnummer"
              value={formData.houseNumber}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 border border-gray-700 flex-1 w-1/2"
            />
            <input
              type="text"
              name="houseNumberAddition"
              placeholder="Toevoeging"
              value={formData.houseNumberAddition}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 border border-gray-700 flex-1 w-1/2"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Uw telefoonnummer"
            value={formData.phone}
            onChange={handleChange}
            className="col-span-2 p-3 rounded bg-gray-800 border border-gray-700"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm mb-2">Wilt u foto&#39;s toevoegen?</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="block w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <p className="text-xs mt-2">Max. bestandsgrootte: 256 MB.</p>
        </div>
        <textarea
          name="message"
          placeholder="Uw bericht"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-4 p-3 rounded bg-gray-800 border border-gray-700"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-green-600 transition"
        >
          Versturen
        </button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
