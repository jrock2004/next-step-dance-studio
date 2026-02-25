import type { ReactElement, ReactNode } from 'react'

export type TPageTitle = {
  children: ReactNode
}

export const PageTitle = ({ children }: TPageTitle): ReactElement => {
  return <h2 className="text-2xl tracking-wider mb-8">{children}</h2>
}
