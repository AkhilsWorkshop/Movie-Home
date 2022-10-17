import axios from "axios";
import { useEffect, useState } from "react";
import CardBig from "./Common/CardBig";
import CardCorner from "./Common/CardCorner";

const PopularPeople = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white flex flex-col gap-5 my-10 relative">

            <div className="px-4 sm:px-10">

                <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Explore Popular Artists</h1>

            </div>

            <CardBig content={content} media_type="person" />

            <CardCorner />

        </div>
    )
}

export default PopularPeople
