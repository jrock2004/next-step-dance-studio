import { z } from 'zod'

export function escapeHtml(str: unknown): string {
  if (str == null) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(254),
  phone: z.string().min(1).max(30),
  message: z.string().min(1).max(5000),
  newsletter: z.boolean().optional(),
})

export const RegistrationSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  age: z.coerce.number().min(2).max(18),
  birthday: z.string().min(1),
  parentOrGuardian: z.string().min(1).max(200),
  homeAddress: z.string().min(1).max(300),
  homeCity: z.string().min(1).max(100),
  homeState: z.string().min(1).max(50),
  homeZip: z.string().regex(/^\d{5}(-\d{4})?$/),
  homePhone: z.string().min(1).max(30),
  email: z.string().email().max(254),
  classes: z.string().max(500),
  parentOrGuardianSignature: z.string().min(1).max(200),
  signatureDate: z.string().min(1),
})
