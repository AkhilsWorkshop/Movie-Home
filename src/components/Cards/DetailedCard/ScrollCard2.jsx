import axios from "axios"
import { useState, useEffect } from "react"
import { halfSizeImg } from "../../../config/config"
import ScrollContainer from 'react-indiana-drag-scroll'
import Button from "../../Sub/Button"
import LScrollCard from "../../LazyLoading/LScrollCard"

const ScrollCard2 = ({ mediaType, searchID }) => {

    const fetchCredits2 = async () => {

        if (mediaType === "person") {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`)
            setSecondScroll(data.crew)
        }

        else {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
            setSecondScroll(data.crew)
        }
    }

    const [secondScroll, setSecondScroll] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchCredits2()
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    const uniqueSecondScroll = [...new Map(secondScroll?.map((m) => [m.name, m])).values()];

    return (
        < div className="flex flex-col overflow-x-hidden gap-5" >

            {secondScroll.length > 0 &&
                <>
                    <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">

                        {mediaType === "person" ? <>Worked as</> : <>Crew</>}

                    </h1>

                    <ScrollContainer className="flex flex-wrap">
                        <div className="flex gap-1">
                            {

                                uniqueSecondScroll?.map((eachPerson) => {
                                    return (eachPerson.poster_path || eachPerson.profile_path) != null && (

                                        loading ?

                                            <LScrollCard />

                                            :

                                            <div className="flex flex-col h-auto w-24 rounded-md gap-2">
                                                <Button media_type={eachPerson.media_type || "person"} id={eachPerson.id}>
                                                    <img
                                                        src={halfSizeImg + (eachPerson.poster_path || eachPerson.profile_path)}
                                                        alt={(eachPerson.title) || (eachPerson.name)}
                                                        className="object-fill h-36 w-24 rounded-md shadow-2xl shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                        loading="lazy"
                                                    />
                                                </Button>
                                                <p className="truncate sm:text-sm text-gray-400">{eachPerson?.job || eachPerson?.name}</p>
                                                <p className="truncate sm:text-sm">{eachPerson.title || eachPerson?.original_name || eachPerson?.known_for_departmen}</p>

                                            </div>

                                    )
                                })}
                        </div>

                    </ScrollContainer>
                </>
            }
        </div >
    )
}

export default ScrollCard2
