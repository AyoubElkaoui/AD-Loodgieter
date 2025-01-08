'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/message/QQFYCIWGQY7EL1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-4 rounded-full shadow-lg transition transform hover:scale-105"
        onClick={() =>
          sendGTMEvent({
            event: 'buttonClicked',
            category: 'Social Media',
            label: 'WhatsApp Button - Footer',
            value: 1,
          })
        }
      >
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-2xl" />
        App ons
      </Link>
    </div>
  );
}
