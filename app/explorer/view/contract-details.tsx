/* eslint-disable max-len */
import GasConsumption from '@/components/overview/gas-consumption'
import SuccessRate from '@/components/overview/success-rate'
import TotalTransaction from '@/components/overview/total-transactions'
import { ArrowLeftRight, FileUp, Pencil, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface props {
  insights: any[]
  selectedRow: any
  setShowRenameModal: React.Dispatch<boolean>
  setShowDeleteModal: React.Dispatch<boolean>
  setShowUploadJSONModal: React.Dispatch<boolean>
  added: boolean
}

export default function ContractDetailsPage({
  insights,
  selectedRow,
  setShowRenameModal,
  setShowDeleteModal,
  setShowUploadJSONModal,
  added,
}: props) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-y-6 py-2 text-athens-gray duration-300">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <div className="border border-shark-tint-30 border-opacity-50 py-2 w-full h-fit lg:h-60 text-xs md:text-sm lg:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex flex-row justify-between gap-2">
              <div className="min-w-fit font-semibold">Contract address: </div>
              <div className="truncate w-fit font-light">
                {' '}
                {selectedRow?.contract?.contractAddress || selectedRow?.contractAddress}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Code ID:</div>
              <div className="font-light">{selectedRow?.contract?.codeId || selectedRow?.codeId}</div>
            </div>
            <div className="border-t border-t-shark-tint-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="flex flex-row font-semibold gap-x-6">
                <div className="font-semibold">cosmwasm-std:</div>
                <div className="font-light text-mmist">1.3.1</div>
              </div>
              <div className="flex flex-row font-semibold gap-x-6">
                <div className="font-semibold gap-x-6">cosmwasm-storage:</div>
                <div className="font-light text-mmist">1.3.1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-shark-tint-30 border-opacity-50 w-full py-2 h-fit lg:h-60 text-xs md:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="font-semibold">Cosmwasm-vm:</div>
              <div className="font-light text-mmist">1.3.1</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">cosmos-sdk:</div>
              <div className="font-light text-mmist">0.41</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold gap-x-6">wasmd:</div>
              <div className="font-light text-mmist">0.41</div>
            </div>
            <div className="border-t border-t-shark-tint-10"></div>

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

      {/*Control buttons */}
      {added && (
        <>
          <div className="flex flex-row flex-wrap gap-y-4 gap-x-6 mt-8 text-sm">
            <div
              className="control-button-edit cursor-pointer"
              onClick={() =>
                router.push(
                  // eslint-disable-next-line max-len
                  `/dashboard/transactions?address=${selectedRow?.contract.contractAddress}&id=${selectedRow?.userContract.id}`
                )
              }
            >
              <div className="px-4">
                <ArrowLeftRight size={16} />
              </div>
              <div className="px-4">View Transactions</div>
            </div>
            <div className="control-button-edit" onClick={() => setShowRenameModal(true)}>
              <div>
                <Pencil size={16} />
              </div>
              <div className="px-4">Rename contract</div>
            </div>

            <div className="control-button-edit pb-1" onClick={() => setShowUploadJSONModal(true)}>
              <div>
                <FileUp size={16} />
              </div>
              <div className="px-4">Upload contract artifact</div>
            </div>
            <div className="control-button-remove" onClick={() => setShowDeleteModal(true)}>
              <div className="px-4">
                <Trash size={16} />
              </div>
              <div className="px-4">
                <span>Remove Contract</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
