
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { halfSizeImg } from "../../../config/config"
import ImageGallery from 'react-image-gallery';

const Pictures = ({ searchID }) => {



    const fetchPictures = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${searchID}/images?api_key=${process.env.REACT_APP_API_KEY}`)
        setPics(data.profiles)
        console.log(data.profiles)
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

                    </div>

                </div>

            }
        </>
    )
}

export default Pictures
