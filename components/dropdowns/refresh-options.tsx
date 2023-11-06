'use client'

import clsx from 'clsx'
import React from 'react'

const refreshTimeOptions = ['Off', '5s', '10s', '30s', '1m', '5m', '15m', '30m', '1h', '2h', '1d']

export default function RefreshOptions() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [refreshTime, setRefreshTime] = React.useState<null | string>(null)

  const selectRefreshTime = (index: number) => {
    setRefreshTime(refreshTimeOptions[index])
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left w-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={clsx(
          `h-10 inline-flex items-center justify-center w-full px-4 py-2 text-sm text-light-yellow 
          border border-light-yellow border-l-0 rounded-e hover:bg-light-yellow hover:bg-opacity-25 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500`
        )}
      >
        {refreshTime ? refreshTime : 'Off'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d={`M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 
            0 01-1.414 0l-4-4a1 1 0 010-1.414z`}
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={clsx(
          isOpen ? '' : 'hidden',
          `absolute right-0 mt-2 origin-top-right bg-[#1C1C1E] text-white rounded-md
          shadow-lg shadow-black ring-1 ring-black ring-opacity-5`
        )}
      >
        <div
          className="py-1 overflow-y-scroll h-40"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {refreshTimeOptions.map((option, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-sm  hover:bg-light-white hover:text-white cursor-pointer"
              role="menuitem"
              onClick={() => selectRefreshTime(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
