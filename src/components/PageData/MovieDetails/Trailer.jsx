import React from 'react'
import { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import ReactPlayer from 'react-player'

const Trailer = ({ video, videoURL }) => {

    const [play, setPlay] = useState(false)


    return (
        <>{video === undefined ?
            <></>
            :
            play === false ?
                <div className="flex flex-col justify-center items-center w-full h-[30vh] sm:h-[50vh] gap-2">
                    <AiFillPlayCircle onClick={() => setPlay(!play)} className="text-yellow-500 hover:text-yellow-600 duration-300 cursor-pointer" size={60} />
                    <p className="font-title text-blue-100">Watch Trailer</p>
                </div>
                :
                <div className="flex justify-center w-full h-[30vh] sm:h-[50vh]">


                    <ReactPlayer url={videoURL} playing={true} height="100%" width="100%" />


                </div>
        }
        </>
    )
}

export default Trailer
