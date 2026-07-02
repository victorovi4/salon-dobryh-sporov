import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { OPTIC_KEYS } from './config/voices';

// ===== Essays =====
const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    style: z.string(),
    styleLabel: z.string(),
    topic: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    optic: z.enum(OPTIC_KEYS).optional(),
    audioUrl: z.string().url().optional(),
    durationSec: z.number().int().positive().optional(),
  }),
});

// ===== Topics =====
const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    whyChosen: z.string(),
    messageCount: z.number(),
    participantCount: z.number(),
    periodEnd: z.string(),
    conflictLines: z.array(z.object({
      side: z.string(),
      position: z.string(),
    })),
  }),
});

// ===== Styles =====
const styles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/styles' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    bestFor: z.string(),
    looksFor: z.string(),
    signals: z.array(z.string()).default([]),
    conflict: z.string(),
    output: z.string(),
    avoid: z.array(z.string()).default([]),
    examples: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { essays, topics, styles };
