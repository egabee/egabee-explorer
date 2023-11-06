'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import clsx from 'clsx'
import {
  ArrowLeftRight,
  Bell,
  ChevronLeft,
  Coins,
  Container,
  FileCode2,
  LineChart,
  LogOut,
  Monitor,
  Settings,
  Wallet,
} from 'lucide-react'

interface Menu {
  title: string
  icon?: JSX.Element
  href: string
  spacing?: boolean
  section?: boolean
}

const Menus: Menu[] = [
  { title: 'Inspect', section: true, href: '#' },
  { title: 'Transactions', icon: <ArrowLeftRight size={16} />, href: '/dashboard/transactions' },
  { title: 'Networks', icon: <Container size={16} />, href: '/dashboard/networks' },
  { title: 'Contracts', icon: <FileCode2 size={16} />, href: '/dashboard/contracts' },
  { title: 'Tokens', icon: <Coins size={16} />, href: '/dashboard/tokens' },
  { title: 'Wallets', icon: <Wallet size={16} />, href: '/dashboard/wallets' },
  { title: 'Monitoring', section: true, spacing: true, href: '#' },
  { title: 'Alerts', icon: <Bell size={16} />, href: '/dashboard/alerts' },
  { title: 'Metrics Dashboard', icon: <LineChart size={16} />, href: '/dashboard/metrics-dashboard' },
  { title: 'Project', section: true, spacing: true, href: '#' },
  { title: 'Settings', icon: <Settings size={16} />, href: '/dashboard/settings' },
  { title: 'Logout', icon: <LogOut size={16} />, href: '/' },
]

export default function Sidebar() {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathName = usePathname()

  useEffect(() => {
    const menu = Menus.find((m) => m.href === pathName)
    if (menu && activeMenu !== menu.title) {
      setActiveMenu(menu.title)
    }
  }, [router, pathName, activeMenu])

  const isActiveMenu = ({ title }: Menu) => {
    return title === activeMenu
  }

  const handleClick = (event: any) => {
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href')

    const menu = Menus.find((m) => m.href === href)

    if (menu) {
      setActiveMenu(menu.title)

      if (menu.title === 'Logout') {
        signOut({ callbackUrl: '/' })
          .then(() => {
            sessionStorage.clear()
            localStorage.clear()
          })
          .catch(console.error)
      } else {
        if (pathName === href) {
          //refresh current route when clicking on the same active menu item
          window.location.reload()
        } else {
          router.push(href)
        }
      }
    }
  }

  return (
    <div
      className={`bg-shark-40 h-screen pt-2 ${
        open ? ' w-60' : ' w-14'
      } duration-300 relative border-r border-shark-tint-30 border-opacity-50`}
    >
      <ChevronLeft
        size={24}
        className={`bg-[#343439] text-iron rounded-full p-1 absolute -right-3 top-5 
          cursor-pointer ${!open && 'rotate-180'} hover:bg-[#504f57]`}
        onClick={() => setOpen(!open)}
      />
      <div className="mt-5 px-2 ">
        <ul className="flex flex-col gap-y-1">
          {Menus.map((menu, index) => {
            if (menu.section) {
              return (
                <li className="mt-9 text-xs font-bold text-[#9A999F] pl-2" key={index}>
                  {open ? menu.title : <div className="border-b border-light-white"></div>}
                </li>
              )
            } else {
              return (
                <Link href={menu.href} key={index} onClick={handleClick}>
                  <li
                    key={index}
                    className={clsx(
                      `text-sm flex items-center gap-x-2 cursor-pointer rounded h-8 px-3`,
                      menu.spacing ? 'mt-9' : '',
                      isActiveMenu(menu) ? 'bg-light-yellow text-black' : 'text-gray-300 ',
                      isActiveMenu(menu) ? '' : 'hover:bg-light-white hover:shadow-inner'
                    )}
                  >
                    <span
                      className={clsx(
                        'text-xl block float-left',
                        isActiveMenu(menu) ? 'text-black' : 'text-light-yellow'
                      )}
                    >
                      {menu.icon}
                    </span>
                    <span
                      className={clsx(
                        `text-[#9A999F] text-sm font-medium flex-1`,
                        !open && 'hidden',
                        isActiveMenu(menu) ? 'text-black' : ''
                      )}
                    >
                      {menu.title}
                    </span>
                  </li>
                </Link>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}
