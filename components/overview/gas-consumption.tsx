import { ChainInsight, ContractInsight, TokensInsights } from '@/lib/types'
import { Change } from '../span/change'
import { calculateGasConsumptionChange } from '@/lib/insights'

interface GasConsumptionProps {
  insightData: ChainInsight[] | ContractInsight[] | TokensInsights[]
}

export default function GasConsumption({ insightData }: GasConsumptionProps) {
  const { gasConsumption, change } = calculateGasConsumptionChange(insightData)
  return (
    <div className="card">
      <div className="m-4">
        <div className="flex justify-between text-sm">
          <div>
            <span className="font-medium">Gas Consumption</span>
            <span className="text-xs">{`(Last Hour):`}</span>
          </div>
          <span className="font-medium">{(Number(gasConsumption) / 1_000_000).toFixed(2)}M</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="flex justify-between text-sm font-medium">
          <span>Change: </span>
          <Change value={Number(change)} />
        </div>
      </div>
    </div>
  )
}
