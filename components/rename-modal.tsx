import ButtonCancel from '@/components/buttons/cancel'
import CustomInput from '@/components/custom-input'
import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'

type RenameModalProps = {
  isVisible: boolean
  closeModal: () => void
  onSave: (name: string) => void
  currentName: string
  title: string
}

export function RenameModal({ isVisible, closeModal, onSave, currentName, title }: RenameModalProps) {
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)

  const handleClose = (e: any) => {
    if (e.target.id === 'wrapper') {
      closeModal()
    }
  }

  const onSubmit = (values: { name: string }, actions: FormikHelpers<{ name: string }>) => {
    onSave(values.name)
    actions.resetForm()
    closeModal()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="w-[600px] text-athens-gray bg-shark-40 rounded border border-light-white">
        <Formik onSubmit={onSubmit} initialValues={{ name: currentName }}>
          {({ isSubmitting }) => (
            <Form className="">
              <div className="flex flex-col rounded">
                <div className="h-20">
                  <div className="mx-5 py-3">
                    <h2 className="text-base font-semibold leading-7 ">{title}</h2>
                    <p className="mt-1 text-sm leading-6">Update the name of the selected item.</p>
                  </div>
                </div>

                <div className="py-3">
                  <div className="flex flex-col mx-5 gap-y-3">
                    <CustomInput placeholder="New Name" label="" name="name" defaultValue={currentName}></CustomInput>
                  </div>
                </div>

                {errorMsg && <div className="text-red-500">{errorMsg}</div>}

                <div className="px-2 h-20 py-6">
                  <div className="flex justify-between mx-3">
                    <ButtonCancel onClose={closeModal} />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center cursor-pointer h-10 text-sm font-semibold 
                      leading-6 text-black rounded bg-light-yellow hover:bg-light-yellow-20 duration-100 w-[98px]"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
