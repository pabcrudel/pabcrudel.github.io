// Resume schema source: https://jsonresume.org/schema/

import { z, defineCollection, reference } from "astro:content";

export const collections = {
  resume: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      label: z.string(),
      email: z.string().email(),
      location: z.object({
        city: z.string(),
        country: z.string(),
      }),
      socialMediaLinks: z.array(reference("socialMediaLink")),
      works: z.array(reference("work")),
      education: z.array(reference("education")),
      skills: z.array(z.string()),
      languages: z.array(reference("language")),
      projects: z.array(reference("project")),
    }),
  }),
  socialMediaLink: defineCollection({
    type: "data",
    schema: z.object({
      network: z.string(),
      username: z.string(),
      url: z.string().url(),
    }),
  }),
  work: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      position: z.string(),
      url: z.string().url(),
      startDate: z.date(),
      endDate: z.date(),
      summary: z.string().optional(),
      highlights: z.array(z.string()).optional(),
    }),
  }),
  education: defineCollection({
    type: "data",
    schema: z.object({
      institution: z.string(),
      url: z.string().url(),
      area: z.string(),
      studyType: z.string(),
      startDate: z.date(),
      endDate: z.date(),
    }),
  }),
  language: defineCollection({
    type: "data",
    schema: z.object({
      language: z.string(),
      level: z.string(),
    }),
  }),
  project: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      description: z.string(),
      highlights: z.array(z.string()),
      url: z.string().url(),
    }),
  }),
};
