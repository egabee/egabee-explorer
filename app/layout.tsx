import { SearchProvider } from '@/context/SearchContext'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'
// import { Inter } from 'next/font/google'
import { NetworksProvider } from '@/context/NetworksContext'

// import Head from 'next/head'
import { Metadata } from 'next'

interface Icon {
  rel: string
  url: string
}

interface MyMetadata extends Metadata {
  icons: Icon[]
}

// const inter = Inter({ subsets: ['latin'] })

export const metadata: MyMetadata = {
  title: 'Egabee - Explorer',
  description: 'Track your blockchains, smart contracts and tokens',
  icons: [{ rel: 'icon', url: '/favIcon.png' }],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="yellow-scroll">
      {/* <Head /> should not be used in app Directory*/}
      {/* <Head>
        {metadata.icons.map((icon) => (
          <link key={icon.rel} rel={icon.rel} href={icon.url} />
        ))}
      </Head> */}
      <NetworksProvider>
        <SearchProvider>
          <body className={`dark:bg-woodsmoke bg-mainBg dark:text-gray-300 text-secText`}>
            {children}
            <Analytics />
          </body>
        </SearchProvider>
      </NetworksProvider>
    </html>
  )
}
