// ─────────────────────────────────────────────────────────────────────────────
// Recital data — update this file each season.
//
// HOW TO UPDATE:
//   • Replace null with the actual text once details are confirmed.
//   • Set a value back to null to show a "coming soon" placeholder.
//   • To add a senior, copy one of the example objects into the `seniors` array.
// ─────────────────────────────────────────────────────────────────────────────

export type Senior = {
  name: string
  /** Optional URL to a photo */
  photo?: string
  /** A short bio about the senior (optional) */
  bio?: string
  /** A personal quote from the senior (optional — shown instead of bio if present) */
  quote?: string
  /** Graduation year, e.g. 2026 */
  classOf?: number
  /** Number of years they've been at the studio */
  yearsAtStudio?: number
  /** Class IDs from src/data/classes.ts, e.g. ['tap', 'jazz'] */
  styles?: string[]
}

type RecitalData = {
  /** Season label shown to users, e.g. "2025–2026" */
  season: string
  /** Date and time text, e.g. "Saturday, June 7, 2025 at 2:00 PM". null = coming soon */
  dateTime: string | null
  /** Venue name and address. null = coming soon */
  venue: string | null
  tickets: {
    /** e.g. "$15". null = TBA */
    generalAdmission: string | null
    /** e.g. "$20". null = TBA */
    reservedSeating: string | null
    /** e.g. "May 1, 2025". null = TBA */
    salesOpen: string | null
  }
  /** List of graduating seniors. null = section shows "coming soon" */
  seniors: Senior[] | null
}

const recital: RecitalData = {
  season: '2025–2026',
  dateTime: null,
  venue: null,
  tickets: {
    generalAdmission: null,
    reservedSeating: null,
    salesOpen: null,
  },
  seniors: null,
}

export default recital
