import React from 'react'
import { Copy, Check } from 'lucide-react'

function CopyFunction({ item }: any) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false)
  return (
    <button
      onClick={() => {
        setIsCopied(true)
        navigator.clipboard.writeText(item)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      }}
    >
      {isCopied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  )
}
export default CopyFunction
