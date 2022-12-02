import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { halfSizeImg, imgNotAvailable } from "../../config/config";
import { useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import { IoMdClose } from "react-icons/io"

const SearchBar = () => {

    // useState Hooks
    const [query, setQuery] = useState("");
    const [autocompleteData, setAutoCompleteData] = useState([])
    const [searchState, setSearchState] = useState(false)

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
        <div>
            {/* <form className="relative text-gray-600 focus-within:text-gray-400" onSubmit={getSearchQuery}>

                <input
                    placeholder="Search movies & more"
                    className="py-2 w-64 text-base text-black bg-white rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                    value={query}
                    onChange={changeHandler}
                    required
                />

                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <BiSearchAlt2 onClick={getSearchQuery} size={30} className="p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black" />
                </span>

            </form> */}

            <div className="flex items-center text-gray-600 focus-within:text-gray-400">

                <div className="relative text-gray-600 focus-within:text-gray-400">
                    <input
                        placeholder="Search movies & more"
                        className={`py-2 text-base text-black bg-white rounded-md focus:outline-none focus:bg-white focus:text-gray-900 duration-300 transition-all ${searchState ? "w-64 visible pl-4 " : "w-0 invisible"}`}
                        value={query}
                        onChange={changeHandler}
                        on
                        required
                    />

                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <IoMdClose onClick={() => { setSearchState(!searchState); setAutoCompleteData([]); setQuery("") }} size={30} className={`p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black ${searchState ? "visible" : "invisible"}`} />
                    </span>

                </div>

                <BiSearchAlt2 onClick={() => { setSearchState(!searchState); setAutoCompleteData([]); setQuery("") }} size={30} className={`p-1 focus:outline-none focus:shadow-outline cursor-pointer ${searchState ? "invisible" : "hover:text-white text-slate-200 visible"}`} />

            </div>

            <div className="absolute mt-2 flex flex-col h-[300px] overflow-auto overflow-x-hidden w-auto rounded-md z-50">
                {autocompleteData?.results?.length > 0 ?

                    autocompleteData?.results.map((eachItem) => (

                        <div className="bg-[#26262c] odd:bg-[#17171b] text-white duraiton-200 transition-all hover:text-[#EAB308] cursor-pointer">
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

export default SearchBar
