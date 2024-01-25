import React from "react";
import { PiBugFill } from "react-icons/pi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchBar from "./search-bar";


function SiteHeader({
  isExplorerPage,
  hideSearch,
}: {
  isExplorerPage?: boolean;
  hideSearch: boolean;
}) {
  return (
    <div className="flex flex-row items-center w-full bg-[#19191A] text-white py-2 pl-3 sm:pl-5 sm:px-5 sm:py-2  border-b border-b-[#232326] z-70 ">
      {/* ----------------------------------LOGO-------------------------------- */}
      <div className="mt-2">
        <div>
          <Link href={"/"} className="inline-flex">
            <PiBugFill
              className={`bg-light-yellow text-black text-3xl rounded cursor-pointer block float-left mr-2 duration-500`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300`}
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
        <nav className="flex items-center space-x-2">
          {!isExplorerPage && (
            <Link href={"/explorer"}>
              <div className="flex items-center">
                <Button
                  variant={"outline"}
                  className="flex gap-x-2 bg-transparent text-supernova rounded hover:bg-dark-yellow hover:bg-opacity-25 hover:text-supernova border border-light-yellow"
                >
                  <p >Explorer</p>
                </Button>
              </div>
            </Link>
          )}
          <Link  href={"https://www.egabee.com/login"}>
            <div className="flex items-center  ">
              <Button
                variant={"outline"}
                className="flex gap-x-1 bg-transparent text-supernova rounded hover:bg-dark-yellow hover:bg-opacity-25 hover:text-supernova border border-light-yellow"
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
