import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { halfSizeImg, imgNotAvailable } from '../../../config/config'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../Sub/Button';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import CardCorner from './CardCorner';
import { v4 as uuidv4 } from 'uuid';

const Card = ({ title, first, second, media_type }) => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`${first}${process.env.REACT_APP_API_KEY}${second}`);
        setContent(data.results);
        console.log(data.results)
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white flex flex-col gap-5 relative bg-[#18181b]">

            <div className="px-4 sm:px-10">

                <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">{title}</h1>

            </div>

            <ScrollContainer className="px-4 sm:px-10 flex gap-3 overflow-hidden">

                {content?.map((eachItem) => (

                    <Button media_type={media_type} id={eachItem.id} key={uuidv4()}>
                        <div
                            className="flex flex-col gap-2 w-[7rem] sm:w-[10rem] relative">

                            {eachItem.gender === undefined &&

                                <div className="absolute text-xs sm:text-sm bg-black/70 rounded-md p-1 mt-[0.5rem] right-0 mr-[0.5rem] z-10">
                                    <p>{eachItem.first_air_date?.slice(0, 4) || eachItem.release_date?.slice(0, 4) || "N/A"}</p>
                                </div>

                            }

                            <div className="flex w-[7rem] sm:w-[10rem] overflow-hidden rounded-md hover:cursor-pointer">
                                <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                    src={((eachItem.profile_path === null) || (eachItem.poster_path === null)) ? imgNotAvailable : `${halfSizeImg}${eachItem.poster_path || eachItem.profile_path}`}
                                    alt="Reload Page"
                                    loading="lazy">
                                </img>
                            </div>

                            <p className="text-xs sm:text-base truncate">{eachItem.title || eachItem.name}</p>
                        </div>
                    </Button>
                ))}



            </ScrollContainer>

            <CardCorner />

        </div>
    )
}

export default Card
