import { forwardRef, type InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const fieldId = id ?? props.name
    const errorId = error ? `${fieldId}-error` : undefined

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={fieldId} className="text-sm font-medium text-ink">
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          className={`rounded-field border bg-white px-4 py-2.5 text-sm text-ink outline-offset-0 transition-colors placeholder:text-muted focus:outline focus:outline-3 focus:outline-brand-cyan disabled:cursor-not-allowed disabled:bg-surface-soft disabled:text-muted ${
            error ? 'border-error' : 'border-border-soft'
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-error">
            {error}
          </p>
        )}
      </div>
    )
  },
)
TextField.displayName = 'TextField'

export default TextField
