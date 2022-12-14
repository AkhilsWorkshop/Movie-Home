import ReactPlayer from "react-player"
import { Dialog, Tab, Menu, Transition } from '@headlessui/react'
import ScrollContainer from "react-indiana-drag-scroll"
import { youtubeURL } from "../../../config/config"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { AiFillCaretDown } from "react-icons/ai"
import MediumTitle from "../../Common/MediumTitle"

const Videos = ({ data }) => {

    const [isActive, setIsActive] = useState(0);

    const [isOpen, setIsOpen] = useState(false)

    const getVideoType = data?.videos?.results?.map(item => item.type)
    const combinedVideoType = getVideoType?.filter((v, i) => getVideoType.indexOf(v) === i).reverse()

    const switchTab = (index) => {
        setIsActive(index)
    }

    const [trailerLink, setTrailerLink] = useState("")

    return (

        <>
            {data?.videos?.results?.length > 0 &&
                <div className="relative flex flex-col gap-5 w-full">
                    <MediumTitle title="videos" />

                    <Tab.Group>
                        <Tab.List className="text-sm text-slate-200 ">
                            {combinedVideoType.map((eachItem, index) => (
                                <Tab key={uuidv4()} className={isActive === index ? "bg-slate-800 duration-150 p-2 px-4" : "hover:bg-slate-800 duration-150 p-2 px-4 bg-slate-700 shadow-sm shadow-black "}
                                    onClick={() => switchTab(index)}>{eachItem}</Tab>
                            ))}
                        </Tab.List>

                        <Tab.Panels>
                            {combinedVideoType.map((eachItem) => (
                                <Tab.Panel key={uuidv4()}>

                                    <ScrollContainer className="flex gap-3 w-full">
                                        <div className="flex h-[10rem] gap-2">
                                            {data?.videos?.results?.filter(eachVideo => eachVideo.type === eachItem).map((eachVideo) => (
                                                <ReactPlayer onStart={() => { setIsOpen(true); setTrailerLink(youtubeURL + eachVideo?.key) }} key={uuidv4()} className="" url={youtubeURL + eachVideo?.key} height="100%" width="15rem" />
                                            ))}
                                        </div>
                                    </ScrollContainer>

                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                </div>

            }
            <Dialog
                open={isOpen}
                onClose={() => { setIsOpen(false) }}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-4xl rounded bg-[#18181b]">

                        <div className="aspect-video">
                            <ReactPlayer controls={true} url={trailerLink} playing={true} height="100%" width="100%" />
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>

        </>

    )
}

export default Videos
