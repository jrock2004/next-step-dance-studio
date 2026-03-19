import { useState, type ReactElement } from 'react'

const SAMPLE_REGISTRATION = {
  firstName: 'Amanda',
  lastName: 'Doe',
  age: 8,
  birthday: '2016-03-12',
  parentOrGuardian: 'Jane Doe',
  homeAddress: '125 Main St',
  homeCity: 'Birdsboro',
  homeState: 'PA',
  homeZip: '19508',
  homePhone: '(610) 555-1212',
  email: 'jane.doe@example.com',
  classes: 'Ballet, Jazz, Tap',
  parentOrGuardianSignature: 'Jane Doe',
  signatureDate: '2026-03-18',
}

const SAMPLE_CONTACT = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  phone: '(610) 555-1212',
  message:
    'Hi! I was wondering if you still have spots open for the fall session. My daughter is 7 and has never taken dance before. Looking forward to hearing from you!',
  newsletter: true,
}

// Mirrors _utils.ts — keep in sync when changing the real templates
const LBL  = 'padding:9px 10px;color:#71717a;font-size:12px;font-weight:600;width:140px;vertical-align:top;font-family:Arial,sans-serif;'
const VAL  = 'padding:9px 10px;color:#111827;font-size:14px;vertical-align:top;font-family:Arial,sans-serif;'
const LBLA = LBL + 'background:#faf9ff;'
const VALA = VAL + 'background:#faf9ff;'
const H = (first = false) =>
  `font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:#6b21a8;border-bottom:1px solid #ede9fe;padding-bottom:6px;margin:${first ? '0' : '24px'} 0 12px;font-family:Arial,sans-serif;`

function emailShell(subtitle: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff;border-radius:8px;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2d0052;padding:28px 32px;text-align:center;border-radius:8px 8px 0 0;">
              <p style="margin:0;font-size:22px;font-weight:600;color:#ffffff;font-family:Georgia,'Times New Roman',serif;letter-spacing:0.5px;">Next Step Dance Studio</p>
              <p style="margin:6px 0 0;font-size:13px;color:#d8b4fe;font-family:Arial,sans-serif;">${subtitle}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f4f5;border-top:1px solid #e5e7eb;padding:20px 32px;text-align:center;font-family:Arial,sans-serif;font-size:12px;color:#9ca3af;line-height:1.6;border-radius:0 0 8px 8px;">
              Next Step Dance Studio &nbsp;&bull;&nbsp; Birdsboro, PA<br>
              <a href="tel:6105822111" style="color:#9ca3af;text-decoration:none;">(610) 582-2111</a>
              &nbsp;&bull;&nbsp;
              <a href="mailto:missy@thenextstepdance.com" style="color:#9ca3af;text-decoration:none;">missy@thenextstepdance.com</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildRegistrationHtml(d: typeof SAMPLE_REGISTRATION): string {
  const body = `
    <p style="${H(true)}">Student Information</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Name</td><td style="${VAL}">${d.firstName} ${d.lastName}</td></tr>
      <tr><td style="${LBLA}">Age</td><td style="${VALA}">${d.age}</td></tr>
      <tr><td style="${LBL}">Birthday</td><td style="${VAL}">${d.birthday}</td></tr>
      <tr><td style="${LBLA}">Parent / Guardian</td><td style="${VALA}">${d.parentOrGuardian}</td></tr>
    </table>

    <p style="${H()}">Address</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Street</td><td style="${VAL}">${d.homeAddress}</td></tr>
      <tr><td style="${LBLA}">City / State / Zip</td><td style="${VALA}">${d.homeCity}, ${d.homeState} ${d.homeZip}</td></tr>
    </table>

    <p style="${H()}">Contact</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Phone</td><td style="${VAL}">${d.homePhone}</td></tr>
      <tr><td style="${LBLA}">Email</td><td style="${VALA}">${d.email}</td></tr>
    </table>

    <p style="${H()}">Classes Selected</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Classes</td><td style="${VAL}">${d.classes}</td></tr>
    </table>

    <p style="${H()}">Signature</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Signature</td><td style="${VAL}">${d.parentOrGuardianSignature}</td></tr>
      <tr><td style="${LBLA}">Date</td><td style="${VALA}">${d.signatureDate}</td></tr>
    </table>
  `
  return emailShell('New Student Registration', body)
}

function buildContactHtml(d: typeof SAMPLE_CONTACT): string {
  const body = `
    <p style="${H(true)}">Sender</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Name</td><td style="${VAL}">${d.name}</td></tr>
      <tr><td style="${LBLA}">Email</td><td style="${VALA}">${d.email}</td></tr>
      <tr><td style="${LBL}">Phone</td><td style="${VAL}">${d.phone}</td></tr>
      <tr><td style="${LBLA}">Newsletter</td><td style="${VALA}">${d.newsletter ? 'Yes' : 'No'}</td></tr>
    </table>

    <p style="${H()}">Message</p>
    <p style="background:#faf9ff;border-left:3px solid #a855f7;padding:14px 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#374151;white-space:pre-wrap;margin:0;">${d.message}</p>
  `
  return emailShell('New Contact Form Submission', body)
}

type Tab = 'registration' | 'contact'

function EmailPreviewPage(): ReactElement {
  const [tab, setTab] = useState<Tab>('registration')

  const html =
    tab === 'registration'
      ? buildRegistrationHtml(SAMPLE_REGISTRATION)
      : buildContactHtml(SAMPLE_CONTACT)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-yellow-100 border-b border-yellow-300 px-6 py-3 text-sm text-yellow-800 font-medium">
        Dev only — email preview. Remove this route before going live.
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Email Preview</h1>

        <div className="flex gap-2 mb-4">
          {(['registration', 'contact'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                tab === t
                  ? 'bg-studio-purple text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-studio-purple'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 text-xs text-gray-500 font-mono">
            {tab === 'registration'
              ? `Subject: New registration — ${SAMPLE_REGISTRATION.firstName} ${SAMPLE_REGISTRATION.lastName}`
              : `Subject: New message from ${SAMPLE_CONTACT.name}`}
          </div>
          <iframe
            title="Email preview"
            srcDoc={html}
            className="w-full"
            style={{ height: '620px', border: 'none' }}
          />
        </div>

        <details className="mt-4">
          <summary className="text-sm text-gray-500 cursor-pointer select-none">
            View raw HTML
          </summary>
          <pre className="mt-2 bg-gray-900 text-green-400 text-xs rounded-xl p-4 overflow-auto max-h-64">
            {html}
          </pre>
        </details>
      </div>
    </div>
  )
}

export default EmailPreviewPage
