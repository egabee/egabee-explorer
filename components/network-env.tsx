import { Globe } from 'lucide-react'

export default function NetworkEnv({ env }: { env: string }) {
  return (
    <div className="flex flex-row h-6 items-center gap-x-2 rounded-2xl py-1 px-2 bg-light-white text-iron text-xs">
      <div>
        <Globe size={12} />
      </div>
      <div className="capitalize">{env}</div>
    </div>
  )
}
