import axios from "axios";
import { halfSizeImg, MOVIE_DETAILS } from "../config/config";
import { useEffect, useState } from "react";

const DetailedCard = ({ contentID }) => {

    console.log(contentID)

    const API = `${MOVIE_DETAILS}${contentID}?api_key=${process.env.REACT_APP_API_KEY}`

    const getMovieDetails = async () => {
        const { data } = await axios.get(API);
        setData(data)
        console.log(data)
    }

    const [data, setData] = useState([])

    useEffect(() => {
        getMovieDetails()
    }, [])

    return (
        <div>

            <div className="flex justify-center gap-10 flex-col items-start">
                <div>
                    <img
                        src={halfSizeImg + data.poster_path}
                        alt={data.original_title}
                        className="object-fill h-60 rounded-md shadow-2xl shadow-black"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1>{data.original_title}</h1>
                    <p className="text-slate-400 text-sm">{data.overview}</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-slate-400 text-sm">Country: <span className="text-white"></span></p>
                        <p className="text-slate-400 text-sm">Genre: <span className="text-white"></span></p>
                        <p className="text-slate-400 text-sm">Released: <span className="text-white"></span></p>
                        <p className="text-slate-400 text-sm">Production: <span className="text-white"></span></p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default DetailedCard
