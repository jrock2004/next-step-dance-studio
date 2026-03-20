import type { z } from "zod";
import { ContactSchema } from "./contact.schema";
import { RegistrationApiSchema } from "./registration.schema";

export function escapeHtml(str: unknown): string {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type ContactPayload = z.infer<typeof ContactSchema>;
type RegistrationPayload = z.infer<typeof RegistrationApiSchema>;

// Reusable style strings for email client compatibility
const LBL =
  "padding:9px 10px;color:#71717a;font-size:12px;font-weight:600;width:140px;vertical-align:top;font-family:Arial,sans-serif;";
const VAL =
  "padding:9px 10px;color:#111827;font-size:14px;vertical-align:top;font-family:Arial,sans-serif;";
const LBLA = LBL + "background:#faf9ff;";
const VALA = VAL + "background:#faf9ff;";
const H = (first = false) =>
  `font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:#6b21a8;border-bottom:1px solid #ede9fe;padding-bottom:6px;margin:${first ? "0" : "24px"} 0 12px;font-family:Arial,sans-serif;`;

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
</html>`;
}

export function buildRegistrationEmail(d: RegistrationPayload): string {
  const e = (v: unknown) => escapeHtml(v);
  const body = `
    <p style="${H(true)}">Student Information</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Name</td><td style="${VAL}">${e(d.firstName)} ${e(d.lastName)}</td></tr>
      <tr><td style="${LBLA}">Age</td><td style="${VALA}">${e(d.age)}</td></tr>
      <tr><td style="${LBL}">Birthday</td><td style="${VAL}">${e(d.birthday)}</td></tr>
      <tr><td style="${LBLA}">Parent / Guardian</td><td style="${VALA}">${e(d.parentOrGuardian)}</td></tr>
    </table>

    <p style="${H()}">Address</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Street</td><td style="${VAL}">${e(d.homeAddress)}</td></tr>
      <tr><td style="${LBLA}">City / State / Zip</td><td style="${VALA}">${e(d.homeCity)}, ${e(d.homeState)} ${e(d.homeZip)}</td></tr>
    </table>

    <p style="${H()}">Contact</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Phone</td><td style="${VAL}">${e(d.homePhone)}</td></tr>
      <tr><td style="${LBLA}">Email</td><td style="${VALA}">${e(d.email)}</td></tr>
    </table>

    <p style="${H()}">Classes Selected</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Classes</td><td style="${VAL}">${e(d.classes)}</td></tr>
    </table>

    <p style="${H()}">Signature</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Signature</td><td style="${VAL}">${e(d.parentOrGuardianSignature)}</td></tr>
      <tr><td style="${LBLA}">Date</td><td style="${VALA}">${e(d.signatureDate)}</td></tr>
    </table>
  `;
  return emailShell("New Student Registration", body);
}

export function buildContactEmail(d: ContactPayload): string {
  const e = (v: unknown) => escapeHtml(v);
  const body = `
    <p style="${H(true)}">Sender</p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="${LBL}">Name</td><td style="${VAL}">${e(d.name)}</td></tr>
      <tr><td style="${LBLA}">Email</td><td style="${VALA}">${e(d.email)}</td></tr>
      <tr><td style="${LBL}">Phone</td><td style="${VAL}">${e(d.phone)}</td></tr>
      <tr><td style="${LBLA}">Newsletter</td><td style="${VALA}">${d.newsletter ? "Yes" : "No"}</td></tr>
    </table>

    <p style="${H()}">Message</p>
    <p style="background:#faf9ff;border-left:3px solid #a855f7;padding:14px 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#374151;white-space:pre-wrap;margin:0;">${e(d.message)}</p>
  `;
  return emailShell("New Contact Form Submission", body);
}
