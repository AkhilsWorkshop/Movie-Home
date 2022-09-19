import notFound from "../src/assets/NotFound.png"


const Card = ({ movie }) => {
    return (
        <div className="flex flex-col h-80 w-40 rounded-md gap-2">
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : notFound}
                alt={movie.Title}
                className="object-fill h-60 rounded-md fil duration-300 cursor-pointer hover:bg-gray-500 hover:opacity-25"
            />
            <p className="truncate sm:text-sm">{movie.Title}</p>
            <div className="flex justify-between">
                <p className="text-neutral-400">{movie.Year}</p>
                <p className="text-xs
             text-neutral-400 border rounded-md p-1 border-neutral-400 capitalize
              tracking-wide">{movie.Type}</p>
            </div>

        </div>
    )
}

export default Card