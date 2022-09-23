import axios from "axios"
import { useState, useEffect } from "react"
import { halfSizeImg } from "../../../config/config"

const Cast = ({ mediaType, searchID }) => {

    // Image API
    const fetchPersonImg = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        setPerson(data.cast)
    }

    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetchPersonImg()
    }, [])


    return (
        <div className="flex gap-1">
            {person?.map((eachPerson) => {
                return eachPerson.profile_path === null ?
                    <></>
                    :
                    <div className="flex flex-col h-auto w-28 rounded-md gap-2">

                        <img
                            src={halfSizeImg + eachPerson.profile_path}
                            alt={eachPerson.name}
                            className="object-fill h-36 w-24 rounded-md shadow-2xl shadow-black"
                        />
                        <p className="truncate sm:text-sm text-gray-400">{eachPerson?.character}</p>
                        <p className="truncate sm:text-base">{eachPerson.name}</p>

                    </div>
            })}
        </div>
    )
}

export default Cast
