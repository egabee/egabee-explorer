import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { siteConfig } from '@/config/site'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { LayoutDashboardIcon, AlignJustify, X, LayoutDashboard } from 'lucide-react'
import DropdownMenu from './Menu-Item-Mobile'








export function SiteHeader() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <header className="sticky top-0 z-40 w-full bg-white ">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between  sm:space-x-0">
              <MainNav items={siteConfig.mainNav} />

              <div className="absolute inset-y-0 right-8 flex items-center space-x-4  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center 
          justify-center rounded-md p-1.5 text-black  border border-black
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlignJustify className="block h-6 w-6" aria-hidden="true" />
                  )}

                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-1">
                  <Link href={'/dashboard/networks'}>
                    <div className="flex items-center  ">
                      <Button variant={'outline'} className="flex gap-x-2 bg-black text-supernova rounded hover:bg-supernova">
                        <p>Dashboard</p>
                        <LayoutDashboardIcon size={16} />
                      </Button>
                    </div>
                  </Link>
                  <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                    <div
                      className={buttonVariants({
                        size: 'icon',
                        variant: 'ghost',
                      })}
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                  <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                    <div
                      className={buttonVariants({
                        size: 'icon',
                        variant: 'ghost',
                      })}
                    >
                      <Icons.twitter className="h-5 w-5 fill-current" />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </Link>
                  {/* <ThemeToggle /> */}
                </nav>
              </div>
            </div>
          </header>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-7 pb-3 pt-2 bg-white">
              <DropdownMenu items={siteConfig.mainNav} />
              <Link href={'/dashboard/networks'}>
                <div className="flex items-start ">
                  <Button variant={'outline'} className="flex  gap-x-2 bg-black w-full py-5 text-supernova  rounded-md hover:bg-supernova">
                    <p>Dashboard</p>
                    <LayoutDashboardIcon size={16} />
                  </Button>
                </div>
              </Link>
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
