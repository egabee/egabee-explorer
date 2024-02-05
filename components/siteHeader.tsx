import React from "react";
import { PiBugFill } from "react-icons/pi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchBar from "./search-bar";
import { LayoutDashboardIcon } from "lucide-react";
import ThemeToggle from './theme-toggle'

function SiteHeader({
  isExplorerPage,
  hideSearch,
}: {
  isExplorerPage?: boolean;
  hideSearch: boolean;
}) {
  return (
    <div className="flex flex-row items-center w-full dark:bg-[#19191A] bg-secBg text-mainText  dark:text-white py-2 pl-3 sm:pl-5 sm:px-5 sm:py-2  border-b dark:border-b-[#232326] border-b-lightmodeborder z-70 ">
      {/* ----------------------------------LOGO-------------------------------- */}
      <div className="mt-2">
        <div>
          <Link href={"/"} className="inline-flex">
            <PiBugFill
              className={`dark:bg-light-yellow dark:text-black bg-transperant text-lightBrand text-3xl rounded cursor-pointer block float-left mr-2 duration-500`}
            />
            <h1
              className={`dark:text-white text-black origin-left font-medium text-2xl duration-300`}
            >
              Egabee
            </h1>
          </Link>
        </div>
      </div>
      {/* ----------------------------------SEARCH-BAR-------------------------------- */}
      {!hideSearch && (
        <div className="px-2 md:w-3/4 w-4/5 mx-auto">
          <SearchBar mainSearch={false} />
        </div>
      )}
      {/* ----------------------------------GO tO Explorer BTN-------------------------------- */}
      <div className="mr-5 flex flex-1 items-center justify-end space-x-4">
        <ThemeToggle />
        <nav className="flex items-center space-x-2">
          {!isExplorerPage && (
            <Link href={"/explorer"}>
              <div className="flex items-center">
                <Button
                  variant={"outline"}
                  className="flex gap-x-2 bg-transparent dark:text-supernova text-lightBrand rounded dark:hover:bg-dark-yellow hover:bg-darkBrand hover:bg-opacity-25 dark:hover:text-supernova hover:text-lightBrand border dark:border-light-yellow border-lightBrand"
                >
                  <p >Explorer</p>
                </Button>
              </div>
            </Link>
          )}
          <Link href={"https://www.egabee.com/login"}>
            <div className="flex items-center  ">
              <Button
                variant={"outline"}
                className="flex gap-x-1 bg-transparent dark:text-supernova text-lightBrand rounded dark:hover:bg-dark-yellow hover:bg-darkBrand hover:bg-opacity-25 dark:hover:text-supernova hover:text-lightBrand border dark:border-light-yellow border-lightBrand"
              >
                <p>Dashboard</p>
              </Button>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SiteHeader;
