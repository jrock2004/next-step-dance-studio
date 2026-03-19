import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'
import { buildRegistrationEmail, RegistrationSchema } from './_utils'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('send-registration: RESEND_API_KEY is not set')
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }

  let body: unknown
  try {
    body = JSON.parse(event.body ?? '{}')
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) }
  }

  const result = RegistrationSchema.safeParse(body)
  if (!result.success) {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) }
  }

  const { firstName, lastName, email } = result.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'noreply@thenextstepdance.com',
      to: process.env.TO_EMAIL ?? 'missy@thenextstepdance.com',
      replyTo: email,
      subject: `New registration — ${firstName} ${lastName}`,
      html: buildRegistrationEmail(result.data),
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-registration error:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }
}
