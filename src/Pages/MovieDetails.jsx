import axios from "axios";
import { baseURL } from "../config/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../layouts/Loading";
import ImageBg from '../components/Cards/ImageBg';
import Trailer from "../components/PageData/MovieDetails/Trailer";
import Title from "../components/PageData/MovieDetails/Title";
import Poster from "../components/PageData/MovieDetails/Poster";
import About from "../components/PageData/MovieDetails/About";
import CardSmall from "../components/Common/Cards/CardSmall";
import Overview from "../components/PageData/MovieDetails/Overview";
import Videos from "../components/PageData/MovieDetails/Videos";
import Production from "../components/PageData/MovieDetails/Production";
import Stream from "../components/_tests_/Stream";
import ForYou from "../components/PageData/MovieDetails/ForYou";

const MovieDetails = () => {

    // Storing the data from API 
    const [data, setData] = useState([])
    const [watchProv, setWatchProv] = useState([])
    const [credits, setCredits] = useState([])
    const [loading, setLoading] = useState(false)

    // Getting the ID from URL
    const { mediaType, searchID } = useParams()

    // Movie Details API
    const getMovieDetails = async () => {
        setLoading(true)
        const { data } = await axios.get(`${baseURL}/${mediaType}/${searchID}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images`);
        setData(data)
    }

    // Watch Providers API
    const getWatchProviders = async () => {
        const { data } = await axios.get(`${baseURL}/${mediaType}/${searchID}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
        setWatchProv(data)
    }

    // Movie Credits API
    const getCredits = async () => {
        const { data } = await axios.get(`${baseURL}/${mediaType}/${searchID}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
        setCredits(data);
    }

    useEffect(() => {
        getMovieDetails()
        getCredits()
        getWatchProviders()
        setTimeout(() => { setLoading(false) }, 500)
    }, [])


    return (
        <>
            {
                loading ? (
                    <Loading />
                )
                    :

                    (<div className="flex flex-col md:flex-col pb-16">

                        <ImageBg data={data} />

                        <div className="flex flex-col justify-center sm:px-20 xl:px-52 lg:px-32 backdrop-brightness-[100%] bg-gradient-to-b via-gray-900 from-transparent to-gray-900 text-white">

                            <Trailer data={data} />

                            <div className="flex flex-col gap-5 bg-gray-900 p-6 rounded-md">

                                <Title data={data} />

                                <div className="flex flex-col md:flex-row gap-5">

                                    <div className="flex flex-col items-center gap-4">

                                        <Poster data={data} stream={watchProv} />
                                        <About data={data} mediaType={mediaType} />
                                        {/* <Stream stream={watchProv} /> */}

                                    </div>

                                    <div className="flex flex-col w-full gap-5 overflow-hidden">

                                        <CardSmall credits={credits?.cast} mediaType={mediaType} searchID={searchID} title="cast" />
                                        <CardSmall credits={credits?.crew} mediaType={mediaType} searchID={searchID} title="crew" />
                                        <Overview data={data} />
                                        <Videos data={data} />
                                        <Production companies={data?.production_companies} />
                                        <ForYou id={data.id} mediaType={mediaType} />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>)
            }
        </>
    )
}

export default MovieDetails
