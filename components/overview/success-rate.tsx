import { Insight, ContractInsight, TokensInsights } from '@/lib/types'
import { Change } from '../span/change'

interface SuccessRateProps {
  insightData: Insight[] | ContractInsight[] | TokensInsights[]
}

export default function SuccessRate({ insightData }: SuccessRateProps) {
  let successRate: { value: number; change: number } | undefined = { value: 0, change: 0 }
  let value: number | undefined = 0
  let change: number | undefined = 0

  if (insightData) {
    if (Array.isArray(insightData)) {
      if (insightData.length > 0) {
        successRate = insightData[0]?.successRate || successRate
        value = successRate.value
        change = successRate.change
      }
    } else {
      successRate = (insightData as Insight)?.successRate || successRate
      value = successRate.value
      change = successRate.change
    }
  }

  return (
    <div className="card min-h-fit md:h-32 lg:h-24">
      <div className="m-4 text-xs md:text-sm">
        <div className="flex justify-between">
          <div>
            <span className="font-medium">Success Rate</span>
            <span className="text-xs">{`(Last Hour):`}</span>
          </div>
          <span className="font-medium">{value?.toFixed(2)}%</span>
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
