'use client';
import { useState } from 'react';

const FAQSection = () => {
  const faqData = [
    {
      question: 'Welke loodgieterdiensten bieden jullie aan?',
      answer: 'Wij bieden een breed scala aan loodgieterdiensten, waaronder verstoppingen, lekkages, en installaties.',
    },
    {
      question: 'Bieden jullie nooddiensten aan?',
      answer: 'Ja, onze spoeddiensten zijn 24/7 beschikbaar voor al uw noodsituaties.',
    },
    {
      question: 'Werken jullie voor particulieren of bedrijven?',
      answer:
        'Beide! Onze ervaren technici kunnen elke klus aan, van woningen tot bedrijfsgebouwen.',
    },
    {
      question: 'Wat moet ik doen voordat u aankomt?',
      answer:
        'Probeer indien mogelijk het probleem te isoleren, zoals het afsluiten van waterleidingen.',
    },
    {
      question: 'Bieden jullie garanties op de diensten?',
      answer: 'Ja, wij bieden garantie op alle uitgevoerde werkzaamheden.',
    },
    {
      question: 'Bieden jullie gratis offertes aan?',
      answer: 'Ja, wij bieden vrijblijvend en gratis offertes aan voor onze diensten.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 bg-gray-50 max-sm:p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Veelgestelde vragen over AD Loodgietersbedrijf
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg transition-all duration-300 ${
                activeIndex === index ? 'border-blue-500 shadow-md' : 'border-gray-300'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-100 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
