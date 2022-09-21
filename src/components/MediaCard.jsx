import { halfSizeImg, imgNotAvailable } from "../config/config"

import Results from "../SearchedPage/Results";

const MediaCard = ({ movie, title }) => {


    // Comparing both dates as only one will exist
    const compareDate = movie.release_date || movie.first_air_date;

    // Slicing the date to display only the year
    const date = compareDate?.slice(0, 4);

    return (
        <Results media_type={title || movie.media_type} id={movie.id}>
            <div className="flex flex-col h-80 w-40 rounded-md gap-2">
                <img
                    src={movie.poster_path === null ? imgNotAvailable : halfSizeImg + movie.poster_path}
                    alt={movie.title}
                    className="object-fill h-60 rounded-md duration-300 cursor-pointer hover:bg-gray-500 hover:opacity-25 shadow-xl shadow-black"
                />

                <p className="truncate sm:text-sm text-left">{movie.original_name || movie.title}</p>

                <div className="flex justify-between">

                    <p className="text-neutral-400">{date}</p>

                    <p className="text-xs
             text-neutral-400 border rounded-md p-1 border-neutral-400 capitalize
              tracking-wide">{title || movie.media_type}</p>
                </div>
            </div>
        </Results>
    )
}

export default MediaCard