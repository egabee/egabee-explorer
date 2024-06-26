'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Token, Contract } from '@/lib/types'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import GoBack from '@/components/ui/go-back'
import { useSearchContext } from '@/context/SearchContext'
import SiteHeader from '@/components/siteHeader'
import { createUrl } from '@/lib/fetcher'
import { Nft } from '@/lib/nft'
import Spinner from '@/components/ui/spinner'
import { Network } from '@/lib/network'
import { useNetworksContext } from '@/context/NetworksContext'
import { Relayer } from '@/lib/relayer'

function getNetworkName(networkId: string, networks: Network[]): string {
  const network = networks.find((network) => network.id === networkId)
  return network ? `${network.name}(${network.env})` : 'Coreum(testnet)'
}

export default function Explorer() {
  const pathname = usePathname()
  const router = useRouter()

  const isExplorerPage = pathname === '/explorer'

  // Default is mainnet
  const [networkId, setNetworkId] = useState<string>('527339fa-ca4b-4eb0-8b6a-a53a6e5fac25')

  const [key, setKey] = useState('contracts')
  const [isLoading, setIsLoading] = useState(true)

  const [Data, setData] = useState<{ id: string; name: string; address: string; network: string }[]>([])

  const [networks, setNetworks] = useState<Network[]>([])
  const { chainsData, isLoading: chainsIsLoading, error: networksError } = useNetworksContext()
  const { setSearchText } = useSearchContext()

  //get supported networks
  useEffect(() => {
    if (!networksError && chainsData) {
      setNetworks(chainsData)
    }
  }, [chainsData, networksError])



  // get data
  useEffect(() => {
    setIsLoading(true)
    if (key === 'contracts') {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`
      const getdata = async () => {
        const resp = await axios.get(createUrl(endpoint))
        const data: Contract[] = resp.data

        setData(
          data.map(({ contractAddress, id, contractName }, index) => ({
            id: index.toString(),
            address: contractAddress,
            name: contractName,
            network: getNetworkName(networkId, networks),
          }))
        )
        setIsLoading(false)
      }


      getdata()
    } else if (key === 'tokens') {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`

      const getdata = async () => {
        const data: Token[] = await (await axios.get(createUrl(endpoint))).data
        setData(
          data
            .filter((item) => item.symbol !== 'ucore')
            .map(({ id, name, networkId, tokenAddress }, index) => ({
              id: index.toString(),
              name: name,
              address: tokenAddress,
              network: getNetworkName(networkId, networks),
            }))
        )
        setIsLoading(false)
      }
      getdata()
    } else if (key === 'nfts') {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`

      const getdata = async () => {
        const data: Nft[] = await (await axios.get(createUrl(endpoint))).data
        setData(
          data
            .filter((item) => item.symbol !== 'ucore')
            .map(({ id, name, networkId, nftId }, index) => ({
              id: index.toString(),
              name: name,
              address: nftId,
              network: getNetworkName(networkId, networks),
            }))
        )
        setIsLoading(false)
      }
      getdata()
    } else if (key === 'relayers') {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`

      const getdata = async () => {
        const data: Relayer[] = await (await axios.get(createUrl(endpoint))).data
        setData(
          data.map(({ id, name, networkId, clientId }, index) => ({
            id: index.toString(),
            name: name,
            address: clientId,
            network: getNetworkName(networkId, networks),
          }))
        )
        setIsLoading(false)
      }
      getdata()
    }
  }, [networkId, key, networks])


  if ((isLoading && Data.length === 0) || chainsIsLoading) {
    return <Spinner type={'main'} />
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden mainBgColor">
      <SiteHeader hideSearch={false} isExplorerPage={true} />
      <div className="py-2 mt-10" onClick={() => setSearchText('')}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4 gap-2">
            {isExplorerPage && (
              <div
                onClick={() => {
                  router.push('/')
                }}
                className="cursor-pointer w-12"
              >
                <GoBack title={''} />
              </div>
            )}

            <div className="flex flex-row items-center gap-2">
              {/* ---------------------------------- NETWORK SELECTOR ---------------------------------- */}
              <div className="flex justify-end">
                <Select defaultValue={networkId} onValueChange={setNetworkId}>
                  <SelectTrigger
                    className="flex items-center justify-center cursor-pointer h-10 !text-xs md:!text-[14px] !font-medium leading-6 dark:text-black !text-[#96ADC6] border-[#96ADC6]
                    rounded bg-transparent hover:bg-brand hover:bg-opacity-25 duration-100"
                  >
                    <SelectValue placeholder="Select Network" />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg">
                    {Array.isArray(networks) &&
                      networks?.map((network, i) => {
                        return (
                          <SelectItem
                            key={i}
                            value={network.id}
                            className="cursor-pointer hover:!bg-brand-30 hover:!text-white"
                          >
                            {network.name} {network.env}
                          </SelectItem>
                        )
                      })}
                  </SelectContent>
                </Select>
              </div>
              {/* ---------------------------------- ITEMS SELECTOR ---------------------------------- */}
              <div className="flex justify-end">
                <Select defaultValue={key} onValueChange={setKey}>
                  <SelectTrigger
                    className="flex items-center justify-center cursor-pointer h-10 !text-xs md:!text-[14px] !font-medium leading-6 dark:text-black !text-[#96ADC6] border-[#96ADC6]
                                rounded bg-transparent hover:bg-brand hover:bg-opacity-25 duration-100"
                  >
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg">
                    <SelectItem value="contracts" className="cursor-pointer hover:!bg-brand-30 hover:!text-white">
                      Contracts
                    </SelectItem>
                    <SelectItem value="tokens" className="cursor-pointer hover:!bg-brand-30 hover:!text-white">
                      Tokens
                    </SelectItem>
                    <SelectItem value="nfts" className="cursor-pointer hover:!bg-brand-30 hover:!text-white">
                      NFTs
                    </SelectItem>
                    <SelectItem value="relayers" className="cursor-pointer hover:!bg-brand-30 hover:!text-white">
                      Relayers
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DataTable columns={columns} data={Data} onRowClick={() => {}} />
        </div>
      </div>
    </div>
  )
}
