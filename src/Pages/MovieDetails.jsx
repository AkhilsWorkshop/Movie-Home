import React, { Suspense } from 'react';
import axios from "axios";
import { fullSizeImg, halfSizeImg } from "../config/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
import Loading from "../components/Main/Loading";
import Recommendations from "../components/Cards/DetailedCard/Recommendations";
import LScrollCard from '../components/LazyLoading/LScrollCard';
import About from '../PageData/MovieDetails/About';
import Trailer from '../PageData/MovieDetails/Trailer';
import Overview from '../PageData/MovieDetails/Overview';
import Poster from '../PageData/MovieDetails/Poster';

const ScrollCard1 = React.lazy(() => import("../components/Cards/DetailedCard/ScrollCard1"));
const ScrollCard2 = React.lazy(() => import("../components/Cards/DetailedCard/ScrollCard2"));

const MovieDetails = () => {

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
        setData(data)
        console.log(data)
    }

    useEffect(() => {
        getMovieDetails()
        fetchVideoData()
        setTimeout(() => { setLoading(false) }, 500)
    }, [])

    return (
        <div>
            <Header />
            {
                loading ? (
                    <Loading />
                )
                    :
                    (<div className="flex flex-col md:flex-col">


                        <div className="text-white bg-contain bg-no-repeat" Style={`background-image: url(${fullSizeImg}${data.backdrop_path})`} >

                            <div className="flex flex-col justify-center sm:px-20 xl:px-52 lg:px-32 backdrop-blur-[1px] backdrop-brightness-50 bg-gradient-to-b via-gray-900 from-transparent to-gray-900 ">

                                <Trailer video={video} videoURL={videoURL} />

                                <div className="flex gap-5 bg-gray-900 p-6 rounded-md">

                                    <div className="flex flex-col items-start gap-4">

                                        <Poster data={data} />
                                        <About data={data} mediaType={mediaType} />

                                    </div>

                                    <div className="flex flex-col w-full gap-5 overflow-hidden sm:pt-12">


                                        <Suspense fallback={<LScrollCard />}>

                                            <ScrollCard1 mediaType={mediaType} searchID={searchID} />

                                        </Suspense>

                                        <Suspense fallback={<LScrollCard />}>

                                            <ScrollCard2 mediaType={mediaType} searchID={searchID} />

                                        </Suspense>

                                        <Overview data={data} />

                                    </div>

                                </div>
                            </div>

                        </div>

                        <>

                            {video === undefined ?
                                <></>
                                :
                                <div className="text-white flex flex-col justify-center p-5 sm:px-20 xl:px-52 lg:px-32 backdrop-blur-md backdrop-brightness-50 bg-gradient-to-b from-gray-900 to-gray-900 gap-5">
                                    <div className="flex flex-col gap-5 flex-nowrap">
                                        <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl">Videos</h1>
                                        <div className="flex ">
                                            <ReactPlayer className="" url={videoURL} />
                                        </div>

                                    </div>
                                </div>
                            }

                        </>

                        <>
                            <Recommendations id={data.id} mediaType={mediaType} />
                        </>

                        <>
                            {/* <MoviePictures searchID={searchID} mediaType={mediaType} /> */}
                        </>


                    </div>)
            }
            <Footer />
        </div>
    )
}

export default MovieDetails
