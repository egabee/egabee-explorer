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
        `flex items-center justify-center cursor-pointer h-10 text-sm font-semibold leading-6 text-light-yellow
          border border-light-yellow rounded hover:bg-light-yellow hover:bg-opacity-25
          duration-100`,
        width ?? width
      )}
    >
      <ArrowLeft />
    </div>
  )
}
