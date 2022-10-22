import ReactPlayer from "react-player"
import { Tab } from '@headlessui/react'
import ScrollContainer from "react-indiana-drag-scroll"
import { youtubeURL } from "../../../config/config"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import DialogPanel from "../../Sub/DialogPanel"

const Videos = ({ data }) => {

    const items = [
        {
            id: 1,
            name: "Trailer"
        },
        {
            id: 2,
            name: "Teaser"
        },
        {
            id: 3,
            name: "Featurette"
        },
        {
            id: 4,
            name: "Clips"
        },
        {
            id: 5,
            name: "Behind the Scenes"
        },
    ]

    const [isActive, setIsActive] = useState(1);

    const switchTab = (index) => {
        setIsActive(index)
    }

    return (

        <>
            {data?.videos?.results?.length > 0 &&
                <div className="relative flex flex-col gap-5 w-full">
                    <h1 className="border-l-4 pl-2 border-yellow-500 text-slate-400 text-sm font-semibold uppercase">Videos</h1>

                    <Tab.Group>
                        <Tab.List className="text-sm text-slate-200 bg-slate-700 shadow-md shadow-black rounded-sm">
                            {items.map((eachItem) => (
                                <Tab key={uuidv4()} className={isActive === eachItem.id ? "bg-slate-800 duration-150 p-2 px-4" : "hover:bg-slate-800 duration-150 p-2 px-4"}
                                    onClick={() => switchTab(eachItem.id)}>{eachItem.name}</Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <ScrollContainer className="flex gap-3 w-full">
                                    <div className="flex h-[10rem] gap-2">
                                        {data?.videos?.results?.filter(eachVideo => eachVideo.type === "Trailer").map((eachVideo) => (
                                            <ReactPlayer key={uuidv4()} className="" url={youtubeURL + eachVideo?.key} height="100%" width="15rem" />
                                        ))}
                                    </div>
                                </ScrollContainer>

                            </Tab.Panel>
                            <Tab.Panel>
                                <ScrollContainer className="flex gap-3 w-full">
                                    <div className="flex h-[10rem] gap-2">
                                        {data?.videos?.results?.filter(eachVideo => eachVideo.type === "Teaser").map((eachVideo) => (
                                            <ReactPlayer className="" url={youtubeURL + eachVideo?.key} height="100%" width="15rem" />
                                        ))}
                                    </div>
                                </ScrollContainer>
                            </Tab.Panel>
                            <Tab.Panel>
                                <ScrollContainer className="flex gap-3 w-full">
                                    <div className="flex h-[10rem] gap-2">
                                        {data?.videos?.results?.filter(eachVideo => eachVideo.type === "Featurette").map((eachVideo) => (
                                            <ReactPlayer className="" url={youtubeURL + eachVideo?.key} height="100%" width="15rem" />
                                        ))}
                                    </div>
                                </ScrollContainer>
                            </Tab.Panel>
                            <Tab.Panel>
                                <ScrollContainer className="flex gap-3 w-full">
                                    <div className="flex h-[10rem] gap-2">
                                        {data?.videos?.results?.filter(eachVideo => eachVideo.type === "Clip").map((eachVideo) => (
                                            <ReactPlayer className="" url={youtubeURL + eachVideo?.key} height="100%" width="15rem" />
                                        ))}
                                    </div>
                                </ScrollContainer>
                            </Tab.Panel>
                            <Tab.Panel>
                                <ScrollContainer className="flex gap-3 w-full">
                                    <div className="flex h-[10rem] gap-2">
                                        {data?.videos?.results?.filter(eachVideo => eachVideo.type === "Behind the Scenes").map((eachVideo) => (
                                            <ReactPlayer className="" url={youtubeURL + eachVideo?.key} height="100%" width="15rem" />
                                        ))}
                                    </div>
                                </ScrollContainer>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </div>




            }


        </>

    )
}

export default Videos
