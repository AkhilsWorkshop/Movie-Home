import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { halfSizeImg } from '../../../config/config'
import LScrollCard from '../../LazyLoading/LScrollCard'
import Button from '../../Sub/Button'

const ScrollCard1 = ({ mediaType, searchID }) => {

    const fetchCredits1 = async () => {

        if (mediaType === "person") {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`)
            setFirstScroll(data.cast)
        }

        else {
            const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
            setFirstScroll(data.cast)
        }
    }

    const [firstScroll, setFirstScroll] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchCredits1()
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    return (
        <div className="flex flex-col overflow-x-hidden gap-5">

            {firstScroll.length > 0 &&
                <>
                    <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">

                        {mediaType === "person" ? <>Known for</> : <>Cast</>}

                    </h1>

                    <ScrollContainer className="flex flex-wrap">
                        <div className="flex gap-1">
                            {firstScroll?.map((eachPerson) => {
                                return (eachPerson.poster_path || eachPerson.profile_path) != null && (


                                    loading ?

                                        <LScrollCard />

                                        :

                                        <div className="flex flex-col h-auto w-24 rounded-md gap-2">

                                            <Button media_type={eachPerson.media_type || "person"} id={eachPerson.id}>
                                                <img
                                                    src={halfSizeImg + (eachPerson.poster_path || eachPerson.profile_path)}
                                                    alt={(eachPerson.title) || (eachPerson.name)}
                                                    className="object-fill h-36 w-24 rounded-md shadow-lg shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                    loading="lazy"
                                                />
                                            </Button>
                                            <p className="truncate sm:text-sm text-gray-400">{eachPerson?.character ? eachPerson.character : "Unknown"}</p>
                                            <p className="truncate sm:text-sm">{(eachPerson.title) || (eachPerson.original_name) || (eachPerson.name)}</p>

                                        </div>

                                )
                            })}

                        </div>
                    </ScrollContainer>
                </>
            }
        </div>
    )
}

export default ScrollCard1