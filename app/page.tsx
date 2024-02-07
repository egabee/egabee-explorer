
import React from "react";

import SearchBar from "@/components/search-bar";
import SiteHeader from "@/components/siteHeader";
export default function Home() {

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden ">
      <SiteHeader hideSearch={true} />
      <div className="flex justify-center min-w-[60%]  dark:text-white text-mainText py-2 pl-5 sm:px-5 sm:py-2  z-70  ">
        <div className="mt-40 flex justify-center flex-col min-w-[60%] ">
          <p className="font-bold text-6xl text-center mb-8 dark:text-light-yellow text-lightBrand ">
            Egabee
          </p>
          <SearchBar mainSearch={true} />
        </div>
      </div>
    </div>
  );
}
