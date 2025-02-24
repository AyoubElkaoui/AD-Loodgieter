// ContactFormWrapper.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ContactFormLazy = dynamic(() => import('./ContactForm'), {
  ssr: false, // reCAPTCHA moet client-side laden
  loading: () => <p>Contactformulier wordt geladen...</p>,
});

export default function ContactFormWrapper() {
  const [showForm, setShowForm] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowForm(true);
            observer.unobserve(entry.target); // stop observer na 1x
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      {showForm ? (
        <ContactFormLazy />
      ) : (
        <p className="text-center text-white">Contactformulier wordt geladen...</p>
      )}
    </div>
  );
}
