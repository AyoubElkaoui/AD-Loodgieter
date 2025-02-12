import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/lib/portableTextConfig";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;

  // Haal de blogpost op met de Sanity client
  const blog = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      metaTitle,
      metaDescription,
      mainImage,
      body,
      publishedAt,
      "slug": slug.current,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }`,
    { slug }
  );

  // Haal gerelateerde blogposts op (maximaal 3)
  const relatedBlogs = await client.fetch(
    `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      title,
      "slug": slug.current,
      mainImage
    }`,
    { slug }
  );

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Post niet gevonden</h1>
      </div>
    );
  }

  const publishedDate = new Date(blog.publishedAt).toLocaleDateString();

  // JSON-LD structured data voor de blogpost
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDescription || "",
    "image": blog.mainImage ? urlFor(blog.mainImage).url() : "",
    "datePublished": blog.publishedAt,
    "author": {
      "@type": "Person",
      "name": blog.author?.name || "AD Loodgietersbedrijf"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AD Loodgietersbedrijf",
      "logo": {
        "@type": "ImageObject",
        "url": "https://adloodgietersbedrijf.nl/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://adloodgietersbedrijf.nl/blogs/${blog.slug}`
    }
  };

  return (
    <>
      <Head>
        <title>{blog.metaTitle || blog.title} - AD Loodgietersbedrijf</title>
        <meta
          name="description"
          content={blog.metaDescription || "Lees dit artikel op AD Loodgietersbedrijf."}
        />
        <link rel="canonical" href={`https://adloodgietersbedrijf.nl/blogs/${blog.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
        />
      </Head>

      <section className="pb-16 pt-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              {/* Call-to-Action */}
              <div className="bg-gray-900 text-white rounded-lg p-6 mb-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Hulp nodig bij een loodgietersprobleem?
                </h3>
                <p className="mb-4">
                  Neem contact met ons op voor direct advies of hulp van onze experts.
                </p>
                <Link
                  href="/contact"
                  className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
                >
                  Neem contact op
                </Link>
              </div>

              {/* Categorieën */}
              <div className="sticky top-20 bg-white shadow-md rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-4">Categorieën</h4>
                <ul>
                  {blog.categories?.map((category, index) => (
                    <li
                      key={index}
                      className="mb-2 text-gray-600 hover:text-blue-500 transition-all duration-300"
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gerelateerde Blogs */}
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h4 className="text-2xl font-bold text-blue-700 mb-6">Gerelateerde Blogs</h4>
                <ul className="space-y-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <li
                      key={relatedBlog.slug}
                      className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md p-4 transition-all"
                    >
                      <Link href={`/blogs/${relatedBlog.slug}`} className="flex items-center">
                        <div>
                          {relatedBlog.mainImage ? (
                            <Image
                              src={urlFor(relatedBlog.mainImage).url()}
                              alt={`${relatedBlog.title} - AD Loodgietersbedrijf Blog`}
                              width={100}
                              height={100}
                              className="w-full h-36 object-cover rounded-md mr-4"
                            />
                          ) : (
                            <div className="bg-gray-200 w-full h-36 flex items-center justify-center rounded-md mr-4">
                              <span className="text-gray-500 text-xs">Geen afbeelding</span>
                            </div>
                          )}
                          <h5 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                            {relatedBlog.title}
                          </h5>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Hoofdinhoud */}
            <div className="lg:w-3/4">
              <article
                className="bg-white shadow-md rounded-lg p-8"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <h1 className="text-3xl font-bold text-gray-800 mb-6" itemProp="headline">
                  {blog.title}
                </h1>
                {blog.mainImage && (
                  <Image
                    src={urlFor(blog.mainImage).url()}
                    alt={`${blog.title} - Afbeelding`}
                    width={800}
                    height={400}
                    className="rounded-lg mb-6"
                    itemProp="image"
                  />
                )}
                <PortableText
                  value={blog.body}
                  components={PortableTextComponents}
                />
                <p className="text-sm text-gray-500 mt-6">
                  Gepubliceerd op:{" "}
                  <time dateTime={blog.publishedAt} itemProp="datePublished">
                    {publishedDate}
                  </time>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
