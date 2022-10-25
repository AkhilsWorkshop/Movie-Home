import { Dialog } from "@headlessui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { baseURL, fullSizeImg, TRENDING, youtubeURL } from "../../../config/config";
import Button from "../../Sub/Button";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa"

const TrendingVideo = () => {

    // Trending Data
    const [content, setContent] = useState([])

    // Trailer Data
    const [trailerLink, setTrailerLink] = useState([])

    // Loading State
    const [loading, setLoading] = useState(true)

    // Pause / Play Function
    const [isPlaying, setIsPlaying] = useState(true)

    // Mute / Unmute Function
    const [isMute, setIsMute] = useState(false)

    // Fetching Trending Data (content)
    const fetchTrending = async () => {
        const { data } = await axios.get(`${TRENDING}${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    // Fetching Trailer Data (trailerLink)
    const getTrailer = async (media_type, id) => {
        const { data } = await axios.get(`${baseURL}/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const filteredData = data.results.filter(search => search.type === "Trailer")
        setTrailerLink(filteredData[0])
    }

    setTimeout(() => { getTrailer(content[0]?.media_type, content[0]?.id); setLoading(false) }, 1500)

    useEffect(() => {
        fetchTrending()

    }, [])



    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className="relative">
                {loading ?

                    <div id="background" className="text-white bg-cover bg-top font-title" style={{ backgroundImage: `url(${fullSizeImg}${content[0]?.backdrop_path})` }} >

                        <div className="flex flex-col justify-center pt-20 h-[30vh] sm:h-[80vh] backdrop-blur-[1px] backdrop-brightness-[70%] bg-gradient-to-b from-transparent to-[#18181b]">
                            <div className="flex flex-col gap-5 px-16 sm:px-[10rem]">
                                <h1 className="text-2xl sm:text-[3rem] line font-bold text-blue-100 leading-tight">{content[0]?.title || content[0]?.name}</h1>
                                <p className="hidden sm:block text-xl truncate">{content[0]?.overview}</p>
                                <div className="flex gap-2 flex-wrap">
                                    <button onClick={() => { setIsOpen(true); getTrailer(content[0]?.media_type, content[0]?.id) }} className="p-2 px-3 font-semibold rounded-md w-fit bg-yellow-500 shadow-md border h-12 duration-300 text-black hover:bg-yellow-600 border-yellow-500/70 flex items-center"><BsFillPlayFill size={25} /> Watch Trailer</button>
                                    <Button media_type={content[0]?.media_type} id={content[0]?.id}>
                                        <input type="submit" value="More Info" className="p-2 px-3 font-semibold rounded-md bg-black/60 shadow-md border duration-200 h-12 w-28 hover:border-2 hover:cursor-pointer text-yellow-500 hover:border-yellow-600 border-yellow-500/70" />
                                    </Button>
                                </div>


                            </div>

                        </div>

                    </div>
                    :
                    <>
                        <div id="video" className="absolute aspect-video w-full top-[-2rem] z-0">
                            <ReactPlayer url={youtubeURL + trailerLink?.key} playing={isPlaying} muted={isMute} height="100%" width="100%" onEnded={() => setLoading(true)} />
                        </div>
                        <div className="flex flex-col justify-center pt-20 h-[30vh] sm:h-[80vh] backdrop-brightness-[100%] bg-gradient-to-b from-transparent to-[#18181b] text-white">
                            <div className="flex flex-col gap-5 px-16 sm:px-[10rem]">
                                <h1 className="text-2xl sm:text-[3rem] line font-bold text-blue-100 leading-tight">{content[0]?.title || content[0]?.name}</h1>
                                <p className="hidden sm:block text-xl truncate">{content[0]?.overview}</p>
                                <div className="flex justify-between flex-wrap">
                                    <div className="flex gap-2 flex-wrap">
                                        <button onClick={() => { setIsOpen(true); getTrailer(content[0]?.media_type, content[0]?.id); setIsPlaying(false) }} className="p-2 px-3 font-semibold rounded-md w-fit bg-yellow-500 shadow-md border h-12 duration-300 text-black hover:bg-yellow-600 border-yellow-500/70 flex items-center"><BsFillPlayFill size={25} /> Watch Trailer</button>
                                        <Button media_type={content[0]?.media_type} id={content[0]?.id}>
                                            <input type="submit" value="More Info" className="p-2 px-3 font-semibold rounded-md bg-[#0d0d0d] shadow-md border duration-200 h-12 w-28 hover:border-2 hover:cursor-pointer text-yellow-500 hover:border-yellow-600 border-yellow-500/70" />
                                        </Button>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-full bg-[#0d0d0d] text-gray-400 shadow-md duration-300  hover:border-gray-500 border-2 border-gray-800 flex items-center" onClick={() => setIsPlaying(!isPlaying)}> {isPlaying ? <BsFillPauseFill size={30} /> : <BsFillPlayFill size={30} />}</button>
                                        <button className="p-2 rounded-full bg-[#0d0d0d] text-gray-400 shadow-md duration-300  hover:border-gray-500 border-2 border-gray-800 flex items-center" onClick={() => setIsMute(!isMute)}>{isMute ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />}</button>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </>
                }



            </div>
            <Dialog
                open={isOpen}
                onClose={() => { setIsOpen(false) }}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-4xl rounded bg-[#18181b]">

                        <div className="aspect-video">
                            <ReactPlayer url={youtubeURL + trailerLink.key} playing={true} height="100%" width="100%" />
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>

        </div>
    )
}

export default TrendingVideo
