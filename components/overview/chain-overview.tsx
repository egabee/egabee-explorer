interface ChainOverviewProps {
  totalChains: number
}

export default function ChainOverview({ totalChains }: ChainOverviewProps) {
  return (
    <div className="card min-h-fit md:h-32 lg:h-24">
      <div className="flex justify-between text-sm m-4">
        <div>
          <span className="font-medium">Chain Overview</span>
          <span className="text-xs">{`(Total Chains):`}</span>
        </div>
        <div className="font-medium">{totalChains}</div>
      </div>
    </div>
  )
}
