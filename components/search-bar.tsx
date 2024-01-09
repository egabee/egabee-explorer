/* eslint-disable max-len */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { isValidContractAddress } from "@/lib/contract";
import { isValidTokenAddress } from "@/lib/token";
import { useSearchContext } from "@/context/SearchContext";
import { isValidTxHash } from "@/lib/transaction";
import Spinner from "./ui/spinner";
import { isValidWalletAddress } from "@/lib/wallet";

export default function SearchBar({ mainSearch }: {mainSearch:boolean}) {
  const router = useRouter();

  const [key, setKey] = useState<string>("");

  const { searchText, setSearchText } = useSearchContext();

  const [searchResults, setSearchResults] = useState<any[]>([]);


  const [target, setTarget] = useState<string>("");

  const { data, error, isLoading } = useSearch(key);


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey("");
    setSearchResults([]);
    setSearchText(e.target.value.trim());
  };

  const navToItem = (ID: string) => {
    if (!target || !ID) return;

    if (target == "transactions" && ID) {
      router.push(`/explorer/view?target=${target}&key=${ID}`);
    } else if (target !== "transactions" && target !== "networks" && key) {
      router.push(`/explorer/view?target=${target}&key=${key}`);
    } else if (target == "networks") {
      router.push(`/explorer/view?target=${target}&key=${ID}`);
    }

      setSearchText("");
      setSearchResults([]);
  };

  const clearSearch = () => {
    setSearchText("");
    setKey("");
  };


  // handle search req (set api key search)
  useEffect(() => {
    const isValidKey = (searchText: string) => {
      return (
        isValidTxHash(searchText) ||
        isValidWalletAddress(searchText) ||
        isValidContractAddress(searchText) ||
        isValidTokenAddress(searchText) 
      )
    };

    if (searchText && isValidKey(searchText)) {
      setKey(searchText);
    } else {
      console.log("wrong search input");
    }
  }, [searchText]);

  // Destruct search Data
  useEffect(() => {
    if (data) {
      setSearchResults(
        Object.values(data)
          .filter(
            (item: any) =>
              item?.length! > 0 || (item && Object.entries(item).length > 0)
          )
          .flatMap((arr: any) => arr || [])
      );
    }
  }, [data]);

  // set target in url
  useEffect(() => {
    if (searchResults[0]?.contractAddress) {
      setTarget('contracts')
    }
    if (searchResults[0]?.tokenAddress) {
      setTarget('tokens')
    }
    if (searchResults[0] && Object.keys(searchResults[0]).length === 1 && 'id' in searchResults[0]) {
      setTarget('wallets')
    }

    if (isValidTxHash(searchText)) {
      setTarget('transactions')
    }
  }, [data, searchResults, searchText])

  return (
    <div
      className={clsx(`z-[9999] relative flex justify-center items-center py-1 px-2 md:w-3/4 w-4/5 mx-auto
          border border-light-white rounded-sm gap-x-2  `)}
    >
      <div className="flex items-center">
        <span className="text-[#9A999F] cursor-pointer hover:text-gray-100">
          <Search size={20} />
        </span>
      </div>

      <input
        className={clsx(
          `p-1 text-white w-full ${
            mainSearch && "h-12"
          } bg-[#19191A] border-none hover:ring-0 focus:outline-none focus:ring-0`
        )}
        type="text"
        placeholder="Search for any transaction or address"
        value={searchText}
        onChange={changeHandler}
      />
      {searchText.length > 0 && !error && (
        <div className="max-h-44 overflow-y-auto  yellow-scroll   absolute left-0 top-[105%] border border-light-white border-t-0  shadow-black shadow-md py-1 w-full bg-[#19191A]  rounded-b-sm">
          {searchResults?.length > 0 ? (
            searchResults.map((item: any, i: number) => (
              <div
                key={i}
                onClick={() => navToItem(item.id)}
                className={` px-4 py-3 flex justify-between items-center   text-[10px] sm:text-xs   max-w-full
                      ${i % 2 ? "bg-[#19191A]" : "bg-shark-40"} cursor-pointer 
                      `}
              >
                <p className="truncate">
                  {item.blockNumber
                    ? item.id
                    : item.name ||
                      item.displayName ||
                      item.contractName ||
                      item.tokenAddress ||
                      item.address ||
                      item.contractAddress ||
                      item.id}
                </p>
              </div>
            ))
          ) :(
            <div className="flex items-center justify-center h-full">
              {isLoading ? (
                <div className="py-2">
                  <Spinner />{" "}
                </div>
              ) : (
                <div className="text-[#9A999F] text-sm py-2 flex justify-center items-center gap-2 mx-3">
                  Whoops! This address is wandering off the map. Try another!
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
