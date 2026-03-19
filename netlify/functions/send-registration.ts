import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'
import { escapeHtml, RegistrationSchema } from './_utils'

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

  const {
    firstName,
    lastName,
    age,
    birthday,
    parentOrGuardian,
    homeAddress,
    homeCity,
    homeState,
    homeZip,
    homePhone,
    email,
    classes,
    parentOrGuardianSignature,
    signatureDate,
  } = result.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'noreply@thenextstepdance.com',
      to: process.env.TO_EMAIL ?? 'missy@thenextstepdance.com',
      replyTo: email,
      subject: `New registration — ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
      html: `
        <h2>New Student Registration</h2>

        <h3>Student Information</h3>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
          <tr><td><strong>Age</strong></td><td>${escapeHtml(age)}</td></tr>
          <tr><td><strong>Birthday</strong></td><td>${escapeHtml(birthday)}</td></tr>
          <tr><td><strong>Parent / Guardian</strong></td><td>${escapeHtml(parentOrGuardian)}</td></tr>
        </table>

        <h3>Address</h3>
        <p>${escapeHtml(homeAddress)}<br>${escapeHtml(homeCity)}, ${escapeHtml(homeState)} ${escapeHtml(homeZip)}</p>

        <h3>Contact</h3>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(homePhone)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        </table>

        <h3>Classes Selected</h3>
        <p>${escapeHtml(classes)}</p>

        <h3>Signature</h3>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Signature</strong></td><td>${escapeHtml(parentOrGuardianSignature)}</td></tr>
          <tr><td><strong>Date</strong></td><td>${escapeHtml(signatureDate)}</td></tr>
        </table>
      `,
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-registration error:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }
}
