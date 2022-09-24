import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../MediaCard";




const Recommendations = ({ id, mediaType }) => {
    const [content, setContent] = useState([])

    const fetch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <>
            {
                content?.length > 0
                    ?
                    <div className="flex flex-col justify-center p-5 sm:px-20 xl:px-52 lg:px-32 backdrop-blur-md backdrop-brightness-50 bg-gradient-to-t via-transparent from-transparent to-gray-900 gap-5" >
                        <h1 className="border-l-4 pl-2 border-yellow-500 text-lg md:text-2xl sm:text-4xl text-white">Recommended for you</h1>

                        <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap">

                            {content.slice(0, 6).map((singleMovie) => (

                                <MediaCard movie={singleMovie} />

                            ))}

                        </div>

                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default Recommendations
