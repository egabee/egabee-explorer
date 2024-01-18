/* eslint-disable max-len */
import React from 'react'
import { Globe } from 'lucide-react'
import { Network } from '@/lib/network'

interface Props {
  insights: any
  selectedRow: any
}

export default function NftDetailsPage({
  insights,
  selectedRow,
}: Props) {

  return (
    <div className="flex flex-col mt-4 gap-y-6 py-2 text-athens-gray duration-300">
        <div className="border border-shark-tint-30 border-opacity-50 py-2 w-full h-fit  text-xs md:text-sm lg:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-3 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex flex-row justify-between items-end gap-2">
              <div className="min-w-fit font-semibold">Nft address: </div>
              <div className="truncate w-fit font-light text-sm"> {selectedRow?.class_id}</div>
            </div>
            <div className="flex flex-row justify-between items-end gap-2">
              <div className="min-w-fit font-semibold">Nft description: </div>
              <div className="truncate w-fit font-light text-sm"> {selectedRow?.description}</div>
            </div>
            <div className="flex justify-between items-end">
              <div className="font-semibold">Code ID:</div>
              <div className="font-light text-sm">{selectedRow?.id}</div>
            </div>
            <div className="border-t border-t-shark-tint-10"></div>
            <div className="flex justify-between mb-2">
              <div className="flex flex-row font-semibold gap-x-6">
                <div className="font-semibold">cosmwasm-std:</div>
                <div className="font-light text-sm text-mmist">1.3.1</div>
              </div>
              <div className="flex flex-row font-semibold gap-x-6">
                <div className="font-semibold gap-x-6">cosmwasm-storage:</div>
                <div className="font-light text-sm text-mmist">1.3.1</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}