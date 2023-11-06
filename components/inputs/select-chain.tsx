import { Chain } from "@/lib/types"


interface BaseSelectProps {
  label: string
  value: string
  options: Chain[]
  onChange: (chain: Chain) => void
}

export default function SelectChain({ value, label, options, onChange }: BaseSelectProps) {
  const handleOnSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const chainName = e.target.value

    const chain = options.find((c) => c.name === chainName)
    if (!chain) throw new Error(`Chain not found. Got ${chainName} as chain name which wasn't a know option.`)
    onChange(chain)
  }

  return (
    <main>
      <label htmlFor="base-select" className="block text-sm font-medium leading-6 text-gray-300">
        {label}
      </label>
      <div className="mt-2">
        <select
          id="base-select"
          name="base-select"
          value={value}
          autoComplete="base-select"
          onChange={handleOnSelectChange}
          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1
          ring-inset ring-light-white bg-egabee-gray focus:ring-2 focus:ring-inset
          focus:ring-light-white focus:shadow-xl sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value={''} disabled hidden>
            Select chain
          </option>
          {options.length ? options.map((c, index) => <option key={index}>{c.name}</option>) : null}
        </select>
      </div>
    </main>
  )
}
