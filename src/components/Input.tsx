import type { ReactElement } from 'react'
import type { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

export type TInput<T extends FieldValues = FieldValues> = {
  type?: string
  id: string
  placeholder?: string
  isRequired?: boolean
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'url' | 'search' | 'none' | undefined
  register: UseFormRegister<T>
  errors?: FieldErrors<T>
}

export const Input = <T extends FieldValues = FieldValues>({
  type,
  id,
  placeholder,
  inputMode,
  isRequired = false,
  register,
  errors,
}: TInput<T>): ReactElement => {
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
        {...register(id as Path<T>)}
      />
      {errors && errors[id] && (
        <span className="text-red-500 text-sm ml-3">{String(errors[id]?.message || '')}</span>
      )}
    </>
  )
}
