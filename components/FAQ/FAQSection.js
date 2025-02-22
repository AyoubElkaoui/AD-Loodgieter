'use client';
import { useState } from 'react';

const FAQSection = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!faqItems || faqItems.length === 0) {
    return null; // Of geef een fallback weer als er geen data is
  }

  return (
    <section className="py-16 bg-gray-50 max-sm:p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Veelgestelde vragen
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
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
