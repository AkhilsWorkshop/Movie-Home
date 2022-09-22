import axios from "axios";
import { fullSizeImg, halfSizeImg, MOVIE_DETAILS } from "../config/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { AiTwotoneStar } from "react-icons/ai"
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import Loading from "./Main/Loading";


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
    const [loading, setLoading] = useState(false)

    // Getting the ID from URL
    const { mediaType, searchID } = useParams()

    // Movie Details API
    const getMovieDetails = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}?api_key=${process.env.REACT_APP_API_KEY}`);
        console.log(data)
        setData(data)
        setLoading(false)
    }

    // const country = data.production_countries[0].name

    useEffect(() => {
        getMovieDetails()
        fetchVideoData()
    }, [])

    return (
        <div>
            <Header />
            {
                loading ? (
                    <Loading />
                )
                    :
                    (<div className="flex flex-col-reverse md:flex-col">

                        <div className="text-white bg-cover" Style={`background-image: url(${fullSizeImg}${data.backdrop_path})`} >

                            <div className="flex flex-col justify-center p-5 md:px-72 backdrop-blur-md backdrop-brightness-50 bg-gradient-to-t via-transparent from-transparent to-gray-900">

                                <div className="flex flex-wrap mb-5">
                                    <h1 className="text-4xl">{data.original_title || data.name}</h1>
                                </div>

                                <div className="mb-5">
                                    <img
                                        src={halfSizeImg + data.poster_path}
                                        alt={data.original_title}
                                        className="object-fill h-60 rounded-md shadow-2xl shadow-black border-2 border-gray-700"
                                    />
                                    <div className="flex items-center gap-1">
                                        <AiTwotoneStar size={30} className="text-yellow-400" />
                                        <h1 className="text-lg">{Math.round(data.vote_average)}<span>/10</span><span className="text-sm"> ({data.vote_count} votes)</span></h1>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">


                                    <p className="text-white text-sm text-justify">{data.overview}</p>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-slate-400 text-sm">Country:
                                            {/* {data.production_countries.map(({ id, name }) => (
                                                <span key={id} className="text-white"> {name}</span>
                                            ))} */}
                                        </p>
                                        <p className="text-slate-400 text-sm">Genre:
                                            {/* {data.genres.map(({ id, name }) => (
                                                <span key={id} className="text-white"> {name}</span>
                                            ))} */}
                                        </p>
                                        <p className="text-slate-400 text-sm">Released: <span className="text-white">{data.first_air_date || data.release_date || "N/A"}</span></p>
                                        <p className="text-slate-400 text-sm">Production: <span className="text-white"></span>
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div>
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

                    </div>)
            }
            <Footer />
        </div>
    )
}

export default DetailedCard
