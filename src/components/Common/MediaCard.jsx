import { halfSizeImg, imgNotAvailable } from "../../config/config";
import Button from "../Sub/Button";

const MediaCard = ({ movie, title }) => {


    // Comparing both dates as only one will exist
    const compareDate = movie.release_date || movie.first_air_date;

    // Slicing the date to display only the year
    const date = compareDate?.slice(0, 4);


    return (
        <Button media_type={title || movie.media_type} id={movie.id}>
            <div className="flex flex-col h-80 w-40 rounded-md gap-2 text-white">
                {
                    movie.poster_path ?

                        <div className="rounded-md overflow-hidden">
                            <img
                                src={movie.poster_path === undefined ? imgNotAvailable : halfSizeImg + movie.poster_path}
                                alt={movie.original_name || movie.title || movie.name}
                                className="object-fill h-60 rounded-md duration-300 cursor-pointer sm:hover:scale-105 sm:hover:saturate-150 shadow-xl shadow-black"
                            />
                        </div>

                        :
                        <div className="rounded-md overflow-hidden">
                            <img
                                src={(movie.profile_path == null) ? imgNotAvailable : (halfSizeImg + movie.profile_path)}
                                alt={movie.title || movie.name}
                                className="object-fill h-60 rounded-md duration-300 cursor-pointer sm:hover:scale-105 sm:hover:saturate-150 shadow-xl shadow-black"
                            />
                        </div>
                }

                <p className="truncate sm:text-sm text-left">{movie.title || movie.name}</p>

                <div className="flex justify-between">

                    <p className="text-neutral-400">{date}</p>

                    <p className="text-xs
             text-neutral-400 border rounded-md p-1 border-neutral-400 capitalize
              tracking-wide">{title || movie.media_type}</p>
                </div>
            </div>
        </Button>
    )
}

export default MediaCard