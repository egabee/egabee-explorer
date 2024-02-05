/* eslint-disable max-len */
import { Tx } from '@/lib/transaction'
import { cn, formatTime } from '@/lib/utils'
import CopyFunction from '@/components/buttons/copy-button'
import { Hash, TrendingUp, Link, Clock2, Box, Fuel } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface Props {
  details: Tx
}

export default function TransactionDetails({ details }: Props) {
  return (
    <div className="flex flex-col py-4">
      <p className="font-semibold text-2xl">TX Details</p>
      <div className="mt-4 px-2 sm:px-10 py-8 dark:bg-shark-40 bg-secBg shadow-md rounded-md border dark:border-black border-lightmodeborder border-opacity-10 font-semibold">
        <p className="font-bold text-lg mb-5">Transaction Info</p>

        <div className="grid grid-cols-4 gap-4 ">
          {/* TxHash */}
          <div className="flex items-center col-span-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Hash className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    A TxHash or transaction hash is a unique <br /> 66-character identifier that is generated
                    <br /> whenever a transaction is executed
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>TxHash</p>
          </div>
          <div className="dark:text-athens-gray text-mainText  text-xs md:text-sm break-all flex items-center justify-center sm:justify-start col-span-3">
            {details.id} <CopyFunction item={details.id} />
          </div>

          {/* Status */}
          <div className="flex items-center col-span-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TrendingUp className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">The status of the transaction.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>Status</p>
          </div>
          <div className="dark:text-athens-gray text-mainText text-xs md:text-sm flex items-center justify-center sm:justify-start col-span-3">
            <span
              className={cn({ 'text-green-500': details.success, 'text-mandy': !details.success, capitalize: true })}
            >
              {details.success ? 'Success' : 'Failure'}
            </span>
          </div>

          {/* Chain ID */}
          <div className="flex items-center col-span-1 min-w-[91px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    A unique identifier that represents a<br /> blockchain network.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>Chain ID</p>
          </div>
          <div className="dark:text-athens-gray text-mainText text-xs md:text-sm flex items-center justify-center sm:justify-start  col-span-3">
            {details.chainId}
          </div>

          {/* Timestamp */}
          <div className="flex items-center col-span-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Clock2 className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs"></p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>When</p>
          </div>
          <div className="dark:text-athens-gray text-mainText text-xs md:text-sm flex items-center justify-center sm:justify-start col-span-3">
            {formatTime(details.timestamp)}
          </div>

          {/* Blocks */}
          <div className="flex items-center col-span-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Box className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    Number of the block in which the transaction is recorded.
                    <br /> Block confirmations indicate how many blocks have
                    <br /> been added since the transaction was produced.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>Blocks</p>
          </div>
          <div className="dark:text-athens-gray text-mainText text-xs md:text-sm flex items-center justify-center sm:justify-start col-span-3">
            {details.blockNumber.toLocaleString()}
          </div>

          {/* Gas Used */}
          <div className="flex items-center col-span-1 min-w-[100px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Fuel className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    A quantity of gas determined by Company to be the total <br />
                    quantity of gas used by Company in the operation, <br /> maintenanceand construction of the
                    Facilities
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>Gas Used</p>
          </div>
          <div className="dark:text-athens-gray text-mainText text-xs md:text-sm flex items-center justify-center sm:justify-start col-span-3">
            {details.gasUsed.toLocaleString()}
          </div>

          {/* Gas Wanted */}
          <div className="flex items-center col-span-1 min-w-[114px] ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Fuel className="inline dark:text-supernova text-lightBrand mr-2" size={16} strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    The max you want to spend. The gas used is
                    <br /> what you effectively paid for the transaction
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p>Gas Wanted</p>
          </div>
          <div className="dark:text-athens-gray text-mainText text-xs md:text-sm flex items-center justify-center sm:justify-start col-span-3">
            {details.gasWanted.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
