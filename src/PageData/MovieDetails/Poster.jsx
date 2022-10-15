import { halfSizeImg } from "../../config/config"

const Poster = ({ data }) => {
    return (
        <div>
            <h1 className="text-lg md:text-2xl sm:text-4xl font-title">{data.title || data.name}
                {data.original_language !== "en" ?
                    <span className="text-base md:text-xl sm:text-2xl"> ({data.original_title || data.original_name})</span>
                    :
                    <></>
                }
            </h1>

            <img
                src={halfSizeImg + data.poster_path}
                alt={data.original_title}
                className="object-fill h-[30rem] max-w-[30rem] shadow-xl shadow-black border border-gray-700"
            />
        </div>
    )
}

export default Poster
