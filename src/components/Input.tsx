import type { ReactElement } from 'react'
import type { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

type TInput<T extends FieldValues = FieldValues> = {
  type?: string
  id: string
  placeholder?: string
  isRequired?: boolean
  phone?: boolean
  inputMode?: 'text' | 'numeric' | 'tel' | 'email' | 'url' | 'search' | 'none' | undefined
  min?: string
  max?: string
  register: UseFormRegister<T>
  errors?: FieldErrors<T>
}

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length < 4) return digits.length ? '(' + digits : ''
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export const Input = <T extends FieldValues = FieldValues>({
  type,
  id,
  placeholder,
  inputMode,
  isRequired = false,
  phone = false,
  min,
  max,
  register,
  errors,
}: TInput<T>): ReactElement => {
  const hasError = !!errors?.[id]
  const { onChange: rhfOnChange, ...registration } = register(id as Path<T>)

  const handleChange = phone
    ? (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = formatPhoneNumber(e.target.value)
        return rhfOnChange(e)
      }
    : rhfOnChange

  return (
    <>
      <input
        aria-invalid={hasError}
        type={type || 'text'}
        id={id}
        className={`bg-white border border-gray-300 text-studio-dark text-sm rounded-lg focus:ring-studio-purple focus:border-studio-purple block w-full p-2.5 ${
          hasError && 'border-red-500'
        }`}
        inputMode={phone ? 'tel' : inputMode || 'text'}
        placeholder={placeholder}
        required={isRequired}
        min={min}
        max={max}
        onChange={handleChange}
        {...registration}
      />
      {hasError && (
        <span className="text-red-500 text-sm ml-3">{String(errors?.[id]?.message ?? '')}</span>
      )}
    </>
  )
}
