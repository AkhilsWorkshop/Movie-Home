import axios from "axios"
import { useState, useEffect } from "react"
import { halfSizeImg, responsive } from "../../../config/config"
import Button from "../../Sub/Button"
import LScrollCard from "../../LazyLoading/LScrollCard"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollContainer from "react-indiana-drag-scroll"
import { v4 as uuidv4 } from 'uuid';

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
        < div className="flex flex-col gap-5 w-full" >

            {uniqueSecondScroll.length > 0 &&

                <>
                    <h1 className="border-l-4 pl-2 border-yellow-500 text-slate-400 text-sm font-semibold uppercase">

                        {mediaType === "person" ? <>Worked as</> : <>Crew</>}

                    </h1>

                    <ScrollContainer className="flex gap-3 w-full overflow-hidden">

                        {uniqueSecondScroll?.map((eachPerson) => {
                            return (eachPerson.poster_path || eachPerson.profile_path) != null && (


                                loading ?

                                    <LScrollCard key={uuidv4()} />

                                    :

                                    <div key={uuidv4()} className="flex flex-col h-auto w-24 rounded-md gap-2">
                                        <div className="h-36 w-24 rounded-md overflow-hidden">
                                            <Button media_type={eachPerson.media_type || "person"} id={eachPerson.id}>
                                                <img
                                                    src={halfSizeImg + (eachPerson.poster_path || eachPerson.profile_path)}
                                                    alt="Refresh Page"
                                                    className="object-fill h-36 w-24 rounded-md shadow-2xl shadow-black duration-150 sm:hover:rounded-none sm:hover:scale-105 sm:hover:saturate-150"
                                                    loading="lazy"
                                                />
                                            </Button>
                                        </div>
                                        <p className="truncate sm:text-sm text-gray-400">{eachPerson?.job || eachPerson?.name}</p>
                                        <p className="truncate sm:text-xs">{eachPerson.title || eachPerson?.original_name || eachPerson?.known_for_departmen}</p>

                                    </div>
                            )
                        })}



                    </ScrollContainer>

                </>
            }
        </div >
    )
}

export default ScrollCard2
