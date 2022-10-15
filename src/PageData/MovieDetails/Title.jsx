import { FaExternalLinkAlt } from "react-icons/fa";

const Title = ({ data }) => {
    return (
        <div className="flex gap-2 items-center">
            <h1 className="text-lg md:text-2xl sm:text-4xl font-title">{data.title || data.name}
                {data.original_language !== "en" ?
                    <span className="text-base md:text-xl sm:text-2xl"> ({data.original_title || data.original_name})</span>
                    :
                    <></>
                }
            </h1>

            <>
                {
                    data.homepage === "" ?
                        <></>
                        :
                        <div onClick={(e) => {
                            e.preventDefault();
                            window.location.href = data.homepage;
                        }}>
                            <FaExternalLinkAlt size={20} className=" text-yellow-500 duration-300 cursor-pointer hover:text-slate-400" />
                        </div>
                }
            </>
        </div>

    )
}

export default Title
