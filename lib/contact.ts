import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z.string().trim().min(7, "Please enter a valid phone number"),
  email: z
    .union([z.literal(""), z.string().trim().email("Please enter a valid email address")])
    .optional(),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
