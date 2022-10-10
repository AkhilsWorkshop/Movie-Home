import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { halfSizeImg, imgNotAvailable } from '../../../config/config'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../Sub/Button';

const Card = ({ content, media_type }) => {
    return (
        <ScrollContainer className="px-4 sm:px-10 flex gap-3  overflow-hidden" id="container">

            {content?.map((eachItem, index) => (

                <Button media_type={media_type} id={eachItem.id} >
                    <div key={index}
                        className="flex flex-col gap-2 w-[7rem] sm:w-[10rem] relative">

                        {eachItem.gender === undefined &&

                            <div className="hidden sm:flex absolute bg-black/70 rounded-md px-2 mt-[0.5rem] ml-[3.5rem] sm:ml-[6.5rem] z-10">
                                <p>{eachItem.first_air_date?.slice(0, 4) || eachItem.release_date?.slice(0, 4) || "N/A"}</p>
                            </div>

                        }

                        <div className="flex w-[7rem] sm:w-[10rem] overflow-hidden rounded-md hover:cursor-pointer">
                            <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                src={eachItem.profile_path === null ? imgNotAvailable : `${halfSizeImg}${eachItem.poster_path || eachItem.profile_path}`}
                                alt="Reload Page"
                                loading="lazy">
                            </img>
                        </div>

                        <p className="text-xs sm:text-base truncate">{eachItem.title || eachItem.name}</p>
                    </div>
                </Button>
            ))}

            {/* <div className="absolute w-[10%] h-[86%] bg-gradient-to-r from-transparent to-black/80 right-0 top-0 hover:duration-1000 hover:to-black hover:cursor-pointer"
            >
                <AiOutlineRight size={60} className="absolute top-[40%] left-[50%]" />
            </div> */}

        </ScrollContainer>
    )
}

export default Card
