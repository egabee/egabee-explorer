"use client"
import Image from 'next/image'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columns'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const data = [{
  id: "1",
  address: "bnbhnbhjgbhjbjhb",
  name: "ddddd",
  network: "courem"
},
{
  id: "2",
  address: "bnbhnbhjgbhjbjhb",
  name: "ddddd",
  network: "courem"
},
]

export default function Home() {
  return (
    <div className="py-8 px-4 ">
      <div className='container'>
        <div className="flex justify-between mb-4">
          {/* <div className="flex justify-end">
          </div> */}

          <div className="flex justify-end">
            <Select >
              <SelectTrigger className="w-[180px] cursor-pointer h-10 text-sm font-semibold  text-white bg-special
          rounded-lg  hover:bg-light-yellow-20 duration-100 py-2 border-border ">
                <SelectValue placeholder="Options" />
              </SelectTrigger>
              <SelectContent className=' shadow-lg   '>
                <SelectItem value="contact">contract</SelectItem>
                <SelectItem value="token">token</SelectItem>
                <SelectItem value="nft">nft</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
        {/* <hr className='horizontal-line my-9' /> */}


        <DataTable
          columns={columns}
          data={data}
          onRowClick={function (id: string, index: number): void {
            throw new Error('Function not implemented.')
          }} />
      </div>
    </div>
  )
}
