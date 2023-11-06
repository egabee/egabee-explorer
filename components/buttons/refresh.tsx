'use client'

import clsx from 'clsx'
import React from 'react'
import { TbRefresh } from 'react-icons/tb'

interface Props {
  title: string
  width?: string
  onClick: () => void
}

export default function Refresh({ title, width, onClick }: Props) {
  const buttonWidth = width ? width : 'w-[98px]'
  const [spin, setSpin] = React.useState(false)

  const handleClick = () => {
    setSpin(true)
    onClick()
    setTimeout(() => {
      setSpin(false)
    }, 2000)
  }

  return (
    <div>
      <div
        className={`text-light-yellow text-sm flex items-center gap-x-1 
        cursor-pointer border border-light-yellow rounded-s h-10 ${buttonWidth} 
        hover:bg-dark-yellow hover:bg-opacity-25 hover:duration-300
        hover:shadow-inner`}
        onClick={handleClick}
      >
        <span className="text-xl block float-left ml-2">
          <TbRefresh className={clsx({ 'animate-spin': spin })} />
        </span>
        <span className={`text-sm flex-1 duration-200`}>{title}</span>
      </div>
    </div>
  )
}
