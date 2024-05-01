/* eslint-disable max-len */

interface Props {
  insights: any
  selectedRow: any
}

export default function NftDetailsPage({ insights, selectedRow }: Props) {
  return (
    <div className="flex flex-col mt-4 gap-y-6 py-2 dark:text-athens-gray text-mainText duration-300">
      <div className="border dark:border-shark-tint-30 border-lightmodeborder border-opacity-50 py-2 w-full h-fit  text-xs md:text-sm lg:text-base rounded mainBgColor bg-secBg shadow-md">
        <div className="flex flex-col gap-y-3 py-2 lg:py-0 lg:mt-4 mx-6">
          <div className="flex flex-row justify-between items-end gap-2">
            <div className="min-w-fit font-semibold">Nft address: </div>
            <div className="truncate w-fit font-light text-sm"> {selectedRow?.classId}</div>
          </div>
          <div className="flex flex-row justify-between items-end gap-2">
            <div className="min-w-fit font-semibold">Nft description: </div>
            <div className="truncate w-fit font-light text-sm"> {selectedRow?.description}</div>
          </div>
          <div className="flex justify-between items-end">
            <div className="font-semibold">Code ID:</div>
            <div className="font-light text-sm">{selectedRow?.id}</div>
          </div>
          <div className="border-t dark:border-t-shark-tint-10 border-t-lightmodeborder"></div>
          <div className="flex justify-between mb-2">
            <div className="flex flex-row font-semibold gap-x-6">
              <div className="font-semibold">cosmwasm-std:</div>
              <div className="font-light text-sm dark:text-mmist text-secText">1.3.1</div>
            </div>
            <div className="flex flex-row font-semibold gap-x-6">
              <div className="font-semibold gap-x-6">cosmwasm-storage:</div>
              <div className="font-light text-sm dark:text-mmist text-secText">1.3.1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
