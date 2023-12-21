import React from 'react'
import { PiBugFill } from 'react-icons/pi'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'


function SiteHeader() {
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
      <div className="mr-5 flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Link href={'/explorer'}>
            <div className="flex items-center  ">
              <Button
                variant={'outline'}
                className="flex gap-x-2 bg-transparent text-supernova rounded hover:bg-dark-yellow hover:bg-opacity-25 hover:text-supernova border border-light-yellow"
              >
                <p>Go to Explorer</p>
                {/* <LayoutDashboardIcon size={16} /> */}
              </Button>
            </div>
          </Link>

          {/* <ThemeToggle /> */}
        </nav>
      </div>
    </div>


  )
}

export default SiteHeader
