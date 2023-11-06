import React from 'react'
import ButtonCancel from '../buttons/cancel'

type DeleteConfirmationModalProps = {
  isVisible: boolean
  closeModal: () => void
  onDelete: () => void
  title: string
}

export function DeleteConfirmationModal({ isVisible, closeModal, onDelete, title }: DeleteConfirmationModalProps) {
  const handleClose = (e: any) => {
    if (e.target.id === 'wrapper') {
      closeModal()
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="w-[600px] text-athens-gray bg-shark-40 rounded border border-light-white">
        <div className="flex flex-col rounded">
          <div className="h-20">
            <div className="mx-5 py-3">
              <h2 className="text-base font-semibold leading-7 ">{title}</h2>
              <p className="mt-1 text-sm leading-6">Are you sure you want to delete this item?</p>
            </div>
          </div>

          <div className="px-2 h-20 py-6">
            <div className="flex justify-between mx-3">
              <button
                onClick={onDelete}
                className="flex items-center justify-center cursor-pointer h-10 text-sm font-semibold 
                leading-6 text-black rounded bg-light-yellow hover:bg-light-yellow-20 duration-100 w-[98px]"
              >
                Delete
              </button>

              <ButtonCancel onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
