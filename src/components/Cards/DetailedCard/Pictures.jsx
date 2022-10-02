import { data } from "autoprefixer"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { halfSizeImg } from "../../../config/config"
import Carousel from 'react-multi-carousel'
import ReactImageGallery from "react-image-gallery"

const Pictures = ({ searchID }) => {

    const fetchPictures = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${searchID}/images?api_key=${process.env.REACT_APP_API_KEY}`)
        setPics(data.profiles)
    }

    const [loading, setLoading] = useState(true);

    const [pics, setPics] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchPictures()
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    return (
        <>
            {pics.length > 1 &&

                <div className="flex flex-col overflow-x-hidden gap-5">

                    <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">

                        Pictures

                    </h1>
                    <div className="flex flex-row flex-wrap gap-2">

                        {/* <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite={false}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 5
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 8
                                }
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            {loading ?
                                <h1>Loading</h1>
                                :
                                pics?.map(({ key, file_path }) => (

                                    <img className="object-fill h-72 w-48" key={key} src={halfSizeImg + file_path} alt="Refresh Page" />

                                ))
                            }

                        </Carousel> */}

                        <ReactImageGallery
                            original={halfSizeImg + pics?.file_path}

                        />
                    </div>

                </div>

            }
        </>
    )
}

export default Pictures
