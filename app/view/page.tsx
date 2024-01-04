'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSearch } from '@/hooks/useSearch'
import { Network } from '@/lib/network'
import { CombinedToken, TokenDetails, fetchInsightData, mapToTokenDetails } from '@/lib/token'
import { useChains } from '@/hooks/useChains'
import { CombinedWallet } from '@/lib/wallet'
import { CombinedContract } from '@/lib/contract'
import { TokensInsights } from '@/lib/types'
import GoBack from '@/components/ui/go-back'
import TokenDetailsPage from './token-details'
import TransactionDetails from './transaction-details'
import ContractDetailsPage from './contract-details'
import NetworkDetailsPage from './network-details'
import WalletDetailsPage from './wallet-details'



export default function View() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [key, setKey] = useState<string | null>(null)
  const [target, setTarget] = useState<string | null>(null)

  const [insights, setInsights] = useState<TokensInsights[]>([])
  const [networks, setNetworks] = useState<Network[]>([])

  const [tokenDetails, setTokenDetails] = useState<TokenDetails | null>(null)
  const [token, setToken] = useState<CombinedToken>()

  const [contract, setContract] = useState<CombinedContract>()

  const [wallet, setWallet] = useState<CombinedWallet>()

  const [network, setNetwork] = useState<Network>()
  const [supportedNetworks, setSupportedNetworks] = useState<Network[]>()

  const { data, error, isLoading } = useSearch(key!)


  const { data:networksData, isLoading: chainsIsLoading, error: networksError } = useChains()


  useEffect(() => {
    setKey(searchParams.get('key'))
    setTarget(searchParams.get('target'))
  }, [searchParams])

  // Tokens
  useEffect(() => {
    if (key && data?.tokens && target === 'tokens') {
      if (!networksData) return

      setNetworks(networksData[0])
      setToken(data.tokens[0])

      if (data.tokens[0] && data.tokens[0].token) {
        const getInsigths = async () => {
          try {
            const result = await fetchInsightData(data.tokens[0].token.tokenAddress)
            if (result) {
              setInsights(result)
            }
          } catch (error) {
            console.error('Error fetching insights data:', error)
          }
        }
        getInsigths()

        setTokenDetails(mapToTokenDetails(data.tokens[0]))
      }
    }
  }, [data, key, networksData, target])

  // Contracts
  useEffect(() => {
    if (key && data?.contracts && target === 'contracts') {
      if ( !networksData) return

      setNetworks(networksData[0])
      setContract(data.contracts[0])

      if (data.contracts[0] && data.contracts[0].contract) {
        const getInsigths = async () => {
          try {
            const result = await fetchInsightData(data.contracts[0].contract.contractAddress)
            if (result) {
              setInsights(result)
            }
          } catch (error) {
            console.error('Error fetching insights data:', error)
          }
        }
        getInsigths()
      }
    }
  }, [data, key, networksData, target])

  // Wallets
  useEffect(() => {
    if (key && data?.wallets && target === 'wallets') {
      if ( !networksData) return

      setNetworks(networksData[0])
      setWallet(data.wallets[0])

      if (data.wallets[0] && data.wallets[0].wallet) {
        const getInsigths = async () => {
          try {
            const result = await fetchInsightData(data.wallets[0].wallet.walletAddress)
            if (result) {
              setInsights(result)
            } else {
              setInsights([])
            }
          } catch (error) {
            console.error('Error fetching insights data:', error)
          }
        }
        getInsigths()
      }
    }
  }, [data, key, networksData, target])

  // Networks
  useEffect(() => {
    if (target === 'networks') {
      if (!networksData) return
      setSupportedNetworks(networksData[0])
      const theNetwork = supportedNetworks?.find((network) => network.id == key)
      if (!theNetwork) return

      setNetwork(theNetwork)
    }
  }, [key, networksData, supportedNetworks, target])

  if (!key) {
    return <></>
  }

  // console.log('search data view', data)
  // console.log('token view', token)
  // console.log('wallet view', wallet)
  // console.log('insights view', insights)
  // console.log('contract view', contract)
  // console.log('key', key)
  // console.log('network', network)
  // console.log('supportedNetworks', supportedNetworks)
  // console.log('target', target)

  if (key && data?.tx && target === 'transactions') {
    return (
      <div className="py-8 px-1 md:px-4 mx-2 md:mx-8 w-[95%]">
        <div
          onClick={() => {
            router.push('/dashboard/transactions')
          }}
          className="cursor-pointer w-12"
        >
          <GoBack title={''} />
        </div>
        <TransactionDetails details={data?.tx} />
      </div>
    )
  }
  // -----------------------------------------------------------
  if (key && data?.tokens && token && target === 'tokens') {
    return (
      <div className="py-8 px-1 md:px-4 mx-2 md:mx-8 w-[95%]">
        <div
          onClick={() => {
            router.push('/dashboard/tokens')
          }}
          className="cursor-pointer w-12"
        >
          <GoBack title={''} />
        </div>
        <TokenDetailsPage
          tokenDetails={tokenDetails}
          insights={insights}
          networks={networks}
          selectedRow={token}
          setShowRenameModal={() => {}}
          setShowDeleteModal={() => {}}
          added={false}
        />
      </div>
    )
  }
  // -----------------------------------------------------------
  if (key && data?.contracts && contract && target === 'contracts') {
    return (
      <div className="py-8 px-1 md:px-4 mx-2 md:mx-8 w-[95%]">
        <div
          onClick={() => {
            router.push('/dashboard/contracts')
          }}
          className="cursor-pointer w-12"
        >
          <GoBack title={''} />
        </div>
        <ContractDetailsPage
          insights={insights}
          networks={networks}
          selectedRow={contract}
          setShowRenameModal={() => {}}
          setShowDeleteModal={() => {}}
          setShowUploadJSONModal={() => {}}
          added={false}
        />
      </div>
    )
  }
  // -----------------------------------------------------------
  if (key && data?.wallets && wallet && target === 'wallets') {
    return (
      <div className="py-8 px-1 md:px-4 mx-2 md:mx-8 w-[95%]">
        <div
          onClick={() => {
            router.push('/dashboard/wallets')
          }}
          className="cursor-pointer w-12"
        >
          <GoBack title={''} />
        </div>
        <WalletDetailsPage
          insights={insights}
          selectedRow={wallet}
          setShowRenameModal={() => {}}
          setShowDeleteModal={() => {}}
          added={false}
        />
      </div>
    )
  }

  if (key && network && supportedNetworks && target === 'networks') {
    return (
      <div className="py-8 px-1 md:px-4 mx-2 md:mx-8 w-[95%]">
        <div
          onClick={() => {
            router.push('/dashboard/networks')
          }}
          className="cursor-pointer w-12"
        >
          <GoBack title={''} />
        </div>
        <NetworkDetailsPage
          insights={insights}
          selectedRow={network}
          supportedNetworks={supportedNetworks}
          setShowRenameModal={() => {}}
          setShowDeleteModal={() => {}}
          added={false}
        />
      </div>
    )
  }
  // -----------------------------------------------------------
}
