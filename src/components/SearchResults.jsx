
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { SEARCH_URL } from "../config/config";

const SearchResults = () => {


    const API = `${SEARCH_URL}${process.env.REACT_APP_API_KEY}&query=`

    const [content, setContent] = useState([])

    // Getting the ID from URL
    const { searchID } = useParams()
    console.log(searchID)
    const fetchTrending = async () => {
        const { data } = await axios.get(`${API}${searchID}`);
        console.log(data)
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div className="text-white">
            <div className="flex flex-col justify-center items-center my-10">

                <div className="mb-5">
                    <h1 className="text text-lg tracking-widest font-bold">Search Results for {searchID}</h1>
                </div>

                <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap">

                    {content.map((singleMovie) => (

                        singleMovie.media_type === "person"
                            ?
                            <></>
                            :
                            <MediaCard movie={singleMovie} />

                    ))}

                </div>

            </div>
        </div>
    )
}

export default SearchResults
