import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../MediaCard";




const Recommendations = ({ id }) => {
    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);

    }

    useEffect(() => {
        fetchTrending()
    }, [])


    return (
        <div className="text-white">

            <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap">

                {content.map((singleMovie) => (

                    <MediaCard movie={singleMovie} />

                ))}

            </div>


        </div>
    )
}

export default Recommendations
