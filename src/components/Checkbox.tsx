import type { ReactElement } from 'react'
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export type TCheckbox<T extends FieldValues = FieldValues> = {
  id: string
  label: string
  isRequired?: boolean
  register: UseFormRegister<T>
}

export const Checkbox = <T extends FieldValues = FieldValues>({ id, label, isRequired = false, register }: TCheckbox<T>): ReactElement => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        value=""
        className="w-6 h-6 text-pink-400 accent-pink-400 rounded border-gray-300 focus:ring-pink-500 focus:ring-2"
        required={isRequired}
        {...register(id as Path<T>)}
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-900">
        {label}
      </label>
    </div>
  )
}
