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

// export const previewClient = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false, // Gebruik nooit CDN voor previews
//   token: process.env.SANITY_API_TOKEN, // Voeg je Sanity API-token toe
// });
// export const usePreviewSubscription = createPreviewSubscriptionHook(previewClient);


export async function getBlogs() {
  const query = `*[_type == "blog"]{title, slug, content, publishedAt, image}`;
  return await client.fetch(query);
}

export async function getLandingPage(slug) {
  const query = `*[_type == "landingPage" && slug.current == $slug][0]{
    title,
    content[]{..., _type == "image" => {"imageUrl": asset->url}},
    ctaText,
    ctaUrl,
    "featuredImage": featuredImage.asset->url,
    services[]->{
      title,
      slug
    }
  }`;
  return await client.fetch(query, { slug });
}

