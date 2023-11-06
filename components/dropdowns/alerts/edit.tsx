'use client'

import clsx from 'clsx'
import React from 'react'
import { MdOutlineNotificationsNone, MdDeleteOutline } from 'react-icons/md'
import { RiEditLine } from 'react-icons/ri'

type DropdownState = {
  id: number
  isOpen: boolean
  closeAllDropdowns: () => void
  enabled: boolean
  onEnableChange: (value: boolean) => void
  onRemove: () => void
}

const DropdownMenu = ({ isOpen, enabled, onEnableChange, onRemove }: DropdownState) => {
  const [enable, setEnable] = React.useState(enabled)

  React.useEffect(() => {
    setEnable(enabled)
  }, [enabled])

  const alertStatusChanged = () => {
    setEnable(!enable)
    onEnableChange(!enable)
  }

  return (
    <div className="relative inline-block text-left shadow-xl">
      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={clsx(
            'absolute right-0 mt-2 w-56 rounded-md shadow-xl bg-[#1C1C1E] ring-1 ring-black ring-opacity-5 duration-300'
          )}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Dropdown items */}
            <div
              className="block px-4 py-2 text-sm hover:bg-light-white mx-3 rounded cursor-pointer"
              role="menuitem"
              onClick={alertStatusChanged}
            >
              <span className="text-xl block float-left">
                <MdOutlineNotificationsNone></MdOutlineNotificationsNone>
              </span>
              <span className="flex-1 ml-2"> {enable ? 'Disable ' : 'Enable '} Alert</span>
            </div>
            <div
              className="block px-4 py-2 text-sm  hover:bg-light-white mx-3 rounded cursor-pointer"
              role="menuitem"
              onClick={() => console.log('edit clicked')}
            >
              <span className="text-xl block float-left">
                <RiEditLine></RiEditLine>
              </span>
              <span className="flex-1 ml-2">Edit Alert</span>
            </div>
            <div
              className="block px-4 py-2 text-sm  hover:bg-light-white mx-3 rounded cursor-pointer"
              role="menuitem"
              onClick={() => onRemove()}
            >
              <span className="text-xl block float-left">
                <MdDeleteOutline></MdDeleteOutline>
              </span>
              <span className="flex-1 ml-2">Remove Alert</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
