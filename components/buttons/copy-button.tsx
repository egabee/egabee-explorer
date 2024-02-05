import React from 'react'
import { Copy, Check } from 'lucide-react'

function CopyFunction({ item }: any) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false)
  return (
    <div className='relative'>
      <button
        className="text-lightBrand dark:text-supernova"
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
      {isCopied && (
        <div className="w-[55px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full dark:bg-white bg-black dark:text-gray-800 text-white p-1 text-center rounded text-xs">
          Copied!
        </div>
      )}
    </div>
  )
}
export default CopyFunction
