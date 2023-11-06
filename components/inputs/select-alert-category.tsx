import { AlertCategory } from '@/lib/types'

interface Props {
  label: string
  value: string
  options: AlertCategory[]
  onChange: (value: string) => void
}

export default function SelectAlertCategory({ value, label, options, onChange }: Props) {
  const handleOnSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    const category = options.find((acc) => acc === e.target.value)

    if (!category) {
      throw new Error(`Alert category not found. Got ${category} as alery category name which wasn't a know option.`)
    }

    onChange(category)
  }

  return (
    <main>
      <label htmlFor="select-alert-category" className="block text-sm font-medium leading-6 text-gray-300">
        {label}
      </label>
      <div className="mt-2">
        <select
          id="select-alert-category"
          name="select-alert-category"
          value={value}
          autoComplete="select-alert-category"
          onChange={handleOnSelectChange}
          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1
          ring-inset ring-light-white bg-egabee-gray focus:ring-2 focus:ring-inset
          focus:ring-light-white focus:shadow-xl sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option selected disabled hidden>
            Select
          </option>
          {options.length ? options.map((acc, index) => <option key={index + 1}>{acc}</option>) : null}
        </select>
      </div>
    </main>
  )
}
