/* eslint-disable max-len */
import { TokensInsights } from '@/lib/types'
import React from 'react'
import { formatNetworkUnit, formatWalletBalance } from '@/lib/utils'

interface props {
  insights: TokensInsights[]
  selectedRow: any
}

export default function WalletDetailsPage({ insights, selectedRow }: props) {
  return (
    <div className="flex flex-col gap-y-6 py-2 dark:text-athens-gray text-mainText duration-300">
      <div className="grid md:grid-cols-1 grid-cols-1 gap-y-4 mt-5">
        <div className="flex flex-row gap-x-4">
          <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 w-full text-xs md:text-sm lg:text-base rounded mainBgColor bg-secBg shadow-md">
            <div className="flex flex-col gap-y-3 py-4 mx-6">
              <div className="flex justify-between">
                <div className="font-semibold">Wallet Address:</div>
                <div className="font-light">{selectedRow?.wallet?.address || selectedRow?.id}</div>
              </div>
              {/* <div className="border-t border-t-shark-tint-30 border-opacity-50"></div> */}
              <div className="flex justify-between">
                <div className="font-semibold">Balance:</div>
                <div className="font-light">
                  {formatWalletBalance(selectedRow?.wallet) ?? '-'}
                  <span className="ms-1">{formatNetworkUnit(selectedRow?.network) || selectedRow?.unit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
