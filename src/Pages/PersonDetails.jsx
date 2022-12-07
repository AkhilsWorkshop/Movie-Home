import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CardSmall from "../components/Common/CardSmall";
import LOverview from "../components/LazyLoading/LOverview";
import LPersonAbout from "../components/LazyLoading/LPersonAbout";
import LPicture from "../components/LazyLoading/LPicture";
import LTitle from "../components/LazyLoading/LTitle";
import Pictures from "../components/PageData/PersonDetails/Pictures";
import { halfSizeImg } from "../config/config";

const PersonDetails = () => {

    const { searchID } = useParams()
    const mediaType = "person"

    const [content, setContent] = useState([])
    const [credits, setCredits] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchPerson = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${searchID}?api_key=${process.env.REACT_APP_API_KEY}`)
        setContent(data)
    }

    const fetchPersonWorks = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}`)
        setCredits(data)
    }

    useEffect(() => {
        setLoading(true)
        fetchPerson()
        fetchPersonWorks()
        setTimeout(() => { setLoading(false) }, 500)
    }, [])

    return (
        <div className="flex flex-col md:flex-col pb-16">

            <div className="text-white bg-cover">

                <div className="flex flex-col justify-center p-5 sm:px-20 xl:px-52 lg:px-32 backdrop-blur-md backdrop-brightness-50 bg-gradient-to-b via-transparent from-transparent to-gray-900 gap-5">

                    <div className="flex">
                        {loading ?
                            <LTitle />
                            :
                            <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">{content.name}</h1>
                        }
                    </div>

                    <div className="flex justify-between items-start gap-4">
                        {loading ?
                            <LPicture />
                            :

                            <img
                                src={halfSizeImg + content.profile_path}
                                alt={content.name}
                                className="object-fill h-72 shadow-2xl shadow-black border border-gray-700"
                            />
                        }


                        {loading ?
                            <LPersonAbout />
                            :

                            <div className="flex flex-col items-start sm:items-end gap-5">

                                <>
                                    {
                                        content.homepage === null ?
                                            <></>
                                            :
                                            <div onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = content.homepage;
                                            }}>
                                                <FaExternalLinkAlt size={20} className=" text-gray-300 cursor-pointer hover:text-white" />
                                            </div>
                                    }
                                </>


                                <div className="flex items-center gap-1">
                                    <AiTwotoneStar size={30} className="text-yellow-400" />
                                    <h1 className=" text-base sm:text-2xl font-bold">{Math.round(content.popularity)}<span className=" text-sm sm:text-lg text-slate-400"> % popular</span></h1>
                                </div>


                                <div className="flex flex-col gap-1 items-start sm:items-end">

                                    <p className="text-slate-400 text-sm">Known for:
                                        <span className="text-white font-bold"> {content.known_for_department}</span>
                                    </p>
                                    {
                                        content.birthday === null ?
                                            <></>
                                            :
                                            <p className="text-slate-400 text-sm">Born:
                                                <span className="text-white font-bold"> {new Date(content.birthday).toDateString().slice(4)}</span> in
                                                <span className="text-white font-bold"> {content.place_of_birth}</span>
                                            </p>
                                    }

                                    {
                                        content.deathday &&
                                        <p className="text-slate-400 text-sm">Died on:
                                            <span className="text-white font-bold"> {new Date(content.deathday).toDateString().slice(4)}</span>

                                        </p>
                                    }
                                    {
                                        content.birthday === null ?
                                            <></>
                                            :
                                            <p className="text-slate-400 text-sm">Age:
                                                <span className="text-white font-bold"> {Math.floor((new Date() - new Date(content.birthday).getTime()) / 3.15576e+10)}</span>
                                            </p>
                                    }
                                </div>

                            </div>
                        }
                    </div>

                    <div className="flex flex-col">
                        {loading ?
                            <LOverview />
                            :
                            <p className="text-white text-base">{content.biography}</p>
                        }
                    </div>

                    <CardSmall credits={credits?.cast} mediaType={mediaType} searchID={searchID} title="known for" />
                    <CardSmall credits={credits?.crew} mediaType={mediaType} searchID={searchID} title="worked as" />
                    <Pictures searchID={searchID} />


                </div>

            </div>







        </div>
    )
}

export default PersonDetails
