import { AccountType } from "@/lib/types"


interface Props {
  label: string
  value: string
  options: AccountType[]
  onChange: (value: string) => void
}

export default function SelectTransactionType({ value, label, options, onChange }: Props) {
  const handleOnSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()

    const accountType = options.find((acc) => acc === e.target.value)
    if (!accountType) throw new Error(
      `Account type not found. Got ${accountType} as account type name which wasn't a know option.`
    )
    onChange(accountType)
  }

  return (
    <main>
      <label htmlFor="select-transaction-type" className="block text-sm font-medium leading-6 text-gray-300">
        {label}
      </label>
      <div className="mt-2">
        <select
          id="select-transaction-type"
          name="select-transaction-type"
          value={value}
          autoComplete="select-transaction-type"
          onChange={handleOnSelectChange}
          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1
          ring-inset ring-light-white bg-egabee-gray focus:ring-2 focus:ring-inset
          focus:ring-light-white focus:shadow-xl sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value={''} disabled hidden>
            Select account type
          </option>
          {options.length ? options.map((acc, index) => <option key={index}>{acc}</option>) : null}
        </select>
      </div>
    </main>
  )
}
