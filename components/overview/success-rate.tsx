import { calculateSuccessRate } from '@/lib/insights'
import { ChainInsight, ContractInsight, TokensInsights } from '@/lib/types'
import { Change } from '../span/change'

interface SuccessRateProps {
  insightData: ChainInsight[] | ContractInsight[] | TokensInsights[]
}

export default function SuccessRate({ insightData }: SuccessRateProps) {
  const { rate, change } = calculateSuccessRate(insightData)

  return (
    <div className="card">
      <div className="m-4">
        <div className="flex justify-between text-sm">
          <div>
            <span className="font-medium">Success Rate</span>
            <span className="text-xs">{`(Last Hour):`}</span>
          </div>
          <span className="font-medium">{rate.toFixed(2)}%</span>
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
