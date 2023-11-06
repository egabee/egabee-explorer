'use client'

import clsx from 'clsx'
import { BsPlusCircle } from 'react-icons/bs'

interface AddButtonProps {
  title: string
  width?: string
  onClick: () => void
}

export default function AddButton({ title, width, onClick }: AddButtonProps) {
  width = width ? width : 'w-28'

  return (
    <div>
      <button
        className={clsx(
          `flex items-center justify-center cursor-pointer h-10 text-sm font-semibold leading-6 text-black
          rounded bg-light-yellow hover:bg-light-yellow-20 duration-100`,
          width
        )}
        onClick={() => onClick()}
      >
        <div className="flex justify-between items-center">
          <span className="text-sm block float-left pr-1">
            <BsPlusCircle />
          </span>
          <span className={`text-sm font-bold flex-1 duration-200`}>{title}</span>
        </div>
      </button>
    </div>
  )
}
