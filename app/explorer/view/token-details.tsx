/* eslint-disable max-len */
import { TokenDetails } from '@/lib/token'
import { TokensInsights } from '@/lib/types'
import React from 'react'
interface props {
  tokenDetails: TokenDetails | null
  insights: TokensInsights[]
  selectedRow: any
}
export default function TokenDetailsPage({ tokenDetails, insights, selectedRow }: props) {
  return (
    <div className="flex flex-col gap-y-6 py-2 dark:text-athens-gray text-mainText duration-300">
      <div className="grid grid-cols-1 gap-4 mt-5">
        <div className="flex gap-y-3 gap-x-4">
          <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 w-full h-fit md:h-60 text-xs md:text-sm lg:text-base rounded dark:bg-shark-40 bg-secBg shadow-md">
            <div className="flex flex-col gap-y-2 py-2 mt-3 mx-6">
              <div className="flex flex-row justify-between">
                <div className="w-40 font-semibold">Token Denom:</div>
                <div className="truncate w-fit font-light">
                  {selectedRow?.token?.tokenAddress || selectedRow?.tokenAddress}
                </div>
              </div>

              <div className="border-t dark:border-t-shark-tint-10 border-t-lightmodeborder border-opacity-50"></div>

              <div className="flex justify-between">
                <div className="w-40 font-semibold">Symbol:</div>
                <div className="truncate font-light text-mmist">{tokenDetails?.symbol}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">Subunit:</div>
                <div className="font-light dark:text-mmist text-secText">{tokenDetails?.subunit}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">Version:</div>
                <div className="font-light dark:text-mmist text-secText">{tokenDetails?.version}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 w-full h-fit md:h-48 text-xs md:text-sm lg:text-base rounded dark:bg-shark-40 bg-secBg shadow-md">
          <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="font-semibold">Description:</div>
              <div className="font-light dark:text-mmist text-secText">{tokenDetails?.description}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Issuer:</div>
              <div className="font-light dark:text-mmist text-secText">{tokenDetails?.issuer}</div>
            </div>

            <div className="flex justify-between">
              <div className="font-semibold gap-x-6">Globally Frozen:</div>
              <div className="font-light dark:text-mmist text-secText capitalize">
                {tokenDetails?.globallyFrozen ? 'true' : 'false'}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold gap-x-6">Precision:</div>
              <div className="font-light dark:text-mmist text-secText">{tokenDetails?.precision}</div>
            </div>
            <div className="border-t dark:border-t-shark-tint-30 border-t-lightmodeborder border-opacity-50"></div>

            <div className="flex justify-between">
              <div className="font-semibold">Block Explorer:</div>
              <div className="font-light">
                <a className="underline text-brand" href="https://explorer.coreum.com/coreum" target="_blank">
                  View Explorer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 w-full h-fit md:h-48 text-xs md:text-sm lg:text-base rounded dark:bg-shark-40 bg-secBg shadow-md">
          <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="text-sm font-semibold">Burn Rate:</div>
              <div className="text-sm font-light dark:text-mmist text-secText">{tokenDetails?.burnRate} </div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-semibold">Send Commission Rate:</div>
              <div className="text-sm font-light text-mmist">{tokenDetails?.sendCommissionRate}</div>
            </div>
            <div className="border-t border-t-shark-tint-30 border-opacity-50"></div>

            <div className="flex justify-between">
              <div className="text-sm font-semibold gap-x-6">Features:</div>
              <div className="text-sm font-light text-mmist capitalize">
                <ul>
                  {tokenDetails?.metadata?.features?.map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
