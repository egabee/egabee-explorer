/* eslint-disable max-len */
// Card.js
import clsx from 'clsx'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectGroup } from '@radix-ui/react-select'

interface CardData {
  type?: string
  name: string
  status?: string
  description: string
  icon?: React.JSX.Element
}
interface Props {
  data: CardData
  isSelected: boolean
  onClick: () => void
}

export default function Card({ data, isSelected, onClick }: Props) {
  return (
    <div
      className={clsx(
        `flex flex-col justify-center items-start rounded p-4 h-fit min-h-[100px] lg:min-h-[90px] cursor-pointer shadow-lg w-full  my-1`,
        isSelected ? 'bg-light-yellow text-black' : 'bg-[#232326] text-[#ECECEE]'
      )}
      onClick={onClick}
    >
      <div className="flex gap-x-3">
        {data.icon}
        <div className="flex flex-col items-start gap-2 font-semibold text-sm text-center mb-1">
          {data.name}
          <p className={`text-xs font-medium text-start  ${isSelected ? 'text-gray-700' : 'text-gray-400'} `}>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
