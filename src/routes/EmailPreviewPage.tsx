import { useState, type ReactElement } from "react";
import type { z } from "zod";
import { ContactSchema } from "@shared/contact.schema";
import { RegistrationApiSchema } from "@shared/registration.schema";
import { buildContactEmail, buildRegistrationEmail } from "@shared/email-html";

const SAMPLE_REGISTRATION: z.infer<typeof RegistrationApiSchema> = {
  firstName: "Amanda",
  lastName: "Doe",
  age: 8,
  birthday: "2016-03-12",
  parentOrGuardian: "Jane Doe",
  homeAddress: "125 Main St",
  homeCity: "Birdsboro",
  homeState: "PA",
  homeZip: "19508",
  homePhone: "(610) 555-1212",
  email: "jane.doe@example.com",
  classes: "Ballet, Jazz, Tap",
  parentOrGuardianSignature: "Jane Doe",
  signatureDate: "2026-03-18",
};

const SAMPLE_CONTACT: z.infer<typeof ContactSchema> = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "(610) 555-1212",
  message:
    "Hi! I was wondering if you still have spots open for the fall session. My daughter is 7 and has never taken dance before. Looking forward to hearing from you!",
  newsletter: true,
};

type Tab = "registration" | "contact";

function EmailPreviewPage(): ReactElement {
  const [tab, setTab] = useState<Tab>("registration");

  const html =
    tab === "registration"
      ? buildRegistrationEmail(SAMPLE_REGISTRATION)
      : buildContactEmail(SAMPLE_CONTACT);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="border-b border-yellow-300 bg-yellow-100 px-6 py-3 text-sm font-medium text-yellow-800">
        Local dev — email HTML matches production templates in <code className="font-mono">shared/email-html.ts</code>.
      </div>

      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="mb-6 text-xl font-bold text-gray-800">Email Preview</h1>

        <div className="mb-4 flex gap-2">
          {(["registration", "contact"] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
              }}
              className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                tab === t
                  ? "bg-studio-purple text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-studio-purple"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-2 font-mono text-xs text-gray-500">
            {tab === "registration"
              ? `Subject: New registration — ${SAMPLE_REGISTRATION.firstName} ${SAMPLE_REGISTRATION.lastName}`
              : `Subject: New message from ${SAMPLE_CONTACT.name}`}
          </div>
          <iframe
            title="Email preview"
            srcDoc={html}
            className="w-full"
            style={{ height: "620px", border: "none" }}
          />
        </div>

        <details className="mt-4">
          <summary className="cursor-pointer select-none text-sm text-gray-500">View raw HTML</summary>
          <pre className="mt-2 max-h-64 overflow-auto rounded-xl bg-gray-900 p-4 text-xs text-green-400">
            {html}
          </pre>
        </details>
      </div>
    </div>
  );
}

export default EmailPreviewPage;
