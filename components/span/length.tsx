/* eslint-disable max-len */
import React from 'react'

type LengthProps = { length: number }

const Length = ({ length }: LengthProps) => {
  return (
    <div className="py-[0.63rem] px-[0.63rem] ml-1 w-4 h-4 rounded-full bg-[#343439] border border-slate-700 inline-flex items-center justify-center text-[11px] leading-3">
      {length}
    </div>
  )
}

export default Length
