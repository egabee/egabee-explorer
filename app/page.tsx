"use client"
import React, { useEffect } from 'react'
import { Token, Contract } from '@/lib/types'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import axios from "axios";








export default function Home() {
  const [userContracts, setUserContracts] = React.useState<Contract[]>([])
  const [userToken, setUserToken] = React.useState<Token[]>([])
  const [post, setPost] = React.useState(null);
  const [selectConteract, setSelectContract] = React.useState(false)
  const [selectToken, setSelectToken] = React.useState(false)
  const [selectnft, setSelectnft] = React.useState(false)
  const [useEndpoint, setUseEndpoint] = React.useState("")
  const [Data, setData] = React.useState<{ id: string, name: string, address: string, network: string }[]>([])


  // const Fetchdata = (data: string) => {
  React.useEffect(() => {
    if (selectConteract == true) {
      const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/contracts/"
      const getdata = async () => {
        const data: Contract[] = await (await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)).data
        console.log(data)
        setData(
          data.map(({ contractAddress, id, contractName, networkId }) => ({
            id,
            address: contractAddress,
            name: contractName,
            network: networkId,
          }))
        )
      }


      getdata();
    } else if (selectToken == true) {
      const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/tokens/"
      const getdata = async () => {
        const data: Token[] = await (await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)).data
        setData(
          data.map(({ id, name, networkId, tokenAddress }) => ({
            id: id,
            name: name,
            address: tokenAddress,
            network: networkId,
          }))
        )
      }
      getdata();

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

  }, [selectConteract, selectToken, useEndpoint]);







  const SelectApi = (api: string) => {
    if (api === "contract") {
      setSelectContract(true)
      setSelectToken(false)
    }
    else if (api === "token") {

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
      <div className='container' >
        <div className="flex justify-between mb-4">
          {/* <div className="flex justify-end">
          </div> */}

          <div className="flex justify-end">
            <Select onValueChange={(value) => SelectApi(value)}  >
              <SelectTrigger className="w-[180px] cursor-pointer h-10 text-sm font-semibold  text-white bg-special
          rounded-lg  hover:bg-light-yellow-20 duration-100 py-2 border-border ">
                <SelectValue placeholder="Options" />
              </SelectTrigger>
              <SelectContent className=' shadow-lg   '>
                <SelectItem value="contract" className="cursor-pointer"

                >contract</SelectItem>
                <SelectItem value="token" >token</SelectItem>
                <SelectItem value="nft">nft</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
        {/* <hr className='horizontal-line my-9' /> */}


        <DataTable
          columns={columns}
          data={Data}
          onRowClick={function (id: string, index: number): void {
            throw new Error('Function not implemented.')
          }} />



      </div >
    </div>

  )
}


