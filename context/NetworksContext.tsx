'use client'

import { createContext, useContext, useEffect } from 'react'
import { useChains } from '@/hooks/useChains'
import { Network } from '@/lib/network'

interface NetworksContextProps {
  children: React.ReactNode
}

interface NetworksContextValue {
  chainsData: Network[] | undefined
  isLoading: boolean
  error: { error: string }
}

const NetworksContext = createContext<NetworksContextValue>({
  chainsData: undefined,
  isLoading: false,
  error: { error: '' },
})

export const NetworksProvider: React.FC<NetworksContextProps> = ({ children }) => {
  const { data: chainsData, error: chainsError, isLoading: chainsIsLoading } = useChains()
  // console.log('chainsData', chainsData)

  return (
    <NetworksContext.Provider value={{ chainsData, isLoading: chainsIsLoading, error: chainsError }}>
      {children}
    </NetworksContext.Provider>
  )
}

export const useNetworksContext = (): NetworksContextValue => useContext(NetworksContext)
export default NetworksContext
