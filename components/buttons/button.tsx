import { CgMediaLive } from 'react-icons/cg'

interface ButtonProps {
  title: string
  width?: string
  icon?: any
  onClick?: () => void
}

export default function Button({ title, width, icon, onClick }: ButtonProps) {
  const buttonWidth = width ? width : 'w-40'
  return (
    <main>
      <div
        className={` text-black text-sm flex items-center gap-x-2 
        cursor-pointer rounded-md bg-light-yellow h-10 ${buttonWidth} mt-2 hover:bg-[#6e6e6e]`}
        onClick={onClick ? () => onClick() : () => {}}
      >
        <span className="text-lg ml-3">{icon && icon}</span>
        <span className={`text-base font-medium flex-1 duration-200`}>{title}</span>
      </div>
    </main>
  )
}
