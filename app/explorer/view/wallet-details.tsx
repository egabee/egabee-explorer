/* eslint-disable max-len */
import GasConsumption from '@/components/overview/gas-consumption'
import TotalTransaction from '@/components/overview/total-transactions'
import { TokensInsights } from '@/lib/types'
import { ArrowLeftRight, Pencil, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { formatNetworkUnit, formatWalletBalance } from '@/lib/utils'

interface props {
  insights: TokensInsights[]
  selectedRow: any
  setShowRenameModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
  added: boolean
}

export default function WalletDetailsPage({
  insights,
  selectedRow,
  setShowRenameModal,
  setShowDeleteModal,
  added,
}: props) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-y-6 py-2 text-athens-gray duration-300">
      <div className="grid gap-1 md:grid-cols-2 grid-cols-1  mt-4 text-mmist">
        {/* <SuccessRate insightData={insights}></SuccessRate> */}
        <GasConsumption insightData={insights}></GasConsumption>
        <TotalTransaction insightData={insights}></TotalTransaction>
      </div>
      {/*Wallet details */}
      <div className="grid md:grid-cols-1 grid-cols-1 gap-y-4">
        <div className="flex flex-row gap-x-4">
          <div className="border border-shark-tint-30 border-opacity-50 w-full text-xs md:text-sm lg:text-base rounded bg-shark-40">
            <div className="flex flex-col gap-y-3 py-4 mx-6">
              <div className="flex justify-between">
                <div className="font-semibold">Wallet Address:</div>
                <div className="font-light">{selectedRow?.wallet?.address || selectedRow?.id}</div>
              </div>
              {/* <div className="border-t border-t-shark-tint-30 border-opacity-50"></div> */}
              <div className="flex justify-between">
                <div className="font-semibold">Balance:</div>
                <div className="font-light">
                  {formatWalletBalance(selectedRow?.wallet) || 0}
                  <span className="ms-1">{formatNetworkUnit(selectedRow?.network) || selectedRow?.unit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Wallet details */}

      {/*Control buttons */}
      {added && (
        <div className="flex flex-row flex-wrap gap-y-4 gap-x-6 mt-4">
          <div
            className="control-button-edit cursor-pointer"
            onClick={() =>
              router.push(
                `/dashboard/transactions?address=${selectedRow?.wallet?.address}&id=${selectedRow?.wallet?.id}`
              )
            }
          >
            <div className="px-4">
              <ArrowLeftRight size={16} />
            </div>
            <div className="px-4">View Transactions</div>
          </div>{' '}
          <div className="control-button-edit" onClick={() => setShowRenameModal(true)}>
            <div>
              <Pencil size={16} />
            </div>
            <div className="px-4">Rename Wallet</div>
          </div>
          <div className="control-button-remove" onClick={() => setShowDeleteModal(true)}>
            <div className="px-4">
              <Trash size={16} />
            </div>
            <div className="px-4">
              <span>Remove Wallet</span>
            </div>
          </div>
        </div>
      )}
      {/*Control buttons */}
    </div>
  )
}
