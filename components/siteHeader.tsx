import React from 'react'
import { PiBugFill } from 'react-icons/pi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SearchBar from './search-bar'
import { LayoutDashboardIcon, AlignJustify, X } from 'lucide-react'
import ThemeToggle from './theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

function SiteHeader({ isExplorerPage, hideSearch }: { isExplorerPage?: boolean; hideSearch: boolean }) {
  return (
    <div className="flex flex-row items-center w-full dark:bg-[#19191A] bg-secBg text-mainText dark:text-white py-2 pl-3 sm:pl-5 sm:px-5 border-b dark:border-b-[#232326] border-b-lightmodeborder z-70">
      {/* ----------------------------------LOGO-------------------------------- */}
      <div>
      <Link href="/dashboard/project" className="flex items-center">
          <span className="dark:inline-block hidden">
            <Image src={`/logo.svg`} alt="logo" width={140} height={40} />
          </span>
          <span className="dark:hidden inline-block">
          <Image src={`/logoLight.svg`} alt="logo" width={140} height={40} />
          </span>
        </Link>
      </div>
      {/* ----------------------------------SEARCH-BAR-------------------------------- */}
      {!hideSearch && (
        <div className="px-2 md:w-3/4 w-4/5 mx-auto">
          <SearchBar mainSearch={false} />
        </div>
      )}

      {/* ----------------------------------Theme-Toggle-------------------------------- */}
      <div className={`flex items-center justify-end ${isExplorerPage ? '' : 'w-full mr-12 md:mr-0'}`}>
        <ThemeToggle />
      </div>

      {/* ----------------------------------GO tO Explorer BTN-------------------------------- */}
      {!isExplorerPage && (
        <div className="mr-5 flex-1 items-center justify-end space-x-4 hidden md:flex">
          <nav className="flex items-center space-x-2">
            <Link
              href={'/explorer'}
              className="nav-item relative flex items-center mx-3 text-lg font-normal sm:text-base text-secText dark:text-gray-300 dark:hover:text-white"
            >
              Explorer
            </Link>

            {/* <Link href={"https://www.egabee.com/login"}>
            <div className="flex items-center  ">
              <Button
                variant={"outline"}
                className="flex gap-x-1 bg-transparent dark:text-supernova text-lightBrand rounded dark:hover:bg-supernova hover:bg-lightBrand hover:bg-opacity-100 dark:hover:text-shark-40 hover:text-secBg border dark:border-light-yellow border-lightBrand"
              >
                <p>Dashboard</p>
              </Button>
            </div>
          </Link> */}
          </nav>
        </div>
      )}
      {/*----------------------------------go to Explorer Btn Mobile view------------------------------ */}
      {!isExplorerPage && (
        <Sheet>
          <div className="absolute right-0 top-2 flex items-center mx-2 md:hidden border-0">
            <SheetTrigger
              className="relative inline-flex items-center md:hidden
                  justify-center hover:scale-[1.15] p-3 active:scale-105 dark:text-supernova text-lightBrand"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <AlignJustify className="block h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
          </div>

          <SheetContent className="dark:bg-[#161618] bg-mainBg py-14 ">
            <div className="flex flex-col gap-2 mt-3">
              <Link href={'/explorer'}>
                <div className="flex items-start px-6">
                  <Button
                    variant={'outline'}
                    className=" flex gap-x-2 bg-transparent w-full py-5 dark:text-supernova  text-lightBrand rounded-md dark:hover:bg-supernova dark:border-supernova hover:bg-lightBrand hover:text-white border border-lightBrand dark:hover:text-woodsmoke"
                  >
                    <p>Explorer</p>
                  </Button>
                </div>
              </Link>
              {/* <Link href={"https://www.egabee.com/login"}>
              <div className="flex items-start px-6   ">
                <Button
                  variant={"outline"}
                  className="flex gap-x-2 bg-transparent w-full dark:text-supernova text-lightBrand rounded dark:hover:bg-supernova hover:bg-lightBrand hover:bg-opacity-100 dark:hover:text-shark-40 hover:text-secBg border dark:border-light-yellow border-lightBrand"
                >
                  <p>Dashboard</p>
                </Button>
              </div>
            </Link> */}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}

export default SiteHeader
