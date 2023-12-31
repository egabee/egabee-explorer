
export function createUrl(endpoint: string) {
  return `${process.env.NEXT_PUBLIC_EGABEE_API}${endpoint}`
}
const headers = new Headers()
headers.append('Content-Type', 'application/json')

export async function fetcher(endpoint: string) {
  if (!endpoint) throw new Error(`Endpoint is not valid: '${endpoint}'`)
  return fetch(createUrl(endpoint), { method: 'GET', headers: headers }).then((r) => r.json())
}

export function multiFetcher(urls: string[]) {
  return Promise.all(urls.map((u) => fetcher(u)))
}
