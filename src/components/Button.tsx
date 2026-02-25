import type { ReactElement } from 'react'

export type TButton = {
  type?: 'submit' | 'reset' | 'button' | undefined
  text: string
  isDisabled?: boolean
}

export const Button = ({ type, text, isDisabled = false }: TButton): ReactElement => {
  return (
    <button
      type={type || 'button'}
      className="text-slate-900 bg-pink-400 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}
