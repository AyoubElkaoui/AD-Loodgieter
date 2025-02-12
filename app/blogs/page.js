import { client, urlFor } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

const BlogPage = async () => {
  const blogs = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      categories[]->{
        title
      },
      publishedAt
    }
  `);

  return (
    <>
      {/* Blog Grid Start */}
      <section className="py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Onze Blogs
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug.current}
                itemScope
                itemType="https://schema.org/BlogPosting"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {/* Blog Afbeelding */}
                {blog.mainImage ? (
                  <Image
                    src={urlFor(blog.mainImage).url()}
                    alt={`${blog.title} - AD Loodgietersbedrijf Blog`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                    itemProp="image"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                    <span className="text-gray-500">Geen afbeelding beschikbaar</span>
                  </div>
                )}
                {/* Blog Content */}
                <div className="p-6">
                  <h2
                    className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors"
                    itemProp="headline"
                  >
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Gepubliceerd op:{" "}
                    <time dateTime={blog.publishedAt}>
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </time>
                  </p>
                  <div className="mb-4">
                    {blog.categories?.map((category, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2"
                        itemProp="keywords"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blogs/${blog.slug.current}`}>
                    <span className="text-blue-500 font-semibold hover:underline block">
                      Lees meer →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Grid End */}
    </>
  );
};

export default BlogPage;
