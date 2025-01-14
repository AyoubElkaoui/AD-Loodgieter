import { getBlogs, urlFor } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogIndex() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Introductietekst */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welkom bij onze Blogs</h1>
        <p className="text-lg text-gray-600">
          Ontdek een breed scala aan onderwerpen, van loodgietertips en gidsen tot interessante inzichten over ons
          vakgebied. Laat je inspireren en blijf op de hoogte van de laatste ontwikkelingen!
        </p>
      </div>

      {/* Blog Lijst */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug.current}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Afbeelding */}
            {blog.image ? (
              <Image
                src={urlFor(blog.image).url()}
                alt={blog.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
            ) : (
              <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Geen afbeelding beschikbaar</span>
              </div>
            )}

            {/* Blog Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.content ? blog.content[0]?.children[0]?.text || 'Geen inhoud beschikbaar' : 'Geen inhoud beschikbaar'}
              </p>
              <Link href={`/blogs/${blog.slug.current}`}>
                <span className="text-blue-500 font-semibold hover:underline">Lees meer →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
