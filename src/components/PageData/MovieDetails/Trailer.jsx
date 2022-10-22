import React from 'react'
import { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { youtubeURL } from '../../../config/config'

const Trailer = ({ data }) => {

    const [play, setPlay] = useState(false)

    const trailer = (data?.videos?.results.filter(search => search.type === "Trailer"))
    console.log(trailer)

    return (
        <>{trailer === undefined ?
            <></>
            :
            play === false ?
                <div className="flex flex-col justify-center items-center w-full h-[30vh] sm:h-[50vh] gap-2">
                    <AiFillPlayCircle onClick={() => setPlay(!play)} className="text-yellow-500 hover:text-yellow-600 duration-300 cursor-pointer" size={60} />
                    <p className="font-title text-blue-100">Watch Trailer</p>
                </div>
                :
                <div className="flex justify-center w-full h-[30vh] sm:h-[50vh]">


                    <ReactPlayer url={youtubeURL + trailer[0]?.key} playing={true} height="100%" width="100%" />


                </div>
        }
        </>
    )
}

export default Trailer
