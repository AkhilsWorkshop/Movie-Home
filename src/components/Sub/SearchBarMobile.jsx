
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { halfSizeImg, imgNotAvailable } from "../../config/config";
import { useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import { IoMdClose } from "react-icons/io"

const SearchBarMobile = ({ search, setSearch, autocompleteData, setAutoCompleteData }) => {

    // useState Hooks
    const [query, setQuery] = useState("");


    const navigate = useNavigate();

    const getSearchQuery = () => {
        navigate("/Search/" + query)
    }
    // Changing the query using onChange
    const changeHandler = (e) => {
        setQuery(e.target.value);
    }

    const autoCompleteSearch = async (query) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        setAutoCompleteData(data);
    }

    useEffect(() => {
        if (query.length > 2)
            autoCompleteSearch(query)
        else
            setAutoCompleteData("")
    }, [query])

    return (
        <div className={`absolute flex flex-col justify-center items-center left-0 max-h-[60%] w-full duration-200 z-20 bg-[#121216] ${search ? "top-14" : "-top-20"}`}>

            <div className="flex items-center text-gray-600 focus-within:text-gray-400 px-3 py-2 w-full">

                <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
                    <input
                        placeholder="Search movies & more"
                        className={`py-2 pl-4 text-base text-black rounded-md focus:outline-none focus:text-gray-900 w-full`}
                        value={query}
                        onChange={changeHandler}
                        required
                    />
                    {query.length > 2 &&
                        <IoMdClose size={30} onClick={() => setQuery("")} className="absolute top-1 right-2" />
                    }
                </div>

            </div>

            <div className="flex flex-col max-h-[90%] overflow-auto overflow-x-hidden w-full rounded-b-md z-50">
                {autocompleteData?.results?.length > 0 ?

                    autocompleteData?.results.map((eachItem) => (

                        <div key={eachItem.id} className="bg-[#26262c] odd:bg-[#17171b] text-white duraiton-200 transition-all hover:text-[#EAB308] cursor-pointer">
                            <Button media_type={eachItem.media_type} id={eachItem.id} >
                                <div className="flex gap-2 w-64 h-auto p-2">
                                    {eachItem.media_type === "movie" || eachItem.media_type === "tv" ?
                                        <img src={eachItem.poster_path === null ? imgNotAvailable : halfSizeImg + eachItem.poster_path} alt="Not found" className="h-14 w-10 rounded-sm" />
                                        :
                                        <img src={eachItem.profile_path === null ? imgNotAvailable : halfSizeImg + eachItem.profile_path} alt="Not found" className="h-14 w-10 rounded-sm" />
                                    }
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="text-sm text-left">{eachItem.title || eachItem.name}</p>
                                        <div className="flex gap-2 items-center text-slate-500 text-sm">
                                            <p className="">{eachItem.release_date?.slice(0, 4) || eachItem.first_air_date?.slice(0, 4)}</p>
                                            <p className="text-white">-</p>
                                            <p className="tracking-wide capitalize">{eachItem.media_type}</p>
                                        </div>
                                    </div>
                                </div>
                            </Button>
                        </div>

                    ))
                    :
                    // <div className="flex justify-center w-64 h-auto p-2 bg-[#17171b] rounded-md">
                    //     <p className="text-white text-sm text-left">No results found</p>
                    // </div>
                    <></>
                }
            </div>
        </div>
    )
}

export default SearchBarMobile
