import { Dialog } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'


const DialogPanel = () => {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm rounded bg-white">
                        <Dialog.Title>Complete your order</Dialog.Title>

                        {/* ... */}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    )
}

export default DialogPanel
