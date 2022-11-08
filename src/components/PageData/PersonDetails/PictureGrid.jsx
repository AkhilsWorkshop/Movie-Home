import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { fullSizeImg } from "../../../config/config"


const PictureGrid = ({ searchID }) => {

    const fetchPictures = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${searchID}/images?api_key=${process.env.REACT_APP_API_KEY}`)
        setPics(data.profiles)
    }

    const [pics, setPics] = useState([])

    useEffect(() => {
        fetchPictures()
    }, [])

    console.log(pics)

    return (
        <div className="grid grid-cols-4 gap-3">

            {pics?.map(({ file_path }) => (
                <img src={fullSizeImg + file_path} alt="Reload Page" className="w-full object-cover aspect-auto" />
            ))}

        </div>
    )
}

export default PictureGrid
