import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/HomePage/Common/Card";
import CardCorner from "../../components/HomePage/Common/CardCorner";


const Indian = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&with_original_language=ta`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white flex flex-col gap-5 my-10 relative">

            <div className="px-4 sm:px-10">

                <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Popular Indian Movies</h1>

            </div>

            <Card content={content} media_type="movie" />

            <CardCorner />

        </div>
    )
}

export default Indian
