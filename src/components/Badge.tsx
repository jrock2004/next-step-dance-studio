import type { ReactElement } from 'react'

export type TBadge = {
  title: string
}

export const Badge = ({ title }: TBadge): ReactElement => {
  return (
    <span className="border border-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
      {title}
    </span>
  )
}
