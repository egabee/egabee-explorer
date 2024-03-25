'use client'

import { createContext, useContext, useEffect } from 'react'
import { useChains } from '@/hooks/useChains'
import { CombinedNetwork, Network } from '@/lib/network'

interface NetworksContextProps {
  children: React.ReactNode
}

interface NetworksContextValue {
  networksData: Network[] | undefined
  isLoading: boolean
  error: { error: string }
}

const NetworksContext = createContext<NetworksContextValue>({
  networksData: undefined,
  isLoading: false,
  error: { error: '' },
})

export const NetworksProvider: React.FC<NetworksContextProps> = ({ children }) => {
  const { data: chainsData, error: chainsError, isLoading: chainsIsLoading } = useChains()
  // console.log('chainsData',chainsData)

  const networksData: Network[] | undefined =
    chainsData && chainsData.length === 2 ? [chainsData[0], chainsData[1]] : undefined

  return (
    <NetworksContext.Provider value={{ networksData, isLoading: chainsIsLoading, error: chainsError }}>
      {children}
    </NetworksContext.Provider>
  )
}

export const useNetworksContext = (): NetworksContextValue => useContext(NetworksContext)
export default NetworksContext
