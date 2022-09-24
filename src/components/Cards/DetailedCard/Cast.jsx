import axios from "axios"
import { useState, useEffect } from "react"
import { halfSizeImg } from "../../../config/config"
import ScrollContainer from 'react-indiana-drag-scroll'
import Loading from "../../Main/Loading"
import Button from "../../Sub/Button"

const Cast = ({ mediaType, searchID }) => {

    const fetchCredits = async () => {

        if (mediaType === "person") {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`)
            setCast(data.cast)
            setCrew(data.crew)
            console.log(data)
            return data
        }

        else {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
            setCast(data.cast)
            setCrew(data.crew)
            console.log(data)
            return data
        }


    }

    const [cast, setCast] = useState(null);
    const [crew, setCrew] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchCredits()
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    return (
        <>
            {
                loading ? (
                    <Loading />
                )
                    :
                    (
                        < div className="flex flex-col overflow-x-hidden gap-5" >
                            {mediaType === "person" ?
                                <>
                                    {cast.length > 0 ?
                                        <>
                                            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Known for <span className="text-sm text-gray-400">({cast.length} Roles)</span></h1>

                                            <ScrollContainer className="flex flex-wrap">
                                                <div className="flex gap-1">
                                                    {cast?.map((eachPerson) => {
                                                        return eachPerson.poster_path === null ?
                                                            <></>
                                                            :
                                                            <div className="flex flex-col h-auto w-24 rounded-md gap-2">
                                                                <Button media_type={eachPerson.media_type} id={eachPerson.id}>
                                                                    <img
                                                                        src={halfSizeImg + eachPerson.poster_path}
                                                                        alt={eachPerson.title}
                                                                        className="object-fill h-36 w-24 rounded-md shadow-lg shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                                    />
                                                                </Button>
                                                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.character ? eachPerson.character : "Unknown"}</p>
                                                                <p className="truncate sm:text-sm">{eachPerson.title || eachPerson.original_name}</p>

                                                            </div>
                                                    })}
                                                </div>
                                            </ScrollContainer>
                                        </>
                                        :
                                        <></>
                                    }
                                    {crew.length > 0 ?
                                        <>

                                            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Worked as</h1>

                                            <ScrollContainer className="flex flex-wrap">
                                                <div className="flex gap-1">
                                                    {crew?.map((eachPerson) => {
                                                        return eachPerson.poster_path === null ?
                                                            <></>
                                                            :
                                                            <div className="flex flex-col h-auto w-24 rounded-md gap-2">
                                                                <Button media_type={eachPerson.media_type} id={eachPerson.id}>
                                                                    <img
                                                                        src={halfSizeImg + eachPerson.poster_path}
                                                                        alt={eachPerson.title}
                                                                        className="object-fill h-36 w-24 rounded-md shadow-2xl shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                                    />
                                                                </Button>
                                                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.job}</p>
                                                                <p className="truncate sm:text-sm">{eachPerson.title || eachPerson?.original_name}</p>

                                                            </div>
                                                    })}
                                                </div>

                                            </ScrollContainer>
                                        </>
                                        :
                                        <></>
                                    }
                                </>
                                :
                                <>
                                    {cast.length > 0 ?
                                        <>

                                            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Cast</h1>

                                            <ScrollContainer className="flex flex-wrap">
                                                <div className="flex gap-1">
                                                    {cast?.map((eachPerson) => {
                                                        return eachPerson.profile_path === null ?
                                                            <></>
                                                            :
                                                            <div className="flex flex-col h-auto w-24 rounded-md gap-2">
                                                                <Button media_type={"person"} id={eachPerson.id}>
                                                                    <img
                                                                        src={halfSizeImg + eachPerson.profile_path}
                                                                        alt={eachPerson.name}
                                                                        className="object-fill h-36 w-24 rounded-md shadow-lg shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                                    />
                                                                </Button>
                                                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.character ? eachPerson.character : "Unknown"}</p>
                                                                <p className="truncate sm:text-sm">{eachPerson.name}</p>

                                                            </div>
                                                    })}
                                                </div>
                                            </ScrollContainer>
                                        </>
                                        :
                                        <></>
                                    }
                                    {crew.length > 0 ?
                                        <>
                                            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Crew</h1>

                                            <ScrollContainer className="flex flex-wrap">
                                                <div className="flex gap-1">
                                                    {crew?.map((eachPerson) => {
                                                        return eachPerson.profile_path === null ?
                                                            <></>
                                                            :
                                                            <div className="flex flex-col h-auto w-24 rounded-md gap-2">
                                                                <Button media_type={"person"} id={eachPerson.id}>
                                                                    <img
                                                                        src={halfSizeImg + eachPerson.profile_path}
                                                                        alt={eachPerson.name}
                                                                        className="object-fill h-36 w-24 rounded-md shadow-2xl shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                                    />
                                                                </Button>
                                                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.name}</p>
                                                                <p className="truncate sm:text-sm">{eachPerson?.known_for_department}</p>

                                                            </div>
                                                    })}
                                                </div>

                                            </ScrollContainer>
                                        </>
                                        :
                                        <></>
                                    }

                                </>
                            }


                        </div >
                    )
            }
        </>
    )
}

export default Cast
