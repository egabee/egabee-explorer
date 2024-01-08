import { Insight, ContractInsight, TokensInsights } from '@/lib/types'
import { Change } from '../span/change'

interface GasConsumptionProps {
  insightData: Insight[] | ContractInsight[] | TokensInsights[]
}

export default function GasConsumption({ insightData }: GasConsumptionProps) {
  let gasConsumption: { value: number; change: bigint } | undefined = { value: 0, change: BigInt(0) }
  let value: number = 0
  let change: bigint = BigInt(0)

  if (Array.isArray(insightData)) {
    if (insightData.length > 0) {
      gasConsumption = insightData[0].gasConsumption || gasConsumption
      value = gasConsumption.value
      change = gasConsumption.change
    }
  } else {
    gasConsumption = (insightData as Insight)?.gasConsumption || gasConsumption
    value = gasConsumption.value
    change = gasConsumption.change
  }

  return (
    <div className="card min-h-fit md:h-32 lg:h-24">
      <div className="m-4 text-xs md:text-sm">
        <div className="flex justify-between">
          <div>
            <span className="font-medium">Gas Consumption</span>
            <span className="text-xs">{`(Last Hour):`}</span>
          </div>
          <span className="font-medium">{(Number(value) / 1_000_000).toFixed(2)}M</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="flex justify-between font-medium">
          <span>Change: </span>
          <Change value={Number(change)} />
        </div>
      </div>
    </div>
  )
}
