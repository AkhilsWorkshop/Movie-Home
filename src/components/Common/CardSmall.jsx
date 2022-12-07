import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { halfSizeImg, imgNotAvailable } from '../../config/config'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../Sub/Button';
import { v4 as uuidv4 } from 'uuid';

const CardSmall = ({ credits, title }) => {

    return (
        <>
            {credits?.length > 0
                ?
                <div className="text-white flex flex-col gap-5 relative">

                    <h1 className="border-l-4 pl-2 border-yellow-500 text-slate-400 text-sm font-semibold uppercase">{title}</h1>

                    <ScrollContainer className="flex gap-2 overflow-hidden">

                        {/* {credits?.sort((a, b) => a.profile_path ? a.profile_path > b.profile_path : true).map((eachItem) => ( */}
                        {credits?.sort((a, b) => a.poster_path ? b.vote_count - a.vote_count : true).map((eachItem) => (

                            <Button media_type={eachItem.media_type || "person"} id={eachItem.id} key={uuidv4()}>
                                <div className="flex flex-col gap-2 h-auto w-24 relative">

                                    {eachItem.gender === undefined &&

                                        <div className="absolute text-xs sm:text-sm bg-black/70 rounded-md p-1 mt-[0.5rem] right-0 mr-[0.5rem] z-10">
                                            <p>{eachItem.first_air_date?.slice(0, 4) || eachItem.release_date?.slice(0, 4) || "N/A"}</p>
                                        </div>

                                    }

                                    <div className="flex h-36 w-24 overflow-hidden rounded-sm hover:cursor-pointer">
                                        <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                            src={((eachItem.profile_path === null) || (eachItem.poster_path === null)) ? imgNotAvailable : `${halfSizeImg}${eachItem.poster_path || eachItem.profile_path}`}
                                            alt="Reload Page"
                                            loading="lazy">
                                        </img>
                                    </div>

                                    <p className="truncate sm:text-sm text-left text-gray-400">{eachItem.character || eachItem.job || "Unknown"}</p>
                                    <p className="truncate sm:text-xs text-left">{(eachItem.title) || (eachItem.original_name) || (eachItem.name)}</p>
                                </div>
                            </Button>
                        ))}

                    </ScrollContainer>

                </div>
                :
                <></>
            }
        </>
    )
}

export default CardSmall
