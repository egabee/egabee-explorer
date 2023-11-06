"use client"
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.




export type HeaderIcon = {
  id: string
  address: string
  name: string
  network: string

}


export const columns: ColumnDef<HeaderIcon>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border border-supernova  overflow-hidden my-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border border-supernova  overflow-hidden my-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "network",
    header: "Network",
  },


]
