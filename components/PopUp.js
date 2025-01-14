import { useEffect, useState } from 'react';

export default function DiscountPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Controleer of de gebruiker de popup al heeft gezien
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('hasSeenPopup', 'true'); // Markeer als getoond
      }, 5000); // Toon de popup na 5 seconden

      return () => clearTimeout(timer); // Timer opschonen bij unmount
    }
  }, []);

  if (!showPopup) return null; // Toon de popup alleen als `showPopup` true is

  return (
    <div
      onClick={() => setShowPopup(false)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Voorkom sluiten bij klik op de popup zelf
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center"
      >
        <h2 className="text-xl font-bold mb-4">Speciaal Aanbod!</h2>
        <p className="text-gray-700 mb-6">
          Ontvang <span className="font-bold text-green-500">20% korting</span> op uw eerste afspraak! Neem nu contact
          met ons op en vermeld deze aanbieding.
        </p>
        <button
          onClick={() => {
            // Redirect naar de contactpagina
            window.location.href = '/contact?korting=20procent';
          }}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Contact opnemen
        </button>
      </div>
    </div>
  );
}
