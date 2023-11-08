"use client"
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.




export type HeaderIcon = {
  id: string
  address?: string
  name: string
  network: string

}


export const columns: ColumnDef<HeaderIcon>[] = [

  {
    accessorKey: "id",
    header: "#",
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
