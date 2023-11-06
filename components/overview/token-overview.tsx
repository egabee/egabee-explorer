interface TokenOverviewProps {
  totalTokens: number
}

export default function TokenOverview({ totalTokens }: TokenOverviewProps) {
  return (
    <main>
      <div className="card">
        <div className="flex justify-between text-sm m-4">
          <div>
            <span className="font-medium">Token Overview</span>
            <span className="text-xs">{`(Total Tokens):`}</span>
          </div>
          <div className="font-medium">{totalTokens}</div>
        </div>
      </div>
    </main>
  )
}
