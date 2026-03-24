import type { ReactElement } from 'react'
import type { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

type TCheckbox<T extends FieldValues = FieldValues> = {
  id: string
  label: string
  isRequired?: boolean
  register: UseFormRegister<T>
  errors?: FieldErrors<T>
}

export const Checkbox = <T extends FieldValues = FieldValues>({ id, label, isRequired = false, register, errors }: TCheckbox<T>): ReactElement => {
  const error = errors?.[id]
  return (
    <div>
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          value=""
          className="w-6 h-6 text-pink-400 accent-pink-400 rounded border-gray-300 focus:ring-pink-500 focus:ring-2"
          required={isRequired}
          {...register(id as Path<T>)}
        />
        <label htmlFor={id} className="ml-2 text-sm text-studio-dark">
          {label}
        </label>
      </div>
      {error && (
        <span className="text-red-500 text-sm ml-3">{String(error.message ?? '')}</span>
      )}
    </div>
  )
}
