import clsx from 'clsx'

interface SaveButtonProps {
  onSave: any
  title?: string
  isSubmitting?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export default function SaveButton({ onSave, isSubmitting, type }: SaveButtonProps) {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      onClick={() => onSave()}
      className={clsx(
        `flex items-center justify-center cursor-pointer h-10 text-sm font-semibold 
        leading-6 text-black rounded bg-light-yellow hover:bg-light-yellow-20 duration-100 w-[98px]`
      )}
    >
      Save
    </button>
  )
}
