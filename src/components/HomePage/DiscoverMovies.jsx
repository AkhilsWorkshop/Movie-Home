import axios from "axios";
import { useEffect, useState } from "react";



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
        <div name="Movies" className="text-white">
            <div className="flex">
                <div>
                    <img src="" alt=""></img>
                    <p></p>

                </div>
            </div>
        </div>
    )
}

export default DiscoverMovies
