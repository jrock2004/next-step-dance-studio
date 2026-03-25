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
  dateTime: 'Saturday, June 13, 2026 — Shows at 10:00 AM, 2:00 PM, and 6:00 PM',
  venue: 'Daniel Boone Performing Arts Center, Birdsboro, PA',
  tickets: {
    generalAdmission: '$18',
    reservedSeating: '$24',
    salesOpen: 'May 5, 2026',
  },
  seniors: [
    {
      name: 'Emma Thompson',
      classOf: 2026,
      yearsAtStudio: 12,
      quote: 'Next Step gave me more than dance — it gave me a second family and the confidence to keep going.',
      styles: ['ballet', 'lyrical'],
    },
    {
      name: 'Sophia Martinez',
      classOf: 2026,
      yearsAtStudio: 8,
      quote: 'Every class, every rehearsal, every performance has shaped who I am. I will carry this with me always.',
      styles: ['jazz', 'tap'],
    },
    {
      name: 'Avery Johnson',
      classOf: 2026,
      yearsAtStudio: 10,
      quote: 'Dancing here taught me that hard work and heart can take you anywhere.',
      styles: ['hip-hop', 'jazz'],
    },
    {
      name: 'Grace Chen',
      classOf: 2026,
      yearsAtStudio: 11,
      quote: 'Miss Missy always believed in me even when I didn\'t believe in myself. I am so grateful for every year.',
      styles: ['ballet', 'acrobatics'],
    },
    {
      name: 'Lily Parker',
      classOf: 2026,
      yearsAtStudio: 9,
      quote: 'The stage feels like home. I will miss this place more than words can say.',
      styles: ['tap', 'lyrical'],
    },
  ],
}

export default recital
