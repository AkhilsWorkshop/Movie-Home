import { Dialog } from '@headlessui/react'
import React from 'react'
import { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { youtubeURL } from '../../../config/config'

const Trailer = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false)

    const trailer = (data?.videos?.results.filter(search => search.type === "Trailer"))

    return (
        <>{data?.videos?.results?.length > 0 ?
            <>
                <div className="flex flex-col justify-center items-center w-full h-[30vh] sm:h-[50vh] gap-2">
                    <AiFillPlayCircle onClick={() => { setIsOpen(true) }} className="text-yellow-500 hover:text-yellow-600 duration-300 cursor-pointer" size={60} />
                    <p className="font-title text-blue-100">Watch Trailer</p>
                </div>

                <Dialog
                    open={isOpen}
                    onClose={() => { setIsOpen(false); }}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-4xl rounded bg-[#18181b]">

                            <div className="aspect-video">
                                <ReactPlayer url={youtubeURL + trailer[0]?.key} playing={true} controls={true} height="100%" width="100%" />
                            </div>

                        </Dialog.Panel>
                    </div>
                </Dialog>

            </>
            :
            <></>

        }
        </>
    )
}

export default Trailer
