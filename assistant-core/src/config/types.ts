import { z } from "zod";

export const LeadFieldSchema = z.object({
  key: z.string(),
  label: z.string(),
  required: z.boolean(),
});

export const AssistantConfigSchema = z.object({
  name: z.string().min(1),
  brandTone: z.enum(["formal", "casual", "friendly"]),
  systemPrompt: z.string().min(10),
  escalationPhrase: z.string().min(3),
  fallbackMessage: z.string().min(3),
  language: z.string().default("en"),
  maxTurns: z.number().int().min(2).max(50).default(20),
  leadFields: z.array(LeadFieldSchema),
});

export type AssistantConfig = z.infer<typeof AssistantConfigSchema>;
export type LeadField = z.infer<typeof LeadFieldSchema>;
