import { calculateTransactionChange } from '@/lib/insights'
import { ChainInsight, ContractInsight, TokensInsights } from '@/lib/types'
import { Change } from '../span/change'

interface TotalTransactionProps {
  insightData: ChainInsight[] | ContractInsight[] | TokensInsights[]
}

export default function TotalTransaction({ insightData }: TotalTransactionProps) {
  const { change, txs } = calculateTransactionChange(insightData)

  return (
    <div className="card">
      <div className="m-4">
        <div className="flex justify-between text-sm">
          <div>
            <span className="font-medium">Total Transactions</span>
            <span className="text-xs">{`(Last Hour):`}</span>
          </div>
          <span className="font-medium">{txs}</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="flex justify-between text-sm font-medium">
          <span>Change: </span>
          <Change value={change}></Change>
        </div>
      </div>
    </div>
  )
}
