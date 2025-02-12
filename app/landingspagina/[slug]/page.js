import { getLandingPage, urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';

export default async function LandingPage({ params }) {
  const { slug } = params;
  const pageData = await getLandingPage(slug);

  if (!pageData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Pagina niet gevonden</h1>
      </div>
    );
  }

  return (
    <section className="pb-16 pt-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            {/* CTA */}
            <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Hulp nodig bij loodgietersproblemen?
              </h3>
              <p className="mb-4">
                Neem contact met ons op voor direct advies of een offerte.
              </p>
              <Link href="/contact">
                <span className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-600 transition">
                  Neem contact op
                </span>
              </Link>
            </div>

            {/* Gerelateerde Diensten */}
            {pageData.services && Array.isArray(pageData.services) && pageData.services.length > 0 && (
              <div className="bg-white shadow-lg rounded-xl p-6">
                <h4 className="text-2xl font-bold text-blue-700 mb-4">Onze Diensten</h4>
                <ul className="space-y-3">
                  {pageData.services.map((service, index) => (
                    <li key={index}>
                      {service.slug?.current ? (
                        <Link href={`/landingspagina/${service.slug.current}`} className="text-gray-600 hover:text-blue-500 transition">
                          {service.title}
                        </Link>
                      ) : (
                        <span className="text-gray-500">{service.title}</span> // Geen slug? Geen link tonen
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}


            {/* Hoofdinhoud */}
          <div className="lg:w-3/4">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                {pageData.title}
              </h1>
              {pageData.featuredImage && (
                <Image
                  src={urlFor(pageData.featuredImage).url()}
                  alt={pageData.title}
                  width={800}
                  height={400}
                  className="rounded-lg mb-6"
                />
              )}
              <PortableText value={pageData.content} />

              {/* Call-To-Action Knop */}
              {pageData.ctaText && pageData.ctaUrl && (
                <div className="text-center mt-8">
                  <Link href={pageData.ctaUrl}>
                    <span className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                      {pageData.ctaText}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
