'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * FAQSections component met DaisyUI collapses en optionele banner-afbeelding.
 *
 * @param {Array} faqItems  - Array van FAQ-objects { question, answer }
 * @param {String} bannerImage - Pad naar de banner-afbeelding, default is "/faq-banner.webp"
 */
const FAQSections = ({ faqItems, bannerImage = "/faq-banner.webp" }) => {
  if (!faqItems || faqItems.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 max-sm:p-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Veelgestelde Vragen</h2>
          <p className="text-lg text-gray-600">
            Hier vindt u antwoorden op de meest gestelde vragen over onze diensten.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Banner-afbeelding: alleen op medium (md) en grotere schermen */}
          <div className="hidden md:block">
            <div className="relative h-full">
              <Image
                src={bannerImage}
                alt="Veelgestelde vragen banner"
                width={1200}
                height={1200}
                className="rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
          {/* FAQ Items */}
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box transition-all duration-300"
              >
                <div className="collapse-title text-md font-semibold text-white">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSections;
