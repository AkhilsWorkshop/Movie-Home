import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fullSizeImg, trending, TRENDING } from "../../config/config";
import Button from "../Sub/Button";


const Trending = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`${TRENDING}${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    useEffect(() => {

        fetchTrending()
        setTimeout(() => { viewData() }, 1000)

    }, [])

    const viewData = () => {
        console.log(content)
    }

    return (
        <div className="text-white">

            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay={false}
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
                    <div key={index} className="text-white bg-cover bg-top font-title" Style={`background-image: url(${fullSizeImg}${each?.backdrop_path})`} >

                        <div className="flex flex-col justify-center h-[30vh] sm:h-[60vh] backdrop-blur-[1px] backdrop-brightness-[70%] bg-gradient-to-b from-transparent to-[#18181b]">
                            <div className="flex flex-col gap-5 px-16 sm:px-[10rem]">
                                <h1 className="text-2xl sm:text-[3rem] line font-bold text-blue-100 leading-tight">{each?.title || each?.name}</h1>
                                <p className="hidden sm:block text-xl truncate">{each?.overview}</p>
                                <Button media_type={each?.media_type} id={each?.id}>
                                    <button className="p-2 px-3 font-semibold rounded-md w-fit bg-yellow-500/70 shadow-lg border-2 duration-300 hover:bg-yellow-600/80 border-yellow-600/80"> More Info</button>
                                </Button>

                            </div>

                        </div>

                    </div>
                ))}

            </Carousel>


        </div>
    )
}

export default Trending
