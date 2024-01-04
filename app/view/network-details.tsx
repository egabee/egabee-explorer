/* eslint-disable max-len */
import GasConsumption from '@/components/overview/gas-consumption'
import SuccessRate from '@/components/overview/success-rate'
import TotalTransaction from '@/components/overview/total-transactions'
import { CombinedNetwork, Network } from '@/lib/network'
import { Insight } from '@/lib/types'
import { Globe, Pencil, Trash } from 'lucide-react'
import React from 'react'

interface props {
  insights: Insight[]
  selectedRow: any
  supportedNetworks: Network[]
  setShowRenameModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
  added: boolean
}

export default function NetworkDetailsPage({
  insights,
  selectedRow,
  supportedNetworks,
  setShowRenameModal,
  setShowDeleteModal,
  added,
}: props) {
  return (
    <div className="flex flex-col gap-y-6 py-2 text-athens-gray duration-300">
      <div className="grid gap-1 md:grid-cols-3 grid-cols-1 mt-4 text-mmist">
        <SuccessRate insightData={insights}></SuccessRate>
        <GasConsumption insightData={insights}></GasConsumption>
        <TotalTransaction insightData={insights}></TotalTransaction>
      </div>
      {/*Chain details */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="border border-shark-tint-30 border-opacity-50 py-2 md:py-0 w-full md:h-48 text-xs md:text-sm lg:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-2 py-3 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="font-bold">Network: </div>
              <div className="flex flex-row items-center rounded-2xl py-1 px-3 bg-light-white text-iron">
                <div className="capitalize font-light">
                  {supportedNetworks?.find(
                    ({ chainId }) => chainId === selectedRow?.network?.chainId || chainId === selectedRow?.chainId
                  )?.env || ''}
                </div>
                <div className="ml-1">
                  <Globe />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Chain ID:</div>
              <div className="font-light">{selectedRow?.network?.chainId || selectedRow?.chainId}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Network Name:</div>
              <div className="font-light">{selectedRow?.network?.name || selectedRow?.name}</div>
            </div>
          </div>
        </div>
        <div className="border border-shark-tint-30 border-opacity-50 w-full h-[122px] md:h-48 text-xs md:text-sm lg:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-2 py-3 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="font-semibold">Block Explorer:</div>
              <div className="font-light">
                <a className=" underline text-supernova" href="https://explorer.coreum.com/coreum" target="_blank">
                  View Explorer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Chain details */}

      {/*Control buttons */}
      {added && (
        <div className="flex flex-row flex-wrap gap-y-4 gap-x-6 mt-8 text-sm">
          <div className="control-button-edit" onClick={() => setShowRenameModal(true)}>
            <div>
              <Pencil size={16} />
            </div>
            <div className="px-4">Rename chain</div>
          </div>
          <div className="control-button-remove" onClick={() => setShowDeleteModal(true)}>
            <div className="px-4">
              <Trash size={16} />
            </div>
            <div className="px-4">
              <span>Remove chain</span>
            </div>
          </div>
        </div>
      )}
      {/*Control buttons */}
    </div>
  )
}
