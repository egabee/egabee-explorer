"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Token, Contract } from "@/lib/types";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GoBack from "@/components/ui/go-back";
import { useSearchContext } from "@/context/SearchContext";
import SiteHeader from "@/components/siteHeader";

function getNetworkName(networkId: string) {
  return networkId === "527339fa-ca4b-4eb0-8b6a-a53a6e5fac25"
    ? "Coreum(mainnet)"
    : "Coreum(testnet)";
}

export default function Explorer() {
  const pathname = usePathname();
  const isExplorerPage = pathname === "/explorer";

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [selectConteract, setSelectContract] = useState(false);
  const [selectToken, setSelectToken] = useState(false);
  const [selectnft, setSelectnft] = useState(false);
  const [useEndpoint, setUseEndpoint] = useState("");
  const [Data, setData] = useState<
    { id: string; name: string; address: string; network: string }[]
  >([]);

  // Default is mainnet
  const [networkId, setNetworkId] = useState<string>(
    "527339fa-ca4b-4eb0-8b6a-a53a6e5fac25"
  );

  const [key, setKey] = useState("contracts");

  useEffect(() => {
    if (key === "contracts") {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`;

      const getdata = async () => {
        const resp = await axios.get(
          `${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`
        );
        const data: Contract[] = resp.data;

        console.log(data);
        setData(
          data.map(({ contractAddress, id, contractName }, index) => ({
            id: index.toString(),
            address: contractAddress,
            name: contractName,
            network: getNetworkName(networkId),
          }))
        );
      };

      getdata();
    } else if (key === "tokens") {
      const endpoint = `/api/0/explorer/networks/${networkId}/${key}/`;
      const getdata = async () => {
        const data: Token[] = await (
          await axios.get(`${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`)
        ).data;
        setData(
          data
            .filter((item) => item.symbol !== "ucore")
            .map(({ id, name, networkId, tokenAddress }, index) => ({
              id: index.toString(),
              name: name,
              address: tokenAddress,
              network: getNetworkName(networkId),
            }))
        );
      };
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
  }, [selectConteract, selectToken, useEndpoint, networkId, key]);

  const SelectApi = (api: string) => {
    if (api === "contract") {
      setSelectContract(true);
      setSelectToken(false);
    } else if (api === "token") {
      setSelectToken(true);
      setSelectContract(false);
    }
    // else if (api === "nft") {

    //   setSelectnft(true)
    //   setSelectContract(false)
    // }
  };
  const { searchText, setSearchText } = useSearchContext();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden" >
      <SiteHeader hideSearch={false} isExplorerPage={true} />

      <div className="py-2 px-4 mt-10" onClick={()=>setSearchText('')}>
        <div className="container">
          <div className="flex justify-between items-center mb-4 gap-2">
            {isExplorerPage && (
              <div
                onClick={() => {
                  router.push("/");
                }}
                className="cursor-pointer w-12"
              >
                <GoBack title={""} />
              </div>
            )}
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-end">
                <Select
                  defaultValue={networkId}
                  onValueChange={(value) => setNetworkId(value)}
                >
                  <SelectTrigger
                    className="flex items-center justify-center cursor-pointer h-10 text-sm font-semibold leading-6 
            rounded bg-transparent text-light-yellow  hover:text-black  border-light-yellow  hover:bg-light-yellow-20 duration-100"
                  >
                    <SelectValue placeholder="Select Network" />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg">
                    <SelectItem
                      value="527339fa-ca4b-4eb0-8b6a-a53a6e5fac25"
                      className="cursor-pointer"
                    >
                      Coreum Mainnet
                    </SelectItem>
                    <SelectItem value="27a28106-27ae-4bec-a956-f38bed27d84a">
                      Coreum Testnet
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end">
                <Select defaultValue={key} onValueChange={setKey}>
                  <SelectTrigger
                    className="flex items-center justify-center cursor-pointer h-10 text-sm font-semibold leading-6 text-black border-none
                                rounded bg-light-yellow hover:bg-light-yellow-20 duration-100"
                  >
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent className="shadow-lg">
                    <SelectItem value="contracts" className="cursor-pointer">
                      Contracts
                    </SelectItem>
                    <SelectItem value="tokens">Tokens</SelectItem>
                    <SelectItem value="nfts">NFTs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DataTable columns={columns} data={Data} onRowClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
