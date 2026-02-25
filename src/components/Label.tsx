import type { ReactElement, ReactNode } from 'react'

export type TLabel = {
  children: ReactNode
  htmlFor: string
  isRequired?: boolean
}

export const Label = ({ children, isRequired, ...rest }: TLabel): ReactElement => {
  return (
    <label className="block mb-2 text-sm text-gray-600" {...rest}>
      {children} {isRequired && <span className="text-red-600">*</span>}
    </label>
  )
}
