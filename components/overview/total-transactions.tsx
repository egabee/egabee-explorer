import { Insight, ContractInsight, TokensInsights } from '@/lib/types'
import { Change } from '../span/change'

interface TotalTransactionProps {
  insightData: Insight[] | ContractInsight[] | TokensInsights[]
}

export default function TotalTransaction({ insightData }: TotalTransactionProps) {
  let txCount: { value: number; change: number } | undefined = { value: 0, change: 0 }
  let value: number = 0
  let change: number = 0

  if (insightData) {
    if (Array.isArray(insightData)) {
      if (insightData.length > 0) {
        txCount = insightData[0]?.txCount || txCount
        value = txCount.value
        change = txCount.change
      }
    } else {
      txCount = (insightData as Insight)?.txCount || txCount
      value = txCount.value
      change = txCount.change
    }
  }

  return (
    <div className="card min-h-fit md:h-32 lg:h-24">
      <div className="m-4 text-xs md:text-sm">
        <div className="flex justify-between">
          <div>
            <span className="font-medium">Total Transactions</span>
            <span className="text-xs">{`(Last Hour):`}</span>
          </div>
          <span className="font-medium">{value}</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="flex justify-between font-medium">
          <span>Change: </span>
          <Change value={change}></Change>
        </div>
      </div>
    </div>
  )
}
