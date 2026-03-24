import type { ReactElement } from 'react'
import type { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

type TInput<T extends FieldValues = FieldValues> = {
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
  const hasError = !!errors?.[id]
  return (
    <>
      <input
        aria-invalid={hasError}
        type={type || 'text'}
        id={id}
        className={`bg-white border border-gray-300 text-studio-dark text-sm rounded-lg focus:ring-studio-purple focus:border-studio-purple block w-full p-2.5 ${
          hasError && 'border-red-500'
        }`}
        inputMode={inputMode || 'text'}
        placeholder={placeholder}
        required={isRequired}
        {...register(id as Path<T>)}
      />
      {hasError && (
        <span className="text-red-500 text-sm ml-3">{String(errors?.[id]?.message ?? '')}</span>
      )}
    </>
  )
}
