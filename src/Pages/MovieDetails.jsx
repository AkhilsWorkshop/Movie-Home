import axios from "axios";
import { baseURL } from "../config/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../layouts/Loading";
import Body from '../components/PageData/MovieDetails/Body';
import ImageBg from '../components/Cards/ImageBg';

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
        console.log(data, "Movie Det")
    }

    // Watch Providers API
    const getWatchProviders = async () => {
        const { data } = await axios.get(`${baseURL}/${mediaType}/${searchID}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
        setWatchProv(data)
    }

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

                    (<div className="flex flex-col md:flex-col pb-12">

                        <ImageBg data={data} />

                        <Body data={data} credits={credits} watchProv={watchProv} mediaType={mediaType} searchID={searchID} />

                    </div>)
            }
        </>
    )
}

export default MovieDetails
