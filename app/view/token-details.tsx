/* eslint-disable max-len */
import GasConsumption from '@/components/overview/gas-consumption'
import SuccessRate from '@/components/overview/success-rate'
import TotalTransaction from '@/components/overview/total-transactions'
import { Network } from '@/lib/network'
import { CombinedToken, TokenDetails } from '@/lib/token'
import { TokensInsights } from '@/lib/types'
import { ArrowLeftRight, Globe, Pencil, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
interface props {
  tokenDetails: TokenDetails | null
  insights: TokensInsights[]
  networks: Network[]
  selectedRow: any
  setShowRenameModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
  added: boolean
}
export default function TokenDetailsPage({
  tokenDetails,
  insights,
  networks,
  selectedRow,
  setShowRenameModal,
  setShowDeleteModal,
  added,
}: props) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-y-6 py-2 text-athens-gray duration-300">
      <div className="grid  gap-1 md:grid-cols-3 grid-cols-1 mt-4 text-mmist">
        <SuccessRate insightData={insights}></SuccessRate>
        <GasConsumption insightData={insights}></GasConsumption>
        <TotalTransaction insightData={insights}></TotalTransaction>
      </div>
      {/*Token details */}
      <div className="grid grid-cols-1 gap-4">
        <div className="flex gap-y-3 gap-x-4">
          <div className="border border-shark-tint-30 border-opacity-50 w-full h-fit md:h-60 text-xs md:text-sm lg:text-base rounded bg-shark-40">
            <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
              <div className="flex justify-between">
                <div className="font-bold">Network: </div>
                <div className="flex flex-row items-center rounded-2xl py-1 px-3 bg-light-white text-iron">
                  <div className="capitalize font-light">
                    {networks.find((n) => n.id === selectedRow?.token?.networkId)?.env}
                  </div>
                  <div className="ml-1">
                    <Globe />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">Chain ID:</div>
                <div className="font-light">
                  {
                    networks.find((n) => n.id === selectedRow?.token?.networkId || n.id === selectedRow?.networkId)
                      ?.chainId
                  }
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="w-40 font-semibold">Token Denom:</div>
                <div className="truncate w-fit font-light">
                  {selectedRow?.token?.tokenAddress || selectedRow?.tokenAddress}
                </div>
              </div>

              <div className="border-t border-t-shark-tint-30 border-opacity-50"></div>

              <div className="flex justify-between">
                <div className="w-40 font-semibold">Symbol:</div>
                <div className="truncate font-light text-mmist">{tokenDetails?.symbol}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">Subunit:</div>
                <div className="font-light text-mmist">{tokenDetails?.subunit}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">Version:</div>
                <div className="font-light text-mmist">{tokenDetails?.version}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="border border-shark-tint-30 border-opacity-50 w-full h-fit md:h-48 text-xs md:text-sm lg:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="font-semibold">Description:</div>
              <div className="font-light text-mmist">{tokenDetails?.description}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Issuer:</div>
              <div className="font-light text-mmist">{tokenDetails?.issuer}</div>
            </div>

            <div className="flex justify-between">
              <div className="font-semibold gap-x-6">Globally Frozen:</div>
              <div className="font-light text-mmist capitalize">{tokenDetails?.globally_frozen ? 'true' : 'false'}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold gap-x-6">Precision:</div>
              <div className="font-light text-mmist">{tokenDetails?.precision}</div>
            </div>
            <div className="border-t border-t-shark-tint-30 border-opacity-50"></div>

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

        <div className="border border-shark-tint-30 border-opacity-50 w-full h-fit md:h-48 text-xs md:text-sm lg:text-base rounded bg-shark-40">
          <div className="flex flex-col gap-y-2 py-2 lg:py-0 lg:mt-4 mx-6">
            <div className="flex justify-between">
              <div className="text-sm font-semibold">Burn Rate:</div>
              <div className="text-sm font-light text-mmist">{tokenDetails?.burn_rate} </div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-semibold">Send Commission Rate:</div>
              <div className="text-sm font-light text-mmist">{tokenDetails?.send_commission_rate}</div>
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
      {/*Token details */}

      {/*Control buttons */}
      {added && (
        <div className="flex flex-row flex-wrap gap-y-4 gap-x-6 mt-4">
          <div
            className="control-button-edit cursor-pointer"
            onClick={() =>
              router.push(
                `/dashboard/transactions?address=${selectedRow?.token.tokenAddress}&id=${selectedRow?.userToken.id}`
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
            <div className="px-4">Rename token</div>
          </div>
          <div className="control-button-remove" onClick={() => setShowDeleteModal(true)}>
            <div className="px-4">
              <Trash size={16} />
            </div>
            <div className="px-4">
              <span>Remove Token</span>
            </div>
          </div>
        </div>
      )}
      {/*Control buttons */}
    </div>
  )
}
