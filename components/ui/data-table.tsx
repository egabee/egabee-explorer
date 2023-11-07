'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, } from '@tanstack/react-table'



import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onRowClick: (id: string, index: number) => void
}

interface DataRow {
  id: string
}

export function DataTable<TData extends DataRow, TValue>({ columns, data, onRowClick }: DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

  })


  return (
    <>
      <div className='mt-16 bg-white border border-border rounded-md shadow-sm  '>
        <Table >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='text-black border-b border-border '>
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
                <TableRow key={row.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if ((e.target as HTMLButtonElement).tagName == "TD") {
                      onRowClick(row.original.id, row.index)
                    }
                  }}
                  className='hover:bg-[#F9F9F9] border-b border-border ' >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='text-black py-6'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              )
              )
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {(table.getFilteredRowModel().rows.length >= 10) && (
        <div className=" border-t py-3 border-[#9A999E] mt-5">
          <div className='flex  justify-between  items-center'>
            <div className="flex justify-between  items-center gap-1 text-sm  text-[#9A999E] ">
              <p className="text-sm font-medium"> Show</p>

              <Select

                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}

              >
                <SelectTrigger className="h-8 w-[60px] bg-transparent border border-[#9A999E] ">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 15, 20, 25, 30, 35].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm font-medium"> per page</p>
            </div>
            <div className='flex gap-1 '>
              <Button

                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className='text-sm bg-transparent font-semibold cursor-pointer '

              >
                <ChevronLeft />
              </Button>
              <Button

                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className='text-sm bg-transparent font-semibold cursor-pointer '
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
