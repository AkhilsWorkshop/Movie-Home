import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../components/Cards/MediaCard";


const DiscoverMovies = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white">
            <div className="flex flex-col justify-center items-center">

                <div className="mb-5">
                    <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Discover Top Movies</h1>
                </div>

                <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap">

                    {content.slice(0, 16).map((singleMovie) => (

                        <MediaCard movie={singleMovie} title={"movie"} />

                    ))}

                </div>

            </div>
        </div>
    )
}

export default DiscoverMovies
