import { cn } from '@/lib/utils'
import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'

interface Props {
  className: string
  title: String
  onClick?: () => void
}

export default function GoBackDisabled({ title, onClick, className }: Props) {
  return (
    <div
      onClick={onClick}
      className={cn(
        `flex items-center justify-center cursor-pointer h-10 text-sm font-semibold leading-6
        text-mmist
      border border-light-yellow border-opacity-10 rounded hover:bg-light-yellow hover:bg-opacity-25
      duration-100`,
        className
      )}
    >
      <ArrowLeft size={16} />
    </div>
  )
}
