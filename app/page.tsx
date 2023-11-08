"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import ky from "ky";
import { CombinedContract, CreateNewContract, UserContract, Contract, General } from '@/lib/contract'
import { Token } from '@/lib/token'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createUrl } from "@/lib/fetcher";
import Fetchdata from '@/lib/fetch-data';
import axios from "axios";

const data1 = [{
  id: "1",
  address: "bnbhnbhjgbhjbjhb",
  name: "ddddd",
  network: "courem"
},
{
  id: "2",
  address: "bnbhnbhjgbhjbjhb",
  name: "ddddd",
  network: "courem"
},
]









export default function Home() {
  const [userContracts, setUserContracts] = React.useState<Contract[]>([])
  const [userToken, setUserToken] = React.useState<Token[]>([])
  const [usedata, setUsedata] = React.useState<General[]>([])
  const [post, setPost] = React.useState(null);
  const [selectConteract, setSelectContract] = React.useState(false)
  const [selectToken, setSelectToken] = React.useState(false)
  const [useEndpoint, setUseEndpoint] = React.useState("")


  // const Fetchdata = (data: string) => {
  React.useEffect(() => {
    if (selectConteract == true) {
      const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/contracts/"
      const getdata = async () => {
        axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`).then((response) => {
          setUserContracts(response.data);
        })
      }


      getdata();
    } else if (selectToken == true) {
      const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/tokens/"

      const getdata = async () => {
        axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`).then((response) => {

          setUserToken(response.data);
        });
      }
      getdata();

    };

  }, [selectConteract, selectToken, useEndpoint]);


  // React.useEffect(() => {
  //   const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/tokens/"
  //   const getdata = async () => {
  //     axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`).then((response) => {
  //       setUserToken(response.data);


  //     });
  //   };
  //   getdata();
  // }, [selectToken]);




  const SelectApi = (api: string) => {
    if (api === "contract") {
      setSelectContract(true)
      setSelectToken(false)
    }
    else if (api === "token") {
      // const endpoint = "/api/0/explorer/networks/527339fa-ca4b-4eb0-8b6a-a53a6e5fac25/tokens/"
      setSelectToken(true)
      setSelectContract(false)
    }

  }






  // SelectApi("contract")
  // SelectApi("token")






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

        {/* usedata.map(({ id, contractName, networkId }) => ({
            id: id,
            name: contractName,
            address: null,
            network: networkId,
          })) */}
        {(!selectConteract && !selectToken) && (
          <DataTable
            columns={columns}

            data={[]}
            onRowClick={function (id: string, index: number): void {
              throw new Error('Function not implemented.')
            }} />
        )}
        {selectConteract && (
          <DataTable
            columns={columns}

            data={userContracts.map(({ id, contractName, networkId }) => ({
              id: id,
              name: contractName,
              address: "",
              network: networkId,
            }))}
            onRowClick={function (id: string, index: number): void {
              throw new Error('Function not implemented.')
            }} />

        )}
        {selectToken && (
          <DataTable
            columns={columns}

            data={userToken.map(({ id, name, networkId, tokenAddress }) => ({
              id: id,
              name: name,
              address: tokenAddress,
              network: networkId,
            }))}
            onRowClick={function (id: string, index: number): void {
              throw new Error('Function not implemented.')
            }} />
        )

        }

      </div >
    </div>

  )
}


