import MediaCard from "./components/MediaCard"
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineEmojiSad } from "react-icons/hi";
import DetailedCard from "./components/DetailedCard";
import Pagination from "./components/Pagination";
import Trending from "./DetailedPage/Trending";

const BodyAlt = () => {

    // API KEY
    const API = "ee67127aee04e49495754bf98fb61031";

    // List of API
    const POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=" + API;
    const API_SEARCH = "https://api.themoviedb.org/3/search/multi?api_key=" + API + "&query";
    const TRENDING = "https://api.themoviedb.org/3/trending/all/day?api_key=" + API;

    // useState Hooks
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    // Opening the cardTiles and closing detailedCard
    const openCard = () => {

        var open = document.querySelector("#cardDetails");
        open.style.display = "none";
        var close = document.querySelector("#card");
        close.style.display = "flex";
    }

    // useEffect and fetching data for Home page with "Trending list"
    useEffect(() => {
        fetch(TRENDING)
            .then((response) => response.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [])


    // Fetching searched title data
    const searchMovie = async (e) => {
        e.preventDefault();

        try {
            const url = `${API_SEARCH}=${query}`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            console.log(data.results)
            openCard();
        }

        catch (e) {
            console.log(e);
        }
    }

    // Send TO DetailedCard

    const [singleMovie, setSingleMovie] = useState([]);
    // console.log(singleMovie)

    // Fetching searched title data
    const getMovieDetails = async (e) => {
        e.preventDefault();

        try {
            const url = `${API_SEARCH}=${query}`;
            const response = await fetch(url);
            const data = await response.json();
            setSingleMovie(data.results);
            openCard();
        }

        catch (e) {
            console.log(e);
        }
    }

    // Changing the query using onChange
    const changeHandler = (e) => {
        setQuery(e.target.value);
    }


    return (
        <div className="flex flex-col justify-center items-center bg-zinc-900 text-white">

            <div className="my-10">
                <form class="relative text-gray-600 focus-within:text-gray-400" onSubmit={searchMovie}>

                    <input
                        placeholder="Search movies, series & more"
                        className="py-2 w-64 text-sm text-black bg-white rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                        value={query}
                        onChange={changeHandler}
                        required
                    />

                    <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <BiSearchAlt2 onClick={searchMovie} size={30} className=" p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black" />
                    </span>

                </form>

            </div>

            <div className="flex flex-col bg-zinc-900 text-white">

                <div id="cardDetails" className="hidden justify-center sm:flex-row gap-4 flex-wrap px-10 lg:px-48 mb-20">
                    <DetailedCard data={"none"} />

                </div>

                {
                    movies.length > 0
                        ? (

                            <div id="card" className="flex justify-center sm:flex-row gap-4 flex-wrap px-10 lg:px-48 mb-20">

                                {movies.map((singleMovie) => (

                                    singleMovie.media_type === "person"
                                        ?
                                        <></>
                                        :
                                        <MediaCard movie={singleMovie} />

                                ))}
                                <Pagination />
                            </div>

                        ) : (

                            <div className="flex flex-col items-center gap-4 flex-wrap p-10 mb-10">
                                <HiOutlineEmojiSad size={30} className="" />
                                <p>Unable to find that title</p>

                            </div>
                        )
                }

            </div>

            <div>

            </div>

        </div>
    )
}

export default BodyAlt