import recitalContent from '../content/recital.json'

export type Senior = {
  name: string
  photo?: string | null
  bio?: string | null
  quote?: string | null
  classOf?: number
  yearsAtStudio?: number
  styles?: string[]
}

type RecitalData = {
  season: string
  dateTime: string | null
  venue: string | null
  tickets: {
    generalAdmission: string | null
    reservedSeating: string | null
    salesOpen: string | null
  }
  seniors: Senior[] | null
}

// Convert empty strings from CMS to null for "coming soon" handling
function nullIfEmpty(val: string | null | undefined): string | null {
  if (!val || val.trim() === '') return null
  return val
}

const raw = recitalContent as RecitalData

const recital: RecitalData = {
  ...raw,
  dateTime: nullIfEmpty(raw.dateTime),
  venue: nullIfEmpty(raw.venue),
  tickets: {
    generalAdmission: nullIfEmpty(raw.tickets.generalAdmission),
    reservedSeating: nullIfEmpty(raw.tickets.reservedSeating),
    salesOpen: nullIfEmpty(raw.tickets.salesOpen),
  },
}

export default recital
