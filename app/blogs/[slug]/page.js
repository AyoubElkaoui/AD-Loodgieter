'use client';

import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '@/sanity/lib/client';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

export default function BlogPost({ params }) {
  const [slug, setSlug] = useState('');
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);

      const query = `*[_type == "blog" && slug.current == $slug][0]`;
      const fetchedBlog = await client.fetch(query, { slug: resolvedParams.slug });
      setBlog(fetchedBlog);

      const otherQuery = `*[_type == "blog" && slug.current != $slug] | order(publishedAt desc)`;
      const fetchedOtherBlogs = await client.fetch(otherQuery, { slug: resolvedParams.slug });
      setOtherBlogs(fetchedOtherBlogs);
    }

    fetchParams();
  }, [params]);

  // if (!blog) {
  //   return <p className="text-center text-lg font-semibold py-12">Laden...</p>;
  // }

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-50 text-gray-800">
        {blog?.image ? (
          <Parallax speed={-10}>
            <motion.div
              className="relative h-[70vh] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={urlFor(blog.image).url()}
                alt={blog.title || 'Hero Image'}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold px-4 text-center md:text-left max-w-[50%] mx-auto max-sm:text-3xl">
                  {blog.title}
                </h1>
              </div>
            </motion.div>
          </Parallax>
        ) : (
          <div className="relative h-[70vh] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">Geen afbeelding beschikbaar</span>
          </div>
        )}
        {/* Highlight Section */}
        {blog?.highlight && (
          <section className="relative z-10 -mt-6 lg:-mt-10">
            <motion.div
              className="container mx-auto px-4 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-dGrey text-white rounded-lg shadow-lg py-4 px-6 text-center md:py-6 md:px-8">
                <p className="text-white text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
                  {blog.highlight}
                </p>
              </div>
            </motion.div>
          </section>
        )}
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-6 lg:px-12 py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="prose prose-lg mx-auto max-w-full"
        >
          <PortableText value={blog?.content} />
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      {blog?.cta && (
        <section className="py-12">
          <div className="container mx-auto px-6 text-center bg-dGrey text-white rounded-lg shadow-md max-w-[90%] md:max-w-4xl">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4 py-4"
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1}}
            >
              {blog.cta.title}
            </motion.h2>
            <motion.p
              className="mb-6 text-base md:text-lg"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.2}}
            >
              {blog.cta.description}
            </motion.p>
            <motion.a
              href={blog.cta.buttonLink}
              className="bg-green-500 hover:bg-green-600 text-white  py-3 px-6 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5}}
            >
              {blog.cta.buttonLabel}
            </motion.a>
          </div>
        </section>
      )}

      {/* Related Blogs Section */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Andere blogs</h2>
        <Slider {...sliderSettings}>
          {otherBlogs.map((otherBlog) => (
            <div key={otherBlog._id} className="p-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col card">
                {otherBlog.image ? (
                  <Image
                    src={urlFor(otherBlog.image).url()}
                    alt={otherBlog.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">Geen afbeelding</span>
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="card-title">{otherBlog.title}</h3>
                  <p className="text-gray-600 card-content">{otherBlog.highlight}</p>
                  <Link
                    href={`/blogs/${otherBlog.slug.current}`}
                    className="text-blue-500 font-semibold hover:underline card-footer"
                  >
                    Lees meer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 left-[-60px] top-1/2 transform -translate-y-1/2 bg-dGrey text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all max-sm:left-[-20px]"
  >
    &#8592;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 right-[-60px] top-1/2 transform -translate-y-1/2 bg-dGrey text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all max-sm:right-[-20px]"
  >
    &#8594;
  </button>
);