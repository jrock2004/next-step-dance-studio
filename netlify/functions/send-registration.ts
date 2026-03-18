import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('send-registration: RESEND_API_KEY is not set')
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }

  try {
    const data = JSON.parse(event.body ?? '{}')
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
    } = data

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'noreply@thenextstepdance.com',
      to: process.env.TO_EMAIL ?? 'missy@thenextstepdance.com',
      replyTo: email,
      subject: `New registration — ${firstName} ${lastName}`,
      html: `
        <h2>New Student Registration</h2>

        <h3>Student Information</h3>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Age</strong></td><td>${age}</td></tr>
          <tr><td><strong>Birthday</strong></td><td>${birthday}</td></tr>
          <tr><td><strong>Parent / Guardian</strong></td><td>${parentOrGuardian}</td></tr>
        </table>

        <h3>Address</h3>
        <p>${homeAddress}<br>${homeCity}, ${homeState} ${homeZip}</p>

        <h3>Contact</h3>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Phone</strong></td><td>${homePhone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        </table>

        <h3>Classes Selected</h3>
        <p>${classes}</p>

        <h3>Signature</h3>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Signature</strong></td><td>${parentOrGuardianSignature}</td></tr>
          <tr><td><strong>Date</strong></td><td>${signatureDate}</td></tr>
        </table>
      `,
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-registration error:', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false }) }
  }
}
