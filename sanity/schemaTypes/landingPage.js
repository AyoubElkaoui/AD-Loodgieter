import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'landingPage',
  title: 'Landingspagina',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required().max(60)
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO-titel voor zoekmachines (50-60 tekens)',
      validation: Rule => Rule.required().max(60)
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO-beschrijving (max. 160 tekens)',
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'region',
      title: 'Regio',
      type: 'string',
      description: 'Bijv. Maarssen, Breukelen, Utrecht',
    }),
    defineField({
      name: 'services',
      title: 'Gerelateerde Diensten',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      description: 'Koppel deze landingspagina aan specifieke diensten.',
    }),
    defineField({
      name: 'content',
      title: 'Pagina Inhoud',
      type: 'blockContent',
      description: 'Hoofdinhoud van de pagina, inclusief tekst, afbeeldingen en links.',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-To-Action Tekst',
      type: 'string',
      description: 'Bijv. "Bel ons nu voor een offerte!"',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'Call-To-Action Link',
      type: 'url',
      description: 'Bijv. een link naar je contactpagina of WhatsApp',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Uitgelichte Afbeelding',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publicatiedatum',
      type: 'datetime',
      description: 'Voor gestructureerde data en Google-indexering',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'region',
      media: 'featuredImage',
    },
  },
});
