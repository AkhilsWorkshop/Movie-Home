import axios from "axios";
import { fullSizeImg, halfSizeImg, MOVIE_DETAILS } from "../config/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { AiFillPlayCircle } from "react-icons/ai"


const DetailedCard = () => {

    // Video API 
    const fetchVideoData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        setVideo(data.results[0]?.key)
    }

    // Storing the data from API 
    const [video, setVideo] = useState();
    const videoURL = `https://www.youtube.com/watch?v=${video}`
    const [data, setData] = useState([])

    // Getting the ID from URL
    const { mediaType, searchID } = useParams()

    // Movie Details API
    const getMovieDetails = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}?api_key=${process.env.REACT_APP_API_KEY}`);
        console.log(data.production_countries[0].name)
        console.log(data)
        setData(data)
    }



    // const country = data.production_countries[0].name

    useEffect(() => {
        getMovieDetails()
        fetchVideoData()
    }, [])

    return (
        <div>

            <div className="text-white bg-cover" Style={`background-image: url(${fullSizeImg}${data.backdrop_path})`} >


                <div className="flex flex-col justify-center items-center min-h-screen backdrop-blur-md backdrop-brightness-50 bg-gradient-to-t via-transparent from-transparent to-gray-900"
                >
                    <div className="mb-5">
                        <img
                            src={halfSizeImg + data.poster_path}
                            alt={data.original_title}
                            className="object-fill h-60 rounded-md shadow-2xl shadow-black"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1>{data.original_title}</h1>
                        <p className="text-slate-400 text-sm">{data.overview}</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-slate-400 text-sm">Country: <span className="text-white"></span></p>
                            <p className="text-slate-400 text-sm">Genre: <span className="text-white"></span></p>
                            <p className="text-slate-400 text-sm">Released: <span className="text-white"></span>{data.first_air_date || data.release_date || "N/A"}</p>
                            <p className="text-slate-400 text-sm">Production: <span className="text-white"></span>
                            </p>
                        </div>


                    </div>

                </div>
            </div>
            {video === undefined ?
                <></>
                :
                <div className="relative pt-[56.25%]">
                    <ReactPlayer
                        className="absolute top-0 left-0 "
                        url={videoURL}
                        width="100%"
                        height="100%"
                    />
                </div>
            }

        </div>
    )
}

export default DetailedCard
