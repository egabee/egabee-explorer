interface ContractOverviewProps {
  totalContracts: number
}

export default function ContractOverview({ totalContracts }: ContractOverviewProps) {
  return (
    <main>
      <div className="card">
        <div className="flex justify-between text-sm m-4">
          <div>
            <span className="font-medium">Contract Overview</span>
            <span className="text-xs">{`(Total Contracts):`}</span>
          </div>
          <div className="font-medium">{totalContracts}</div>
        </div>
      </div>
    </main>
  )
}
