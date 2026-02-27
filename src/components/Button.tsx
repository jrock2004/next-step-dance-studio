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
      className="bg-studio-pink text-white hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-semibold rounded-full text-sm w-full sm:w-auto px-7 py-3 text-center transition-colors disabled:opacity-50"
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}
