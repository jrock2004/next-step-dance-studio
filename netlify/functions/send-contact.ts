import type { Handler } from "@netlify/functions";
import { Resend } from "resend";
import { ContactSchema } from "../../shared/contact.schema";
import { buildContactEmail } from "../../shared/email-html";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('send-contact: RESEND_API_KEY is not set')
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }

  let body: unknown
  try {
    body = JSON.parse(event.body ?? '{}')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) }
  }

  const result = ContactSchema.safeParse(body)
  if (!result.success) {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) }
  }

  const { name, email } = result.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'noreply@thenextstepdance.com',
      to: process.env.TO_EMAIL ?? 'missy@thenextstepdance.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: buildContactEmail(result.data),
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-contact error:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }
}
