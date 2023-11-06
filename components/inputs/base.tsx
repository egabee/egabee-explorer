interface BaseInputProps {
  label: string
  type?: string
  placeHolder?: string
  onChangeTitle: (title: string) => void
}

export default function BaseInput({ placeHolder, label, onChangeTitle, type }: BaseInputProps) {
  placeHolder = placeHolder || ''
  type = type || 'text'
  return (
    <main>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={label}
          name="title"
          type={type}
          placeholder={placeHolder}
          onChange={(e) => onChangeTitle(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset
                   ring-light-white bg-egabee-gray placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset focus:ring-light-white focus:shadow-xl
                    sm:text-sm sm:leading-6"
        />
      </div>
    </main>
  )
}
