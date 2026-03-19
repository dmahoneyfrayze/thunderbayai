import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(['news', 'guides', 'playbooks', 'alerts']),
  vertical: z.enum(['contractors', 'home-services', 'automotive', 'restaurants', 'real-estate', 'nwo-businesses']),
  tags: z.array(z.string()).default([]),
  localRegion: z.enum(['Thunder Bay', 'Northwestern Ontario', 'Northern Ontario']),
  primaryPain: z.string(),
  secondaryPains: z.array(z.string()).default([]),
  ctaType: z.enum(['ai-audit', 'workflow-map', 'strategy-call', 'automation-system', 'see-what-you-can-automate']),
  frayzeOffer: z.string(),
  frayzeLinks: z.array(z.string()).min(2),
  internalLinks: z.array(z.string()).min(1),
  sourceType: z.enum(['signal', 'guide', 'playbook', 'alert']).default('guide'),
  sourceUrl: z.string().optional(),
  sourceName: z.string().optional(),
  qaLocalRelevance: z.number().min(0).max(10),
  qaOriginality: z.number().min(0).max(10),
  qaConversionReadiness: z.number().min(0).max(10),
  draft: z.boolean().default(true),
  featured: z.boolean().default(false),
  newsletterEligible: z.boolean().default(true),
  socialEligible: z.boolean().default(true)
});

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  draft: z.boolean().default(false)
});

export const collections = {
  news: defineCollection({ schema: articleSchema }),
  guides: defineCollection({ schema: articleSchema }),
  playbooks: defineCollection({ schema: articleSchema }),
  alerts: defineCollection({ schema: articleSchema }),
  pages: defineCollection({ schema: pageSchema })
};
