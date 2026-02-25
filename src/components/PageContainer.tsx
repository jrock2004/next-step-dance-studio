import type { ReactElement, ReactNode } from 'react'

export type TPageContainer = {
  children: ReactNode
}

export const PageContainer = ({ children }: TPageContainer): ReactElement => {
  return <div className="px-3 py-6 sm:p-12">{children}</div>
}
