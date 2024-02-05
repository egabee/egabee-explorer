/* eslint-disable max-len */
import React from 'react'

interface props {
  insights: any[]
  selectedRow: any
}

export default function ContractDetailsPage({
  insights,
  selectedRow,
}: props) {

  return (
    <div className="flex flex-col mt-4 gap-y-6 py-2 dark:text-athens-gray text-mainText duration-300">
      <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 py-2 w-full h-fit lg:h-60 text-xs md:text-sm lg:text-base rounded dark:bg-shark-40 bg-secBg shadow-md">
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
          <div className="border-t dark:border-t-shark-tint-10 border-t-lightmodeborder "></div>
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex flex-row font-semibold gap-x-6">
              <div className="font-semibold">cosmwasm-std:</div>
              <div className="font-light dark:text-mmist text-secText">1.3.1</div>
            </div>
            <div className="flex flex-row font-semibold gap-x-6">
              <div className="font-semibold gap-x-6">cosmwasm-storage:</div>
              <div className="font-light dark:text-mmist text-secText">1.3.1</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 w-full py-2 h-fit lg:h-60 text-xs md:text-base rounded dark:bg-shark-40 bg-secBg shadow-md">
        <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
          <div className="flex justify-between">
            <div className="font-semibold">Cosmwasm-vm:</div>
            <div className="font-light dark:text-mmist text-secText">1.3.1</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">cosmos-sdk:</div>
            <div className="font-light dark:text-mmist text-secText">0.41</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold gap-x-6">wasmd:</div>
            <div className="font-light dark:text-mmist text-secText">0.41</div>
          </div>
          <div className="border-t  dark:border-t-shark-tint-10 border-t-lightmodeborder"></div>

          <div className="flex justify-between">
            <div className="font-semibold">Block Explorer:</div>
            <div className="font-light">
              <a className=" underline dark:text-supernova text-lightBrand" href="https://explorer.coreum.com/coreum" target="_blank">
                View Explorer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
