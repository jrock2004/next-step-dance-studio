// ─────────────────────────────────────────────────────────────────────────────
// Recital Program data — update this file each season.
//
// HOW TO UPDATE:
//   • Set `shows` to null to show "Program coming soon" on the program page.
//   • Each show needs an `id`, a `label` (shown on the tab), and `entries`.
//   • Entry types:
//       { type: 'section', label: 'First Half' }   — section header
//       { type: 'intermission' }                    — intermission bar
//       { type: 'performance', ... }                — a numbered number
//   • `styleId` must match a class `id` from src/data/classes.ts
//     Valid values: 'tap' | 'jazz' | 'ballet' | 'hip-hop' | 'lyrical' |
//                   'acrobatics' | 'combo' | 'creative-movement'
// ─────────────────────────────────────────────────────────────────────────────

export type PerformanceEntry = {
  type: 'performance'
  number: number
  title: string
  /** Must match a class `id` from src/data/classes.ts */
  styleId: string
  /** The performing class or group, e.g. "Junior Jazz", "Teen Tap Company" */
  group: string
  /** Dancer names shown below the group name */
  dancers?: string[]
  /** Optional short description displayed beneath the dancer names */
  description?: string
}

export type IntermissionEntry = {
  type: 'intermission'
}

export type SectionEntry = {
  type: 'section'
  label: string
}

export type ProgramEntry = PerformanceEntry | IntermissionEntry | SectionEntry

export type Show = {
  id: string
  /** Shown on the tab button, e.g. "Show 1 — 10:00 AM" */
  label: string
  entries: ProgramEntry[]
}

export type RecitalProgram = {
  title: string
  season: string
  /** null = display "Program coming soon" */
  shows: Show[] | null
}

const recitalProgram: RecitalProgram = {
  title: 'Spring Recital 2026',
  season: '2025–2026',
  shows: null,
}

export default recitalProgram
