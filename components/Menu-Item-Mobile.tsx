import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { AlignJustify } from 'lucide-react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { NavItem } from '@/types/nav'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'




interface DropdownMenuProps {
  items?: NavItem[]
}




export default function DropdowMenu({ items }: DropdownMenuProps) {
  const segment = useSelectedLayoutSegment()
  return (
    <>
      {items?.length ? (
        <div className="py-1">
          {items?.map(
            (item, index) =>
              item.href && (
                // eslint-disable-next-line react/jsx-key
                <Disclosure.Button className={cn(
                  // eslint-disable-next-line max-len
                  'flex items-center bg-gray-50  border border-gray-300 my-1 rounded-md px-3 py-2  font-medium hover:text-black hover:bg-supernova sm:text-sm w-full',
                  item.href.startsWith(`/${segment}`) ? 'text-[#0f172a]' : 'text-[#0f172a]',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}>
                  <Link
                    key={index}
                    href={item.href}

                  >
                    {item.title}
                  </Link>
                </Disclosure.Button>
              )
          )}
        </div>
      ) : null}
    </>




  )
}
