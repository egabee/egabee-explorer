'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

import { Token, Contract } from '@/lib/types'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function getNetworkName(networkId: string) {
  return networkId === '527339fa-ca4b-4eb0-8b6a-a53a6e5fac25' ? 'Coreum(mainnet)' : 'Coreum(testnet)'
}

export default function Home() {
  const [selectConteract, setSelectContract] = React.useState(false)
  const [selectToken, setSelectToken] = React.useState(false)
  const [selectnft, setSelectnft] = React.useState(false)
  const [useEndpoint, setUseEndpoint] = React.useState('')
  const [Data, setData] = React.useState<{ id: string; name: string; address: string; network: string }[]>([])

  // Default is mainnet
  const [networkId, setNetworkId] = React.useState<string>('527339fa-ca4b-4eb0-8b6a-a53a6e5fac25')

  const [key, setKey] = React.useState('contracts')

  // const Fetchdata = (data: string) => {
  React.useEffect(() => {
    if (key === 'contracts') {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`

      const getdata = async () => {
        const resp = await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)
        const data: Contract[] = resp.data

        console.log(data)
        setData(
          data.map(({ contractAddress, id, contractName }, index) => ({
            id: index.toString(),
            address: contractAddress,
            name: contractName,
            network: getNetworkName(networkId),
          }))
        )
      }

      getdata()
    } else if (key === 'tokens') {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`
      const getdata = async () => {
        const data: Token[] = await (await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)).data
        setData(
          data
            .filter((item) => item.symbol !== 'ucore')
            .map(({ id, name, networkId, tokenAddress }, index) => ({
              id: index.toString(),
              name: name,
              address: tokenAddress,
              network: getNetworkName(networkId),
            }))
        )
      }
      getdata()
    }
    // else if (selectnft == true) {
    //   const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/tokens/"
    //   const getdata = async () => {
    //     const data: Token[] = await (await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)).data
    //     setData(
    //       data.map(({ id, name, networkId, tokenAddress }) => ({
    //         id: id,
    //         name: name,
    //         address: tokenAddress,
    //         network: networkId,
    //       }))
    //     )
    //   }
    //   getdata();

    // }
  }, [selectConteract, selectToken, useEndpoint, networkId, key])

  const SelectApi = (api: string) => {
    if (api === 'contract') {
      setSelectContract(true)
      setSelectToken(false)
    } else if (api === 'token') {
      setSelectToken(true)
      setSelectContract(false)
    }
    // else if (api === "nft") {

    //   setSelectnft(true)
    //   setSelectContract(false)
    // }
  }

  return (
    <div className="py-8 px-4 ">
      <div className="container">
        <div className="flex justify-between mb-4">
          {/* <div className="flex justify-end">
          </div> */}
          <div className="flex justify-end">
            <Select defaultValue={networkId} onValueChange={(value) => setNetworkId(value)}>
              <SelectTrigger
                className="w-[180px] cursor-pointer h-10 text-sm font-semibold  text-white bg-special
          rounded-lg  hover:bg-light-yellow-20 duration-100 py-2 border-border "
              >
                <SelectValue placeholder="Select Network" />
              </SelectTrigger>
              <SelectContent className="shadow-lg">
                <SelectItem value="527339fa-ca4b-4eb0-8b6a-a53a6e5fac25" className="cursor-pointer">
                  Coreum Mainnet
                </SelectItem>
                <SelectItem value="27a28106-27ae-4bec-a956-f38bed27d84a">Coreum testnet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Select defaultValue={key} onValueChange={setKey}>
              <SelectTrigger
                className="w-[180px] cursor-pointer h-10 text-sm font-semibold  text-white bg-special
          rounded-lg  hover:bg-light-yellow-20 duration-100 py-2 border-border "
              >
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent className=" shadow-lg   ">
                <SelectItem value="contracts" className="cursor-pointer">
                  Contracts
                </SelectItem>
                <SelectItem value="tokens">Tokens</SelectItem>
                <SelectItem value="nfts">NFTs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* <hr className='horizontal-line my-9' /> */}

        <DataTable columns={columns} data={Data} onRowClick={() => {}} />
      </div>
    </div>
  )
}
