import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'; // Voeg deze import toe

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Voeg de urlFor functie toe
const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getBlogs() {
  const query = `*[_type == "blog"]{title, slug, content, publishedAt, image}`;
  return await client.fetch(query);
}

