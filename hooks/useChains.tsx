import { fetcher } from '@/lib/fetcher'
import useSWR from 'swr'

export function useChains() {
  const urls = '/api/0/explorer/networks/'

  const { data, isLoading, error } = useSWR(urls, fetcher)

  const combinedError = data && data.length && data[0].error ? `${error} ${data[0].error}` : error
  // console.log('data', data)

  return { data, isLoading, error: combinedError }
}
