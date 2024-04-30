import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'

interface Props {
  width?: string
  title: String
  onClick?: () => void
}

export default function GoBack({ title, onClick, width }: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `min-w-[50px] flex items-center justify-center cursor-pointer h-11 text-sm font-semibold leading-6 text-[#96ADC6]
          border border-[#96ADC6] border-opacity-50 rounded-lg hover:bg-brand hover:bg-opacity-25 duration-100`,
        width ?? width
      )}
    >
      <ArrowLeft size={16} />
    </div>
  )
}
