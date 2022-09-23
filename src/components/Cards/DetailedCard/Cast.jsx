import axios from "axios"
import { useState, useEffect } from "react"
import { halfSizeImg } from "../../../config/config"
import ScrollContainer from 'react-indiana-drag-scroll'

const Cast = ({ mediaType, searchID }) => {

    const fetchCredits = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        setCast(data.cast)
        setCrew(data.crew)
        console.log(data.cast)

    }

    const [cast, setCast] = useState(null);
    const [crew, setCrew] = useState(null);

    useEffect(() => {
        fetchCredits()
    }, [])




    return (

        <div className="flex flex-col overflow-x-hidden gap-5" >

            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Cast</h1>

            <ScrollContainer className="flex flex-wrap">
                <div className="flex gap-1">
                    {cast?.map((eachPerson) => {
                        return eachPerson.profile_path === null ?
                            <></>
                            :
                            <div className="flex flex-col h-auto w-28 rounded-md gap-2">

                                <img
                                    src={halfSizeImg + eachPerson.profile_path}
                                    alt={eachPerson.name}
                                    className="object-fill h-36 w-24 rounded-md shadow-lg shadow-black"
                                />
                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.character ? eachPerson.character : "Unknown"}</p>
                                <p className="truncate sm:text-base">{eachPerson.name}</p>

                            </div>
                    })}
                </div>
            </ScrollContainer>

            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Crew</h1>

            <ScrollContainer className="flex flex-wrap overflow-x-auto">
                <div className="flex gap-1">
                    {crew?.map((eachPerson) => {
                        return eachPerson.profile_path === null ?
                            <></>
                            :
                            <div className="flex flex-col h-auto w-28 rounded-md gap-2">

                                <img
                                    src={halfSizeImg + eachPerson.profile_path}
                                    alt={eachPerson.name}
                                    className="object-fill h-36 w-24 rounded-md shadow-2xl shadow-black"
                                />
                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.job}</p>
                                <p className="truncate sm:text-base">{eachPerson.name}</p>

                            </div>
                    })}
                </div>

            </ScrollContainer>
        </div>
    )
}

export default Cast
