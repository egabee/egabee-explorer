'use client'

import React, { useState } from 'react'
import AddChainForm from './forms/add-chain'

interface ModalProps {
  isVisible?: boolean
  onClose: () => void
}

export default function Modal({ isVisible, onClose }: ModalProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  if (!isVisible) return null

  const handleClose = (e: any) => {
    if (e.target.id === 'wrapper') {
      onClose()
    }
  }

  return (
    <main>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col">
          <button className="text-white text-xl place-self-end" onClick={() => onClose()}>
            X
          </button>
          <div className="p-2 bg-white rounded">
            <h1>Modal</h1>
            <AddChainForm></AddChainForm>
          </div>
        </div>
      </div>
    </main>
  )
}
