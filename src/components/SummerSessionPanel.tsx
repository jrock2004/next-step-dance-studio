import type { ReactElement } from "react";
import type { SummerSession } from "@/data/summerSession";

type Props = {
  session: SummerSession;
};

export function SummerSessionPanel({ session }: Props): ReactElement {
  return (
    <div className="rounded-2xl bg-studio-purple text-white p-6 shadow-sm sm:p-8">
      <div className="mb-5">
        <p className="text-pink-300 text-sm font-semibold uppercase tracking-widest mb-1">
          Now Open
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug">
          {session.headline}
        </h2>
        <p className="mt-2 text-purple-300 leading-relaxed">{session.tagline}</p>
      </div>

      <div className="mb-5">
        <div className="bg-white/10 rounded-xl px-5 py-3 inline-block">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-0.5">
            Session Dates
          </p>
          <p className="font-semibold text-white">
            {session.sessionStart} – {session.sessionEnd}
          </p>
          {session.closedWeekNote && (
            <p className="text-xs text-purple-300 mt-0.5">{session.closedWeekNote}</p>
          )}
        </div>
      </div>

      <p className="text-sm text-pink-300 font-semibold mb-3">{session.pricingNote}</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-2">
            Program Pricing
          </p>
          <ul className="divide-y divide-white/10">
            {session.classPricing.map((tier) => (
              <li key={tier.label} className="flex justify-between py-2 text-sm">
                <span className="text-purple-200">{tier.label}</span>
                <span className="font-semibold text-white">{tier.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {session.lessonOptions.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-2">
              Private Lessons
            </p>
            <ul className="divide-y divide-white/10">
              {session.lessonOptions.map((option) => (
                <li key={option.label} className="flex justify-between py-2 text-sm">
                  <span className="text-purple-200">{option.label}</span>
                  <span className="font-semibold text-white">{option.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
