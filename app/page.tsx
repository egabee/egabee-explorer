"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Token, Contract } from "@/lib/types";
import { DataTable } from "@/components/ui/data-table";
// import { columns } from './columns'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchBar from "@/components/search-bar";
import SiteHeader from "@/components/siteHeader";
import { useSearchContext } from "@/context/SearchContext";
import { usePathname } from "next/navigation";

function getNetworkName(networkId: string) {
  return networkId === "527339fa-ca4b-4eb0-8b6a-a53a6e5fac25"
    ? "Coreum(mainnet)"
    : "Coreum(testnet)";
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectConteract, setSelectContract] = React.useState(false);
  const [selectToken, setSelectToken] = React.useState(false);
  const [selectnft, setSelectnft] = React.useState(false);
  const [useEndpoint, setUseEndpoint] = React.useState("");
  const [Data, setData] = React.useState<
    { id: string; name: string; address: string; network: string }[]
  >([]);

  // Default is mainnet
  const [networkId, setNetworkId] = React.useState<string>(
    "527339fa-ca4b-4eb0-8b6a-a53a6e5fac25"
  );
  const pathname = usePathname();

  const [key, setKey] = React.useState("contracts");

  // const Fetchdata = (data: string) => {
  // React.useEffect(() => {
  //   if (key === 'contracts') {
  //     const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`

  //     const getdata = async () => {
  //       const resp = await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)
  //       const data: Contract[] = resp.data

  //       console.log(data)
  //       setData(
  //         data.map(({ contractAddress, id, contractName }, index) => ({
  //           id: index.toString(),
  //           address: contractAddress,
  //           name: contractName,
  //           network: getNetworkName(networkId),
  //         }))
  //       )
  //     }

  //     getdata()
  //   } else if (key === 'tokens') {
  //     const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`
  //     const getdata = async () => {
  //       const data: Token[] = await (await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)).data
  //       setData(
  //         data
  //           .filter((item) => item.symbol !== 'ucore')
  //           .map(({ id, name, networkId, tokenAddress }, index) => ({
  //             id: index.toString(),
  //             name: name,
  //             address: tokenAddress,
  //             network: getNetworkName(networkId),
  //           }))
  //       )
  //     }
  //     getdata()
  //   }

  // }, [selectConteract, selectToken, useEndpoint, networkId, key])
  const { searchText, setSearchText } = useSearchContext();
  const isExplorerPage = pathname === "/explorer";

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <SiteHeader  />
      <div className="flex justify-center w-full  text-white py-2 pl-5 sm:px-5 sm:py-2  z-70  ">
        <div className="mt-40 flex justify-center flex-col ">
          <p className="font-bold text-5xl text-center mb-6 text-light-yellow ">
            Your Gateway to Digital Assets!
          </p>
          <SearchBar mainSearch={true} />
        </div>
      </div>
    </div>
  );
}
