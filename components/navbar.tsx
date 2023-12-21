/* eslint-disable max-len */
'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { PiBugFill } from 'react-icons/pi'
import { ChevronDown, Plus, PlusCircle, Search } from 'lucide-react'


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'



export default function Navbar() {


  return (
    <div className="flex flex-row w-full bg-[#19191A] text-white py-2 pl-5 sm:px-5 sm:py-2  border-b border-b-[#232326] z-70 ">
      {/* ----------------------------------LOGO-------------------------------- */}
      <div className="mt-2">
        <div className="inline-flex">
          <PiBugFill
            className={`bg-light-yellow text-black text-3xl rounded cursor-pointer block float-left mr-2 duration-500`}
          />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300`}>Egabee</h1>
        </div>
      </div>
      {/* ----------------------------------SEARCH-BAR-------------------------------- */}
      <div className="flex justify-center w-full">
        <div
          className={clsx(`relative flex justify-center items-center py-1 px-2 md:w-1/2 w-4/5 
          border border-light-white rounded-sm gap-x-2 `)}
        >
          <div className="flex items-center">
            <span className="text-[#9A999F] cursor-pointer hover:text-gray-100">
              <Search size={20} />
            </span>
          </div>

          <input
            className={clsx(
              `p-1 text-white w-full bg-[#19191A] border-none hover:ring-0 focus:outline-none focus:ring-0`
            )}
            type="text"
            placeholder="Search for any transaction or address"
            value={''}

          />



        </div>
      </div>


    </div>
  )
}
