'use client'

import { createContext, useContext, useState } from 'react'

interface ISearchContext {
  searchText:string
  setSearchText:(m:string)=> void
}
interface ISearchProviderProps {
  children: React.ReactNode
}
const SearchContext = createContext<ISearchContext>({
  searchText: '',
  setSearchText:(m)=> {} 
})

export const SearchProvider: React.FC<ISearchProviderProps> = ({ children }) => {
  const [searchText, setSearchText] = useState<string>('')



  return <SearchContext.Provider value={{searchText,setSearchText}}>{children}</SearchContext.Provider>
}

export const useSearchContext = () => {
  return useContext(SearchContext)
}

export default SearchContext
