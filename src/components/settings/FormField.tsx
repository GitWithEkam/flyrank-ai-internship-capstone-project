import type { ReactNode } from 'react'

type FormFieldProps = {
  id: string
  label: string
  description?: string
  error?: string
  children: ReactNode
}

export function FormField({
  id,
  label,
  description,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-200">
        {label}
      </label>
      {description && (
        <p id={`${id}-description`} className="text-sm text-slate-500">
          {description}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
