import React from 'react'
import { useState, Dialog } from 'react'


const DialogPanel = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Dialog open={isOpen} onClose={() => setIsOpen(true)}>
                <Dialog.Panel className="absolute h-screen w-screen bg-black z-50">
                    <Dialog.Title></Dialog.Title>
                    <Dialog.Description>
                        This will permanently deactivate your account
                    </Dialog.Description>

                    <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>

                    <button onClick={() => setIsOpen(true)}>Deactivate</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}

export default DialogPanel
