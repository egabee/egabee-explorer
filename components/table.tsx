import clsx from 'clsx'
import React from 'react'
import { Copy } from 'lucide-react'

interface TableProps {
  columns: string[]
  rows: any[]
  onRowClick: (id: string, index: number) => void
  isTransaction?: boolean
}

export default function Table({ columns, rows, onRowClick, isTransaction }: TableProps) {
  const [showCopiedToClipboard, setShowCopiedToClipboard] = React.useState(true)

  const showCopiedAlert = (text: string) => {
    setShowCopiedToClipboard(false)

    navigator.clipboard.writeText(text)

    setTimeout(() => {
      setShowCopiedToClipboard(true)
    }, 5000)
  }

  const statusColumnTextStyle = (status: boolean) => {
    return status ? 'text-green-500' : 'text-mandy'
  }

  return (
    <div className="flex flex-col mt-10 text-[#9A999F] w-full yellow-scroll px-3 lg:overflow-hidden">
      <div
        className={clsx(
          'fixed bottom-10 right-4 bg-[#29724e] text-white rounded h-10 bg-opacity-50 border border-[#29724e]',
          showCopiedToClipboard ? 'hidden' : ''
        )}
      >
        <p className="font-bold mx-3 mt-2 text-sm duration-700">Copied to clipboard</p>
      </div>

      <table className="table-auto ">
        <thead className="">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="text-sm font-medium px-1 py-4 text-left ">
                {column.slice(0, 1).toUpperCase() + column.slice(1).toLowerCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {rows.map((r, index) => (
            <tr
              onClick={() => onRowClick(r.id, index)}
              key={index}
              className={clsx(
                `cursor-pointer transition duration-500 ease-in-out
                  hover:bg-[#2E2E32] hover:duration-200 mb-1`,
                index % 2 === 0 ? 'bg-shark-40' : 'bg-woodsmoke',
                isTransaction ? 'h-12' : 'h-16'
              )}
            >
              {columns.map((column, index) => (
                <td
                  key={index}
                  className={clsx(
                    'text-sm px-1 py-3 ',
                    index === 0 ? 'rounded-s' : '',
                    index === columns.length - 1 ? 'rounded-e' : '',
                    isTransaction && column === 'status' ? statusColumnTextStyle(r[column]) : ''
                  )}
                >
                  <div className="flex overflow-hidden">
                    <div className="truncate w-52 float-left ">{r[column]}</div>

                    <div className="group w-4 ">
                      <span
                        className="hidden absolute duration-700"
                        onClick={(event) => {
                          showCopiedAlert(r[column])
                          event.stopPropagation()
                        }}
                      >
                        <Copy
                          size={24}
                          className="p-1 text-light-yellow bg-light-yellow bg-opacity-25 rounded-full border border-dark-yellow"
                        />
                      </span>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
