import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import clsx from 'clsx'
import { TimeRangeType } from '@/app/(dashboard)/dashboard/metrics-dashboard/data'

export const timeRanges: TimeRangeType[] = ['Last hour', 'Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 90 days']

type TimeRangeSelectorProps = {
  selectedValue: string
  onValueChange: (newValue: string) => void
}

export default function TimeRangeSelector({ selectedValue, onValueChange }: TimeRangeSelectorProps) {
  return (
    <div>
      <div className="w-full h-16 px-4 py-2 flex items-center justify-left">
        <Select value={selectedValue} onValueChange={onValueChange}>
          <SelectTrigger
            className={clsx(
              `bg-light-yellow/50 w-[50%] h-8 text-white px-5 flex items-center justify-between border-none
                rounded-full text-base focus:ring-transparent`
            )}
          >
            <SelectValue placeholder="Choose a timestamp" />
          </SelectTrigger>
          <SelectContent className="h-24 bg-shark-40 text-white overflow-y-scroll border-none">
            <SelectGroup>
              {timeRanges.map((option, index) => (
                <SelectItem
                  key={index}
                  className="text-white text-base focus:bg-[#2E2E32] focus:text-white"
                  value={option}
                >
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
