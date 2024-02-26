'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  Row,
} from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Check, ChevronLeft, ChevronRight, Copy } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import CopyFunction from '../buttons/copy-button'
import { useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onRowClick: (id: string, index: number) => void
}

interface DataRow {
  id: string
}

export function DataTable<TData extends DataRow, TValue>({ columns, data, onRowClick }: DataTableProps<TData, TValue>) {
  const [copyFunctionItem, setCopyFunctionItem] = useState('')
  const [hoveredCellId, setHoveredCellId] = useState<string>('')
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const [isCopied, setIsCopied] = useState<boolean>(false)
  function handleCopy(item: any) {
    setIsCopied(true)
    navigator.clipboard.writeText(item)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const handleHover = (cellId: string, row: Row<TData>) => {
    if (cellId.includes('_address')) {
      setHoveredCellId(cellId)
      setCopyFunctionItem(row.getValue('address'))
    } else if (cellId.includes('_txHash')) {
      setHoveredCellId(cellId)
      setCopyFunctionItem(row.getValue('txHash'))
    } else {
      setHoveredCellId('')
      setCopyFunctionItem('')
    }
  }

  return (
    <>
      <div className="mt-10  ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-none!">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-secText dark:text-[#9A999E] font-bold  ">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    if ((e.target as HTMLButtonElement).tagName == 'TD') {
                      onRowClick(row.original.id, row.index)
                    }
                  }}
                  className={`cursor-pointer hover:bg-[#cacad1] dark:hover:bg-shark odd:bg-[#d5d5de] dark:odd:bg-shark-tint-30 even:bg-transparent ${
                    row.index % 2 === 0 ? 'even-row' : 'odd-row'
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`text-secText dark:text-[#9A999E]  ${
                        cell.id.includes('_txHash') || cell.id.includes('_address') ? 'break-all font-ubuntu-mono ' : ''
                      }  ${cell.id == '0_address' ? 'truncate ' : ''} `}
                    >
                      <span
                        onClick={() => handleCopy(copyFunctionItem)}
                        onMouseEnter={() => handleHover(cell.id, row)}
                        onMouseLeave={() => handleHover('', row)}
                      >
                        <span
                          className={`${hoveredCellId === cell.id && 'underline text-darkBrand dark:text-supernova'}`}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </span>{' '}
                        <span
                          className={`${
                            cell.id.includes('_txHash') || cell.id.includes('_address') ? 'inline-block' : 'hidden'
                          }  ${hoveredCellId === cell.id ? 'opacity-100' : 'opacity-0'}`}
                        >
                          <button className="text-darkBrand dark:text-supernova relative" onClick={handleCopy}>
                            {isCopied ? <Check size={16} /> : <Copy size={16} />}
                            {isCopied ? (
                              <div className="z-[999] w-[55px] absolute top-3 left-[20px] transform  -translate-y-full bg-lightBrand text-secBg dark:bg-white dark:text-gray-800 p-1 text-center rounded text-xs">
                                Copied!
                              </div>
                            ) : null}
                          </button>
                        </span>
                      </span>
                      {/* {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      {cell.id.includes('_txHash') && <CopyFunction item={row.getValue('txHash')} />}
                      {cell.id.includes('_address') && <CopyFunction item={row.getValue('address')} />} */}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-[#F2F4F7] dark:hover:bg-shark">
                <TableCell colSpan={columns.length} className="h-24 text-center text-secText dark:text-[#9A999E]">
                  No data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {table.getFilteredRowModel().rows.length >= 10 && (
        <div className=" border-t py-3 dark:border-[#9A999E] border-lightmodeborder mt-5">
          <div className="flex  justify-between  items-center">
            <div className="flex justify-between  items-center gap-1 text-sm  dark:text-[#9A999E] text-secText ">
              <p className="text-sm font-medium">Show{''}</p>

              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger className="h-8 w-[60px] bg-transparent border dark:border-[#9A999E] border-lightmodeborder dark:hover:bg-supernova hover:bg-lightBrand dark:hover:text-black hover:text-white ">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top" className="dark:bg-shark bg-secBg dark:text-white text-black">
                  {[5, 10, 20, 50].map((pageSize) => (
                    <SelectItem
                      key={pageSize}
                      value={`${pageSize}`}
                      className="hover:!bg-lightBrand hover:!text-white dark:hover:!bg-supernova dark:hover:!text-black"
                    >
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm font-medium"> per page</p>
            </div>
            <div className="flex gap-1 ">
              <Button
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="text-sm !bg-transparent dark:bg-transparent font-semibold cursor-pointer text-lightBrand dark:text-[#9A999E] hover:scale-[1.15]"
              >
                <ChevronLeft />
              </Button>
              <Button
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="text-sm !bg-transparent dark:bg-transparent font-semibold cursor-pointer text-lightBrand dark:text-[#9A999E] hover:scale-[1.15]"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
