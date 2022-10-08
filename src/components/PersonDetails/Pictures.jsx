
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { fullSizeImg, halfSizeImg } from "../../config/config"
import ImageGallery from 'react-image-gallery';


const Pictures = ({ searchID }) => {

    const fetchPictures = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${searchID}/images?api_key=${process.env.REACT_APP_API_KEY}`)
        setPics(data.profiles)
    }

    const [pics, setPics] = useState([])

    useEffect(() => {
        fetchPictures()
    }, [])

    const result = pics.map(({ file_path }) => ({
        original: [fullSizeImg + file_path],
        thumbnail: [halfSizeImg + file_path],
    }));

    return (
        <>
            {pics.length > 1 &&

                <div className="flex flex-col gap-5 sm:border sm:border-black sm:p-5 sm:rounded-lg sm:bg-black/25">

                    <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">

                        Pictures

                    </h1>
                    <div className="sm:mx-24">
                        <ImageGallery items={result} thumbnailLoading="lazy" fullscreen />
                    </div>
                </div>

            }
        </>
    )
}

export default Pictures
