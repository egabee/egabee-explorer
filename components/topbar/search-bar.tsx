'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { PiBugFill } from 'react-icons/pi'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const router = useRouter()
  const { status } = useSession()
  const pathName = usePathname()

  React.useEffect(() => {
    if (status !== 'loading' && status === 'unauthenticated') {
      router.push('/login')
    }
  }, [router, status])

  if (pathName === '/login' || pathName === '/') {
    return null
  }

  return (
    <div className="flex flex-row w-full bg-[#19191A] text-white px-5 py-2 border-b border-b-[#232326]">
      <div className="mt-2">
        <div className="inline-flex">
          <PiBugFill
            className={`bg-light-yellow text-black text-3xl rounded cursor-pointer block float-left mr-2 duration-500`}
          />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300`}>Egabee</h1>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div
          className={clsx(`flex justify-center items-center py-1 px-2 w-1/3 rounded 
        border border-light-white gap-x-2`)}
        >
          <div className="flex items-center">
            <span className="text-[#9A999F] cursor-pointer hover:text-gray-100">
              <Search size={20} />
            </span>
          </div>
          <div className="w-full">
            <input
              className={clsx(
                'p-1 text-[#9A999F] w-full bg-[#19191A]  border-none hover:ring-0 focus:outline-none focus:ring-0'
              )}
              type="text"
              placeholder="Search for any transaction or address"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
