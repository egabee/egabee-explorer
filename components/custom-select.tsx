import clsx from 'clsx'
import { FieldHookConfig, useField } from 'formik'

export type SelectPropsType = { label: string; className?: string } & FieldHookConfig<string> &
  React.SelectHTMLAttributes<HTMLSelectElement> &
  React.ClassAttributes<HTMLSelectElement>

export default function CustomSelect({ label, className, ...props }: SelectPropsType) {
  const [field, meta] = useField(props)
  return (
    <>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <select
          className={clsx(
            `border border-egabee-gray-10 bg-dark-gray w-full rounded 
          focus:outline-none focus:border-light-yellow focus:ring-2 focus:ring-light-yellow focus:shadow-md
        focus:shadow-dark-gray h-12 text-sm
        hover:border-light-yellow`,
            className
          )}
          {...field}
          {...props}
        ></select>
      </div>
      {meta.error && meta.touched && <div className="text-red-500">{meta.error}</div>}
    </>
  )
}
