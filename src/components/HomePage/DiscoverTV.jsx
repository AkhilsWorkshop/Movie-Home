import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Common/Card";
import CardCorner from "./Common/CardCorner";

const DiscoverTV = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white flex flex-col gap-5 my-10 relative">

            <div className="px-4 sm:px-10">

                <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Discover Top TV Shows</h1>

            </div>

            <Card content={content} media_type="tv" />

            <CardCorner />

        </div>
    )
}

export default DiscoverTV
