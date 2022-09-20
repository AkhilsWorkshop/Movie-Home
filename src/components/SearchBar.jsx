import { BiSearchAlt2 } from "react-icons/bi";
import { SEARCH_URL } from "../config/config";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import { Link } from "react-router-dom";

const API = `${SEARCH_URL}${process.env.REACT_APP_API_KEY}&query`

const SearchBar = () => {

    // useState Hooks
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    // Fetching searched title data
    const searchFunction = async (e) => {
        e.preventDefault();
        const { data } = await axios.get(`${API}=${query}`)
        console.log(data);
        setMovies(data.results);

    }

    // Changing the query using onChange
    const changeHandler = (e) => {
        setQuery(e.target.value);
    }


    return (
        <div>
            <form class="relative text-gray-600 focus-within:text-gray-400" onSubmit={searchFunction}>

                <input
                    placeholder="Search movies, series & more"
                    className="py-2 w-64 text-sm text-black bg-white rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                    value={query}
                    onChange={changeHandler}
                    required
                />

                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <BiSearchAlt2 onClick={searchFunction} size={30} className=" p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black" />
                </span>

            </form>
            {
                query === "" ?
                    <></>
                    :


                    <SearchResults movie={movies} query={query} />





            }




        </div>
    )
}

export default SearchBar
