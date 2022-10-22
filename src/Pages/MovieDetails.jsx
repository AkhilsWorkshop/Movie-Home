import React, { Suspense } from 'react';
import axios from "axios";
import { baseURL, fullSizeImg, halfSizeImg } from "../config/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
import Loading from "../components/Main/Loading";
import Recommendations from "../components/Cards/DetailedCard/Recommendations";
import LScrollCard from '../components/LazyLoading/LScrollCard';
import Trailer from '../components/PageData/MovieDetails/Trailer';
import Title from '../components/PageData/MovieDetails/Title';
import About from '../components/PageData/MovieDetails/About';
import Poster from '../components/PageData/MovieDetails/Poster';
import Overview from '../components/PageData/MovieDetails/Overview';
import Videos from '../components/PageData/MovieDetails/Videos';
import Production from '../components/PageData/MovieDetails/Production';
import tmdb from '../config/tmdb';

const ScrollCard1 = React.lazy(() => import("../components/Cards/DetailedCard/ScrollCard1"));
const ScrollCard2 = React.lazy(() => import("../components/Cards/DetailedCard/ScrollCard2"));

const MovieDetails = () => {

    // Storing the data from API 
    const [data, setData] = useState([])
    const [stream, setStream] = useState([])
    const [loading, setLoading] = useState(false)

    // Getting the ID from URL
    const { mediaType, searchID } = useParams()

    // Movie Details API
    const getMovieDetails = async () => {
        setLoading(true)
        const { data } = await axios.get(`${baseURL}/${mediaType}/${searchID}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images`);
        setData(data)
        console.log(data, "Movie Dets")
    }

    // Watch Providers API
    const getWatchProviders = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
        setStream(data.results)
    }

    useEffect(() => {
        getMovieDetails()
        getWatchProviders()
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


                        <div className="text-white bg-contain bg-no-repeat" Style={`background-image: url(${fullSizeImg}${data?.backdrop_path})`} >

                            <div className="flex flex-col justify-center sm:px-20 xl:px-52 lg:px-32 backdrop-blur-[1px] backdrop-brightness-50 bg-gradient-to-b via-gray-900 from-transparent to-gray-900 ">

                                <Trailer data={data} />

                                <div className="flex flex-col gap-5 bg-gray-900 p-6 rounded-md">

                                    <Title data={data} />

                                    <div className="flex flex-col md:flex-row gap-5">

                                        <div className="flex flex-col items-center gap-4">

                                            <Poster data={data} stream={stream} />
                                            <About data={data} mediaType={mediaType} />

                                        </div>

                                        <div className="flex flex-col w-full gap-5 overflow-hidden">


                                            <Suspense fallback={<LScrollCard />}>

                                                <ScrollCard1 mediaType={mediaType} searchID={searchID} />

                                            </Suspense>

                                            <Suspense fallback={<LScrollCard />}>

                                                <ScrollCard2 mediaType={mediaType} searchID={searchID} />

                                            </Suspense>

                                            <Overview data={data} />

                                            <Videos data={data} />

                                            <Production companies={data.production_companies} />

                                        </div>

                                    </div>

                                </div>

                                <Recommendations id={data.id} mediaType={mediaType} />

                            </div>

                        </div>

                        <>

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
