import clsx from 'clsx'

interface ButtonCancelProps {
  onClose: () => void
}

export default function ButtonCancel({ onClose }: ButtonCancelProps) {
  return (
    <div
      onClick={() => onClose()}
      className={clsx(
        `flex items-center justify-center cursor-pointer h-10 text-sm font-semibold leading-6 text-light-yellow
          border border-light-yellow rounded hover:bg-light-yellow hover:bg-opacity-25
          duration-100 w-[98px]`
      )}
    >
      <p className="">Cancel</p>
    </div>
  )
}
