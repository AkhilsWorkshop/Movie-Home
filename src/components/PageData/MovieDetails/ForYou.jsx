import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { halfSizeImg, imgNotAvailable } from "../../../config/config";
import MediumTitle from "../../Common/Title/MediumTitle";
import Button from "../../Sub/Button";
import { v4 as uuidv4 } from 'uuid';


const ForYou = ({ id, mediaType }) => {

    const [content, setContent] = useState([])

    const fetch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            {content.length > 1 &&
                <div className="text-white flex flex-col gap-5 relative">

                    <MediumTitle title="recommended for you" />

                    <ScrollContainer className="flex gap-3 overflow-hidden">

                        {content?.map((eachItem) => (

                            <Button media_type={mediaType} id={eachItem.id} key={uuidv4()}>
                                <div
                                    className="flex flex-col gap-2 w-[7rem] sm:w-[10rem] relative">

                                    {eachItem.gender === undefined &&

                                        <div className="absolute text-xs sm:text-sm bg-black/70 rounded-sm p-1 mt-[0.5rem] right-0 mr-[0.5rem] z-10">
                                            <p>{eachItem.first_air_date?.slice(0, 4) || eachItem.release_date?.slice(0, 4) || "N/A"}</p>
                                        </div>

                                    }

                                    <div className="flex w-[7rem] sm:w-[10rem] overflow-hidden rounded-sm hover:cursor-pointer">
                                        <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                            src={eachItem.profile_path === null ? imgNotAvailable : `${halfSizeImg}${eachItem.poster_path || eachItem.profile_path}`}
                                            alt="Reload Page"
                                            loading="lazy">
                                        </img>
                                    </div>

                                </div>
                            </Button>
                        ))}

                    </ScrollContainer>

                </div>
            }
        </>
    )
}

export default ForYou
