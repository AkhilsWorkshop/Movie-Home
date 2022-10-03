import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

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

    return (
        <div>
            <form className="relative text-gray-600 focus-within:text-gray-400" onSubmit={getSearchQuery}>

                <input
                    placeholder="Search movies & more"
                    className="py-2 w-64 text-base text-black bg-white rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                    value={query}
                    onChange={changeHandler}
                    required
                />

                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <BiSearchAlt2 onClick={getSearchQuery} size={30} className=" p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black" />
                </span>

            </form>

        </div>
    )
}

export default SearchBar
