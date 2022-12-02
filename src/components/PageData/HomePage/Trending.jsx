import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillPlayFill } from "react-icons/bs"
import { baseURL, fullSizeImg, trending, TRENDING, youtubeURL } from "../../../config/config";
import Button from "../../Sub/Button";
import { Dialog } from '@headlessui/react'
import ReactPlayer from "react-player";


const Trending = () => {

    // For Trending Data
    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`${TRENDING}${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    // For Trailer Data
    const [trailerLink, setTrailerLink] = useState([])

    const getTrailer = async (media_type, id) => {
        const { data } = await axios.get(`${baseURL}/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const filteredData = data.results.filter(search => search.type === "Trailer")
        setTrailerLink(filteredData[0])
    }

    // For Carousel SlideShow
    const [slideShow, setSlideShow] = useState(true)

    useEffect(() => {

        fetchTrending()
        setTimeout(() => { viewData() }, 1000)

    }, [])

    const viewData = () => {
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="text-white">

            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay={slideShow}
                autoPlaySpeed={5000}
                centerMode={false}
                className="hover:cursor-grab active:cursor-grabbing relative"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={trending}
                rewind
                rewindWithAnimation={true}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                transitionDuration={500}
            >

                {content?.map((each, index) => (
                    <div id="background" key={index} className="text-white bg-cover bg-top font-title" style={{ backgroundImage: `url(${fullSizeImg}${each?.backdrop_path})` }} >

                        <div className="flex flex-col justify-center h-[30vh] sm:h-[60vh] backdrop-blur-[1px] backdrop-brightness-[70%] bg-gradient-to-b from-transparent to-[#18181b]">
                            <div className="flex flex-col gap-5 px-16 sm:px-[10rem]">
                                <h1 className="text-2xl sm:text-[3rem] line font-bold text-blue-100 leading-tight">{each?.title || each?.name}</h1>
                                <p className="hidden sm:block text-xl truncate">{each?.overview}</p>
                                <div className="flex gap-2">
                                    <button onClick={() => { setIsOpen(true); getTrailer(each?.media_type, each?.id); setSlideShow(false) }} className="p-2 px-3 font-semibold rounded-md w-fit bg-yellow-500 shadow-md border h-12 duration-300 text-black hover:bg-yellow-600 border-yellow-500/70 flex items-center"><BsFillPlayFill size={25} /> Trailer</button>
                                    <Button media_type={each?.media_type} id={each?.id}>
                                        <input type="submit" value="More Info" className="p-2 px-3 font-semibold rounded-md bg-black/60 shadow-md border duration-200 h-12 w-28 hover:border-2 hover:cursor-pointer text-yellow-500 hover:border-yellow-600 border-yellow-500/70" />
                                    </Button>
                                </div>


                            </div>

                        </div>

                    </div>
                ))
                }

            </Carousel >

            <Dialog
                open={isOpen}
                onClose={() => { setIsOpen(false); setSlideShow(true) }}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-4xl rounded bg-[#18181b]">

                        <div className="aspect-video">
                            <ReactPlayer url={youtubeURL + trailerLink.key} playing={true} controls={true} height="100%" width="100%" />
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>

        </div >
    )
}

export default Trending
