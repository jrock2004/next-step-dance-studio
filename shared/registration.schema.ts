import { z } from "zod";

/** Payload accepted by `send-registration` (JSON body). */
export const RegistrationApiSchema = z.object({
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
  programTier: z.string().max(200).optional(),
  lessonAddOn: z.string().max(200).optional(),
  parentOrGuardianSignature: z.string().min(1).max(200),
  signatureDate: z.string().min(1),
});

const registrationFormBaseFields = {
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthday: z.coerce
    .date({ invalid_type_error: "Birthday is required" })
    .max(new Date(), "Birthday cannot be in the future")
    .refine((date) => {
      const minAge = new Date();
      minAge.setMonth(minAge.getMonth() - 30); // 2.5 years = 30 months
      return date <= minAge;
    }, "Student must be at least 2½ years old"),
  parentOrGuardian: z.string().min(1, "Parent or guardian name is required"),
  homeAddress: z.string().min(1, "Street address is required"),
  homeCity: z.string().min(1, "City is required"),
  homeState: z.string().min(1, "State is required"),
  homeZip: z.string().regex(/^\d{5}(-\d{4})?$/, "Enter a valid zip code"),
  homePhone: z.string().min(1, "Phone is required"),
  email: z.string().email("Enter a valid email address"),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
  programTier: z.string().optional(),
  lessonAddOn: z.string().optional(),
  parentOrGuardianSignature: z.string().min(1, "Signature is required"),
  signatureDate: z.coerce.date({ invalid_type_error: "Date is required" }),
};

/** Calculate age from a birthday string or Date, returning null if invalid. */
export function calculateAge(birthday: string | Date): number | null {
  const bday = birthday instanceof Date ? birthday : new Date(String(birthday));
  if (isNaN(bday.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - bday.getFullYear();
  const m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) age--;
  return age >= 0 ? age : null;
}

/** Client form schema: one optional boolean field per class id from `classes.ts`. */
export function buildRegistrationFormSchema(classIds: readonly string[]) {
  const classFields: Record<string, z.ZodOptional<z.ZodBoolean>> = {};
  for (const id of classIds) {
    classFields[id] = z.boolean().optional();
  }
  return z.object({
    ...registrationFormBaseFields,
    ...classFields,
  });
}
