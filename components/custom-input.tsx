import { FieldHookConfig, useField } from 'formik'
import clsx from 'clsx'

export type InputPropsType = { label: string } & FieldHookConfig<string> &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.ClassAttributes<HTMLInputElement>

export default function CustomInput({ label, ...props }: InputPropsType) {
  const [field, meta] = useField(props)
  return (
    <>
      <div>
        <label>{label}</label>
      </div>
      <div
        className={clsx(`rounded bg-dark-gray border border-egabee-gray-10
      hover:border-light-yellow focus-within:border-[1px] focus-within:border-light-yellow`)}
      >
        <div className="flex justify-center items-center rounded bg-dark-gray h-12 mx-3">
          <input
            {...field}
            {...props}
            className={clsx(
              'text-[#9A999F] w-full h-fit bg-dark-gray border-0 hover:ring-0 focus:outline-none focus:ring-0',
              meta.touched && meta.error ? 'border-red-500' : ''
            )}
          />
        </div>
      </div>

      {meta.error && meta.touched && <div className="text-red-500 text-xs">{meta.error}</div>}
    </>
  )
}
