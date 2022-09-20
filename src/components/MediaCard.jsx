import { halfSizeImg, imgNotAvailable } from "../config/config"
import DetailedCard from "./DetailedCard";
import { useNavigate, useParams } from "react-router-dom";

const MediaCard = ({ movie, title }) => {


    // Comparing both dates as only one will exist
    const compareDate = movie.release_date || movie.first_air_date;

    // Slicing the date to display only the year
    const date = compareDate?.slice(0, 4);

    // Assigning the ID of the specific movie
    const contentID = movie.id

    const navigate = useNavigate();

    const { searchID } = useParams(contentID);

    // Function to display specific movie details
    const getMovieID = () => {
        navigate("/search")

        console.log(contentID)
    }

    return (
        <div className="flex flex-col h-80 w-40 rounded-md gap-2">

            <img
                src={movie.poster_path === null ? imgNotAvailable : halfSizeImg + movie.poster_path}
                alt={movie.title}
                className="object-fill h-60 rounded-md duration-300 cursor-pointer hover:bg-gray-500 hover:opacity-25 shadow-xl shadow-black"
                onClick={getMovieID}
            />

            <p className="truncate sm:text-sm">{movie.original_name || movie.title}</p>

            <div className="flex justify-between">

                <p className="text-neutral-400">{date}</p>

                <p className="text-xs
             text-neutral-400 border rounded-md p-1 border-neutral-400 capitalize
              tracking-wide">{title || movie.media_type}</p>
            </div>

        </div>
    )
}

export default MediaCard