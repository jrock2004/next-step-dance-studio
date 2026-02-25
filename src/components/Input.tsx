import type { ReactElement } from 'react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export type TInput = {
  type?: string
  id: string
  placeholder?: string
  isRequired?: boolean
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'url' | 'search' | 'none' | undefined
  register: UseFormRegister<any>
  errors?: FieldErrors<any>
}

export const Input = ({
  type,
  id,
  placeholder,
  inputMode,
  isRequired = false,
  register,
  errors,
}: TInput): ReactElement => {
  return (
    <>
      <input
        aria-invalid={!!errors && !!errors[id]}
        type={type || 'text'}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          !!errors && !!errors[id] && 'border-red-500'
        }`}
        inputMode={inputMode || 'text'}
        placeholder={placeholder}
        required={isRequired}
        {...register(`${id}`)}
      />
      {errors && errors[id] && (
        <span className="text-red-500 text-sm ml-3">{String(errors[id]?.message || '')}</span>
      )}
    </>
  )
}
