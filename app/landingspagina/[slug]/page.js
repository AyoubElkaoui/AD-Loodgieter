'use client';

import React, { useEffect, useState } from 'react'; // React import toegevoegd
import { client, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

export default function LandingPage({ params }) {
  const slug = params.slug; // Direct toegang tot params.slug

  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    async function fetchLandingPage() {
      if (!slug) return;

      const query = `*[_type == "landingPage" && slug.current == $slug][0]`;
      const fetchedPage = await client.fetch(query, { slug });
      setLandingPage(fetchedPage);
    }

    fetchLandingPage();
  }, [slug]);

  if (!landingPage) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Pagina niet gevonden</h1>
        <p className="text-lg text-gray-600">Deze landingspagina bestaat niet.</p>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-50 text-gray-800">
        {landingPage.image ? (
          <Parallax speed={-10}>
            <motion.div
              className="relative h-[70vh] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={urlFor(landingPage.image).url()}
                alt={landingPage.title || 'Hero Image'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold px-4 text-center md:text-left max-w-[50%] mx-auto max-sm:text-3xl">
                  {landingPage.title}
                </h1>
              </div>
            </motion.div>
          </Parallax>
        ) : (
          <div className="relative h-[70vh] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">Geen afbeelding beschikbaar</span>
          </div>
        )}
      </section>

      {/* Highlight Section */}
      {landingPage.highlight && (
        <section className="relative z-10 -mt-6 lg:-mt-10">
          <motion.div
            className="container mx-auto px-4 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-dGrey text-white rounded-lg shadow-lg py-4 px-6 text-center md:py-6 md:px-8">
              <p className="text-white text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
                {landingPage.highlight}
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Content Section */}
      <section className="container mx-auto px-6 lg:px-12 py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="prose prose-lg mx-auto max-w-full"
        >
          <PortableText value={landingPage.content} />
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      {landingPage?.cta && (
        <section className="py-12">
          <div className="container mx-auto px-6 text-center bg-dGrey text-white rounded-lg shadow-md max-w-[90%] md:max-w-4xl">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4 py-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {landingPage.cta.title}
            </motion.h2>
            <motion.p
              className="mb-6 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {landingPage.cta.description}
            </motion.p>
            <motion.a
              href={landingPage.cta.buttonLink}
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {landingPage.cta.buttonLabel}
            </motion.a>
          </div>
        </section>
      )}
    </main>
  );
}
