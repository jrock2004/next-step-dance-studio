import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('send-contact: RESEND_API_KEY is not set')
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }

  try {
    const { name, email, phone, message, newsletter } = JSON.parse(event.body ?? '{}')

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'noreply@thenextstepdance.com',
      to: process.env.TO_EMAIL ?? 'missy@thenextstepdance.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Newsletter</strong></td><td>${newsletter ? 'Yes' : 'No'}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-contact error:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }
}
