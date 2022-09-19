import notFound from "../src/assets/NotFound.png"

const API_IMG = "https://image.tmdb.org/t/p/w500/";


const CardAlt = ({ movie }) => {

    return (
        <div className="flex flex-col h-80 w-40 rounded-md gap-2">
            <img
                src={movie.poster_path === null ? notFound : API_IMG + movie.poster_path}
                alt={movie.title}
                className="object-fill h-60 rounded-md fil duration-300 cursor-pointer hover:bg-gray-500 hover:opacity-25"
            />
            {
                "original_name" in movie
                    ?
                    <p className="truncate sm:text-sm">{movie.original_name}</p>
                    :
                    <p className="truncate sm:text-sm">{movie.title}</p>
            }

            <div className="flex justify-between">
                {
                    "release_date" in movie ?

                        <p className="text-neutral-400">{movie.release_date === "" ? "Not Available" : movie.release_date.slice(0, 4)}</p>
                        :

                        <p className="text-neutral-400">{movie.first_air_date === "" ? "Not Available" : movie.first_air_date}</p>
                }


                <p className="text-xs
             text-neutral-400 border rounded-md p-1 border-neutral-400 capitalize
              tracking-wide">{movie.media_type === "tv" ? "series" : movie.media_type}</p>
            </div>

        </div>
    )
}

export default CardAlt