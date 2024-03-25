import { SearchProvider } from '@/context/SearchContext'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'
import { NetworksProvider } from '@/context/NetworksContext'

import { Metadata } from 'next'

interface Icon {
  rel: string
  url: string
}

interface MyMetadata extends Metadata {
  icons: Icon[]
}

export const metadata: MyMetadata = {
  title: 'Egabee - Explorer',
  description: 'Track your blockchains, smart contracts and tokens',
  icons: [{ rel: 'icon', url: '/favIcon.png' }],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark yellow-scroll">
      <NetworksProvider>
        <SearchProvider>
          <body className={`darkBgColor bg-mainBg dark:text-textGray text-secText`}>
            {children}
            <Analytics />
          </body>
        </SearchProvider>
      </NetworksProvider>
    </html>
  )
}
