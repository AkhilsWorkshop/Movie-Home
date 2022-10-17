import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { halfSizeImg, imgNotAvailable } from '../../../config/config'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from '../../Sub/Button';

const CardLandscape = ({ content, media_type, date }) => {



    return (
        <ScrollContainer className="px-4 sm:px-10 flex gap-3 overflow-hidden">

            {content?.filter(eachContent => eachContent.backdrop_path !== null).map((eachItem, index) => (

                <Button media_type={media_type} id={eachItem.id} >
                    <div key={index} className="flex flex-col gap-2 w-[15rem] sm:w-[20rem] relative">

                        {eachItem.gender === undefined &&

                            <div className="absolute text-xs sm:text-sm bg-black/70 rounded-md p-1 mt-[0.5rem] right-0 mr-[0.5rem] z-10">
                                {(() => {
                                    const date1 = new Date(date);
                                    const date2 = new Date(eachItem.release_date);

                                    const TimeDif = date2.getTime() - date1.getTime();

                                    const releaseDays = TimeDif / (1000 * 3600 * 24);

                                    if (releaseDays >= 1) {
                                        return (<p>In {releaseDays} days</p>)
                                    }

                                    else {
                                        return (<p>Released</p>)
                                    }

                                })()}
                            </div>

                        }

                        <div className="flex w-[15rem] sm:w-[20rem] overflow-hidden rounded-md hover:cursor-pointer">
                            <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-auto"
                                src={`${halfSizeImg}${eachItem.backdrop_path}`}
                                alt="Reload Page"
                                loading="lazy">
                            </img>
                        </div>

                        <p className="text-xs sm:text-base truncate">{eachItem.title || eachItem.name}</p>
                    </div>
                </Button>
            ))}



        </ScrollContainer>
    )
}

export default CardLandscape
