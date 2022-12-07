import { Dialog } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { youtubeURL } from '../../config/config'


const DialogPanel = (videoURL) => {

    const [isOpen, setIsOpen] = useState(false)

    const [slideShow, setSlideShow] = useState(true)

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => { setIsOpen(false); setSlideShow(true) }}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-4xl rounded bg-[#18181b]">

                        <div className="aspect-video">
                            <ReactPlayer url={youtubeURL + videoURL} playing={false} height="100%" width="100%" />
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default DialogPanel
