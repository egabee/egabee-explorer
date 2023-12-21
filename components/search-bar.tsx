/* eslint-disable max-len */
'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { PiBugFill } from 'react-icons/pi'
import { ChevronDown, Plus, PlusCircle, Search } from 'lucide-react'
// import { useSearch } from '@/hooks/useSearch'

// import { CombinedContract, CreateNewContract, isValidContractAddress, trackNewContract } from '@/lib/contract'
// import { CombinedWallet, NewWalletRequest, isValidWalletAddress, trackNewWallet } from '@/lib/wallet'
// import { CombinedToken, NewTokenRequest, isValidTokenAddress, trackNewToken } from '@/lib/token'
// import { fetchTxByHash, isValidTxHash } from '@/lib/transaction'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// import AddContractModal from '@/app/(dashboard)/dashboard/contracts/add-contract'
// import { CombinedNetwork, CreateNewNetwork, Network, trackNewNetwork } from '@/lib/network'
// import AddTokenModal from '@/app/(dashboard)/dashboard/tokens/add-token'
// import AddWalletModal from '@/app/(dashboard)/dashboard/wallets/add-wallet'
// import AddChainModal from '@/app/(dashboard)/dashboard/networks/add-chain'
// import NetworkEnv from '../network-env'
// import { useSearchContext } from '@/context/SearchContext'
// import { useWalletsContext } from '@/context/WalletsContext'
// import { useTokensContext } from '@/context/TokensContext'
// import { useNetworksContext } from '@/context/NetworksContext'
// import { useContractsContext } from '@/context/ContractsContext'
// import useGlobalMutation from '@/hooks/useGlobalMutation'

// type AllData = [Network[], CombinedNetwork[], CombinedContract[], CombinedToken[], CombinedWallet[]]

export default function SearchBar() {
  // const mutate = useGlobalMutation()

  const router = useRouter()
  // const { status } = useSession()
  const pathName = usePathname()

  const [key, setKey] = useState<string>('')

  // const { searchText, setSearchText } = useSearchContext()
  const [searchResults, setSearchResults] = useState<any[]>([])
  // const [supportedNetworksResults, setSupportedNetworksResults] = useState<Network[]>([])

  // const [supportedNetworks, setSupportedNetworks] = useState<Network[]>([])
  // const [Networks, setNetworks] = useState<CombinedNetwork[]>([])
  // const [Contracts, setContracts] = useState<CombinedContract[]>([])
  // const [Tokens, setTokens] = useState<CombinedToken[]>([])
  // const [Wallets, setWallets] = useState<CombinedWallet[]>([])

  const [currAddingNetworkId, setCurrAddingNetworkId] = useState<string>('')
  const [chosenLabel, setChosenLabel] = useState<string>('')
  const [target, setTarget] = useState<string>('')

  // const { data, error, isLoading } = useSearch(key)

  // const { walletsData, isLoading: walletsIsLoading, error: walletsError } = useWalletsContext()
  // const { tokensData, isLoading: tokensIsLoading, error: tokensError } = useTokensContext()
  // const { networksData, isLoading: chainsIsLoading, error: networksError } = useNetworksContext()
  // const { contractsData, isLoading: contractsIsLoading, error: contractsError } = useContractsContext()


  // console.log('allData', allData)
  // console.log('key', key)
  // console.log('target', target)
  // console.log('searchText', searchText)
  // console.log('search data', data)
  // console.log('chosenLabel', chosenLabel)
  // console.log('currAddingNetworkId', currAddingNetworkId)
  // console.log('searchResults', searchResults)
  // console.log('chosenLabel', chosenLabel)
  // console.log('supportedNetworks', supportedNetworks)
  // console.log('supportedNetworksResults', supportedNetworksResults)
  // console.log('Networks', Networks)
  // console.log('Contracts', Contracts)
  // console.log('Tokens', Tokens)
  // console.log('Wallets', Wallets)
  // console.log('txhash', txHash)
  // console.log(
  //   'network is supported ?', supportedNetworks.some(({ env, name }) =>
  //       name.toLowerCase().includes(searchText.toLowerCase()) || env.toLowerCase().includes(searchText.toLowerCase())))
  // console.log('isExistingContract', isExistingContract)
  // console.log('isExistingWallet', isExistingWallet)
  // console.log('isExistingToken', isExistingToken)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey('')
    setSearchResults([])
    // setSupportedNetworksResults([])
    // setSearchText(e.target.value.trim())
  }

  // const navToItem = (ID: string) => {
  //   if (!target) return

  //   if (
  //     !isExistingContract() &&
  //     !isExistingToken() &&
  //     !isExistingWallet(searchResults[0]?.id) &&
  //     // !isValidTxHash(searchText) &&
  //     !isExistingNetwork(ID)
  //   ) {
  //     if (target == 'transactions' && ID) {
  //       router.push(`/dashboard/view?target=${target}&key=${ID}`)
  //     } else if (target !== 'transactions' && target !== 'networks' && key) {
  //       router.push(`/dashboard/view?target=${target}&key=${key}`)
  //     } else if (target == 'networks') {
  //       router.push(`/dashboard/view?target=${target}&key=${ID}`)
  //     }

  //     // setSearchText('')
  //     setSearchResults([])
  //   } else {
  //     // router.push(`/dashboard/${target}?id=${searchText}`)
  //     // setSearchText('')
  //     setSearchResults([])
  //   }
  // }

  // const clearSearch = () => {
  //   // setSearchText('')
  //   setKey('')
  // }

  // const openModule = (e: React.MouseEvent<HTMLElement | SVGSVGElement>, chosen: string, id?: string) => {
  //   e.stopPropagation()
  //   setTarget(chosen)
  //   setChosenLabel(chosen)
  //   if (id) {
  //     setCurrAddingNetworkId(id)
  //   }
  // }

  // const handleOnContractSave = async (data: CreateNewContract) => {
  //   const { error, contract } = await trackNewContract(data)

  //   if (error) {
  //     return { error: error }
  //   }

  //   if (contract) {
  //     mutate((key) => typeof key === 'string' && key.includes('/api/0/user/contracts/'))

  //     clearSearch()
  //     setChosenLabel('')
  //     return { contract: contract }
  //   }
  //   return { error: { error: 'could not create new contract' } }
  // }

  // const handleOnTokenSave = async (data: NewTokenRequest) => {
  //   const { error, token } = await trackNewToken(data)

  //   if (error) {
  //     return { error: error }
  //   }

  //   if (token) {
  //     mutate((key) => typeof key === 'string' && key.includes('/api/0/user/tokens/'))

  //     clearSearch()
  //     setChosenLabel('')
  //     return { token: token }
  //   }
  //   return { error: { error: 'could not create new token' } }
  // }

  // const handleOnWalletSave = async (data: NewWalletRequest) => {
  //   const { error, wallet } = await trackNewWallet(data)

  //   if (error) {
  //     return { error: error }
  //   }

  //   if (wallet) {
  //     mutate((key) => typeof key === 'string' && key.includes('/api/0/user/wallets/'))

  //     clearSearch()
  //     setChosenLabel('')
  //     return { wallet: wallet }
  //   }
  //   return { error: { error: 'could not create new wallet' } }
  // }

  // const handleOnNetworkSave = async (data: CreateNewNetwork) => {
  //   const { error, network } = await trackNewNetwork(data)

  //   if (error) {
  //     return { error: error }
  //   }

  //   if (network) {
  //     mutate((key) => typeof key === 'string' && (key.includes('/api/0/networks/') || key.includes('/api/0/user/networks/')))

  //     clearSearch()
  //     setChosenLabel('')
  //     return { network: network }
  //   }
  //   return { error: { error: 'could not create new network' } }
  // }

  // function isExistingNetwork(id: string) {
  //   if (!Networks || !id) return

  //   return Networks?.some(({ userNetwork }) => userNetwork.networkId === id)
  // }

  // function isSupportedNetwork(id: string) {
  //   if (!Networks || !id) return
  //   return Networks?.some(({ network }) => network.id === id)
  // }

  // function isExistingToken() {
  //   if (!Tokens || !searchResults[0]?.tokenAddress) return
  //   return Tokens?.some(
  //     ({ token, userToken }) => userToken.tokenId == token.id && token.tokenAddress == searchResults[0]?.tokenAddress
  //   )
  // }


  // function isExistingWallet(address?: string) {
  //   return Wallets?.some(({ network, wallet }) => wallet?.address == address)

  // }

  // function isExistingContract() {
  //   if (!Contracts || !searchResults[0]?.contractAddress) return
  //   return Contracts?.some(
  //     ({ contract, userContract }) =>
  //       userContract.contractId == contract.id && contract.contractAddress == searchResults[0]?.contractAddress
  //   )
  // }

  // handle auth
  // useEffect(() => {
  //   if (status !== 'loading' && status === 'unauthenticated') {
  //     router.push('/login')
  //   }
  // }, [router, status])

  // handle search req (set api key search)
  // useEffect(() => {
  //   const isValidKey = (searchText: string) => {
  //     return (
  //       isValidTxHash(searchText) ||
  //       isValidWalletAddress(searchText) ||
  //       isValidContractAddress(searchText) ||
  //       isValidTokenAddress(searchText) ||
  //       isSupportedNetwork(supportedNetworksResults[0]?.id)
  //     )
  //   }

  //   if (searchText && isValidKey(searchText)) {
  //     setKey(searchText)
  //   } else if (
  //     // if network supported
  //     searchText &&
  //     supportedNetworks?.some(
  //       ({ env, name }) =>
  //         name.toLowerCase() == searchText.toLowerCase() || env.toLowerCase() == searchText.toLowerCase()
  //     )
  //   ) {
  //     // find the network which the user searching for
  //     setSupportedNetworksResults(
  //       supportedNetworks?.filter(
  //         ({ env, name }) =>
  //           name.toLowerCase() == searchText.toLowerCase() || env.toLowerCase() == searchText.toLowerCase()
  //       )!
  //     )
  //   } else {
  //     console.log('wrong search input')
  //   }
  // }, [searchText])

  // // Destruct search Data
  // useEffect(() => {
  //   if (data) {
  //     setSearchResults(
  //       Object.values(data)
  //         .filter((item: any) => item?.length! > 0 || (item && Object.entries(item).length > 0))
  //         .flatMap((arr: any) => arr || [])
  //     )
  //   }
  // }, [data])

  // //Get User Items
  // //extract main data
  // useEffect(() => {
  //   if (walletsData && tokensData && networksData && contractsData) {
  //     setSupportedNetworks(networksData[0])
  //     setNetworks(networksData[1])
  //     setContracts(contractsData)
  //     setTokens(tokensData)
  //     setWallets(walletsData)
  //   }
  // }, [walletsData, tokensData, networksData, contractsData, walletsError, tokensError, networksError, contractsError])

  // // check if there is tx with the hash entered in search
  // useEffect(() => {
  //   if (!data?.[0]?.tx?.blockNumber) {
  //     return
  //   }
  //   async function getTxs(id: string) {
  //     if (!id) return
  //     const tx = await fetchTxByHash(id)
  //     console.log(tx)
  //   }
  //   getTxs(searchResults[0]?.id!)
  // }, [data, searchResults])

  // // set target in url
  // useEffect(() => {
  //   if (searchResults[0]?.contractAddress) {
  //     setTarget('contracts')
  //   }
  //   if (searchResults[0]?.tokenAddress) {
  //     setTarget('tokens')
  //   }
  //   if (searchResults[0] && Object.keys(searchResults[0]).length === 1 && 'id' in searchResults[0]) {
  //     setTarget('wallets')
  //   }

  //   if (isValidTxHash(searchText)) {
  //     setTarget('transactions')
  //   }
  //   if (supportedNetworksResults?.length > 0) {
  //     setTarget('networks')
  //   }
  // }, [data, searchResults, supportedNetworksResults, searchText, Networks])

  // if (pathName === '/login' || pathName === '/') {
  //   return null
  // }

  return (
    <div className='mt-40 flex justify-center flex-col '>
      <div>
        <p className='font-bold text-5xl text-center mb-5 text-light-yellow '>SEARCH</p>
      </div>
      <div className="flex justify-center w-full  text-white py-2 pl-5 sm:px-5 sm:py-2  z-70  ">
        {/* ----------------------------------SEARCH-BAR-------------------------------- */}
        <div className="flex justify-center w-full">
          <div
            className={clsx(`relative flex justify-center items-center py-1 px-2 md:w-1/2 w-4/5 
          border border-light-white rounded-sm gap-x-2 `)}
          >
            <div className="flex items-center">
              <span className="text-[#9A999F] cursor-pointer hover:text-gray-100">
                <Search size={20} />
              </span>
            </div>

            <input
              className={clsx(
                `p-1 text-white w-full h-12 bg-[#19191A] border-none hover:ring-0 focus:outline-none focus:ring-0`
              )}
              type="text"
              placeholder="Search for any transaction or address"
              // value={searchText}
              onChange={changeHandler}
            />
            {/* {searchText.length > 0 && !error && (
            <div className="max-h-44 overflow-y-auto  yellow-scroll   absolute left-0 top-[105%] border border-light-white border-t-0  shadow-black shadow-md py-1 w-full bg-[#19191A]  rounded-b-sm">
              {searchResults?.length > 0 ? (
                searchResults.map((item: any, i: number) => (
                  <div
                    key={i}
                    onClick={() => navToItem(item.id)}
                    className={`px-4 py-3 flex justify-between items-center   text-[10px] sm:text-xs   max-w-full

                      ${i % 2 ? 'bg-[#19191A]' : 'bg-shark-40'} cursor-pointer 
                      ${!isExistingContract() &&
                        !isExistingToken() &&
                        !isExistingWallet(item.id) &&
                        !isValidTxHash(searchText)
                        ? 'text-[#9A999F]'
                        : 'text-white hover:bg-[#504f57] '

                      }
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
                    {!isExistingContract() &&
                      !isExistingToken() &&
                      !isExistingWallet(item.id) &&
                      !isValidTxHash(searchText) && (
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            {' '}
                            <PlusCircle size={16} className="text-supernova hover:text-yellow-300" />{' '}
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className={clsx(
                              `bg-shark-40 shadow-black rounded-sm border border-light-white shadow-md  text-athens-gray`
                            )}
                          >
                            <DropdownMenuItem
                              className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
                              onClick={(e) => openModule(e, 'contracts', item.id || item.chainId)}
                            >
                              <Plus size={13} /> Contract
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-light-white opacity-20" />
                            <DropdownMenuItem
                              className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
                              onClick={(e) => openModule(e, 'wallets', item.id || item.chainId)}
                            >
                              <Plus size={13} /> Wallet
                            </DropdownMenuItem>

                            <DropdownMenuSeparator className="bg-light-white opacity-20" />
                            <DropdownMenuItem
                              className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
                              onClick={(e) => openModule(e, 'tokens', item.id || item.chainId)}
                            >
                              <Plus size={13} /> Token
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                  </div>
                ))
              ) : // else if its network name or env and user already following it  (no search data from api)

                supportedNetworksResults?.length ? (
                  supportedNetworksResults.map(({ id, name, env, chainId }, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => navToItem(id)}
                        className={`px-4 py-3 flex justify-between items-center   text-[10px] sm:text-xs   max-w-full cursor-pointer

                      ${i % 2 ? 'bg-[#19191A]' : 'bg-shark-40'}
                      ${!isExistingNetwork(id) ? 'text-[#9A999F]' : ' hover:bg-[#504f57] text-white'}
                      `}
                      >
                        <div>
                          <div className="flex items-start">{name}</div>
                          <div className="flex flex-row items-center gap-x-3 text-xs mt-1">
                            <NetworkEnv env={env} />
                            <div>{chainId}</div>
                          </div>
                        </div>
                        {!isExistingNetwork(id) && (
                          <PlusCircle
                            size={16}
                            className="text-supernova cursor-pointer hover:text-yellow-300"
                            onClick={(e) => openModule(e, 'networks', id)}
                          />
                        )}
                      </div>

                    )
                  })
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {isLoading || walletsIsLoading || tokensIsLoading || chainsIsLoading || contractsIsLoading ? (
                      <div className="py-2">
                        <Spinner />{' '}
                      </div>
                    ) : (
                      <div className="text-[#9A999F] text-sm py-2 flex justify-center items-center gap-2 mx-3">
                        Whoops! This address is wandering off the map. Try another!
                      </div>
                    )}
                  </div>
                )}

            </div>
          )} */}
          </div>
        </div>
        {/* ----------------------------------ADD-BTN-------------------------------- */}
        {/* <DropdownMenu>
        <DropdownMenuTrigger className="border-none focus:border-none focus:ring-0 focus:outline-0">
          {' '}
          <div className="flex text-sm text-supernova gap-1 border border-supernova hover:bg-supernova hover:text-black rounded-md px-2 py-2 mr-3 sm:mr-0">
            <ChevronDown size={18} className="self-end" /> Add
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={clsx(`bg-shark-40 shadow-black rounded-sm border border-light-white shadow-md  text-athens-gray`)}
        >
          <DropdownMenuItem
            className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
            onClick={(e) => openModule(e, 'networks')}
          >
            <Plus size={13} /> Network
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-light-white opacity-20" />
          <DropdownMenuItem
            className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
            onClick={(e) => openModule(e, 'contracts')}
          >
            <Plus size={13} /> Contract
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-light-white opacity-20" />
          <DropdownMenuItem
            className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
            onClick={(e) => openModule(e, 'wallets')}
          >
            <Plus size={13} /> Wallet
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-light-white opacity-20" />
          <DropdownMenuItem
            className="focus:bg-supernova rounded-none text-[#9A999F] text-xs flex justify-start items-center gap-1 cursor-pointer"
            onClick={(e) => openModule(e, 'tokens')}
          >
            <Plus size={13} /> Token
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}

        {/* -------------------------------------------ADD NEW ITEM MODELS ------------------------------------ */}
        {/* {chosenLabel === 'contracts' && (
        <AddContractModal
          defaultAddress={searchText}
          defaultChainId={supportedNetworks.find(({ id }) => id === searchResults[0]?.networkId)?.chainId}
          networks={supportedNetworks}
          isVisible={chosenLabel === 'contracts'}
          onSave={handleOnContractSave}
          closeModal={() => setChosenLabel('')}
        />
      )}
      {chosenLabel === 'wallets' && (
        <AddWalletModal
          defaultAddress={searchText}
          defaultNetworkId={supportedNetworks.find(({ id }) => id === searchResults[0]?.networkId)?.id}
          networks={supportedNetworks}
          onSave={handleOnWalletSave}
          isVisible={chosenLabel === 'wallets'}
          closeModal={() => setChosenLabel('')}
        />
      )}
      {chosenLabel === 'tokens' && (
        <AddTokenModal
          defaultAddress={searchText}
          defaultChainId={supportedNetworks.find(({ id }) => id === searchResults[0]?.networkId)?.chainId}
          networks={supportedNetworks}
          onSave={handleOnTokenSave}
          isVisible={chosenLabel === 'tokens'}
          closeModal={() => setChosenLabel('')}
        />
      )}
      {chosenLabel === 'networks' && (
        <AddChainModal
          defaultID={currAddingNetworkId}
          networks={supportedNetworks}
          onSave={handleOnNetworkSave}
          isVisible={chosenLabel === 'networks'}
          closeModal={() => setChosenLabel('')}
        />
      )} */}
      </div>
    </div>
  )
}
