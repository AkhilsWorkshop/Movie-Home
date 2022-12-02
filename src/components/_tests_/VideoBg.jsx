import { useEffect, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import ReactPlayer from "react-player";
import { youtubeURL } from "../../config/config";
import ImageBg from "../ImageBg";

const VideoBg = ({ data }) => {

    // Loading State
    const [loading, setLoading] = useState(true)

    // Pause / Play Function
    const [isPlaying, setIsPlaying] = useState(true)

    // Mute / Unmute Function
    const [isMute, setIsMute] = useState(false)

    // unLoad Player
    const [isRunning, setIsRunning] = useState(true)

    // Searching Trailer in the array of videos
    const trailer = (data?.videos?.results.filter(search => search.type === "Trailer"))
    console.log(trailer)

    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
        setTimeout(() => setIsPlaying(true), 1500)
    }, [])

    return (
        <div>

            <ImageBg data={data} />

        </div>
    )
}

export default VideoBg
