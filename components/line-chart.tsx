/* eslint-disable max-len */
import { ChartProps } from '@/app/(dashboard)/dashboard/metrics-dashboard/data'
import { LineChart as LucideLineChart } from 'lucide-react'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Chart({ data, mainDataKey, currUnit }: ChartProps) {
  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full text-athens-gray">
        <div className="text-supernova">
          <LucideLineChart size={48} />
        </div>
        <h1 className="text-xl capitalize mt-5 text-[#9A999F]">No chart data</h1>
        <div className="text-sm font-light text-[#9A999F]">
          <p>No data has been collected</p>
        </div>
      </div>
    )
  }

  const customTickFormatter = (value: any, index: number) => (index === 0 || index === data.length - 1 ? value : '')

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 45,
          left: 20,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3"/> */}
        <XAxis className="text-[0.7rem] " dataKey="name" tickFormatter={customTickFormatter} interval={0} />
        <YAxis className="text-[0.7rem]" />
        {/* <Tooltip /> */}
        <Tooltip
          content={({ active, label, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border-none bg-background p-2 shadow-sm bg-shark text-white">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col ">
                      <span className="text-[0.85rem] uppercase">{`${label}`}</span>
                      <span className="">

                        {mainDataKey === 'pv'
                          ? `${payload[0].value?.toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}  `
                          : payload[0].value}
                        {mainDataKey === 'pv'
                          ? currUnit
                          : mainDataKey === 'dailyActiveUsersCount' || mainDataKey === 'weeklyActiveUsersCount'
                          ? ' accounts'
                          : ''}
                        {mainDataKey === 'revertRate' ? ' %' : ''}
                      </span>
                    </div>
                    {/* <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Today</span>
                      <span className="font-bold">{payload[1].value}</span>
                    </div> */}
                  </div>
                </div>
              )
            }

            return null
          }}
        />
        {/* <Legend /> */}

        <Line
          isAnimationActive={true}
          strokeWidth="2"
          type="monotone"
          dataKey={mainDataKey}
          stroke="#2596be"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
