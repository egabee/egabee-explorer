import React from 'react'

import SearchBar from '@/components/search-bar'
import SiteHeader from '@/components/siteHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden mainBgColor">
      <SiteHeader hideSearch={true} />
      <div className="flex justify-center min-w-[60%] dark:text-white text-mainText py-2 z-70">
        <div className="mt-40 flex justify-center flex-col min-w-[60%]">
          <div className="flex justify-center mb-8 sm:w-xs md:w-sm lg:w-md">
            <Image
              src={'/logo.svg'}
              width={250}
              height={250}
              alt={'explorer-logo-searchbar'}
              className="max-w-full h-auto"
            />
          </div>
          <SearchBar mainSearch={true} />
        </div>
      </div>
    </div>
  )
}
