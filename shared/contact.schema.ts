import { z } from "zod";

/** Shared by the contact form and `send-contact` Netlify function. */
export const ContactSchema = z.object({
  name: z.string().min(1, "Name can't be empty").max(200),
  email: z.string().email("Enter a valid email address").max(254),
  phone: z.string().min(1, "Phone is required").max(30),
  message: z.string().min(1, "Message can't be empty").max(5000),
  newsletter: z.boolean().optional(),
});
