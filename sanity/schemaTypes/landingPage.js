export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landingspagina',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true, // Zorgt voor flexibele beeldplaatsing
      },
    },
    {
      name: 'highlight',
      type: 'text',
      title: 'Highlight',
      description: 'Een korte samenvatting of pakkende zin voor bovenaan de blog.',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'cta',
      type: 'object',
      title: 'Call-to-Action',
      fields: [
        { name: 'title', type: 'string', title: 'CTA Titel' },
        { name: 'description', type: 'text', title: 'CTA Beschrijving' },
        { name: 'buttonLabel', type: 'string', title: 'Knop Label' },
        {
          name: 'buttonLink',
          type: 'string', // Verander dit naar een string om tel-links toe te staan
          title: 'Knop Link',
          validation: (Rule) =>
            Rule.regex(
              /^(https?:\/\/|tel:|mailto:)/,
              { name: 'protocol', invert: false } // Zorg dat alleen specifieke protocollen worden geaccepteerd
            ).error(
              'De link moet beginnen met http://, https://, tel:, of mailto:'
            ),
        },
      ],
    },
    {
      name: 'location',
      type: 'string',
      title: 'Locatie',
      description: 'De locatie voor deze landingspagina (bijv. Utrecht, Amsterdam, etc.).',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    },
  ],
};
