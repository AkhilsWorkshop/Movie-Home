import CardAlt from "./CardAlt"
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineEmojiSad } from "react-icons/hi";

const BodyAlt = () => {

    const API = "https://api.themoviedb.org/3/movie/popular?api_key=ee67127aee04e49495754bf98fb61031"
    const API_SEARCH = "https://api.themoviedb.org/3/search/multi?api_key=ee67127aee04e49495754bf98fb61031&query";

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            })
    }, [])


    const searchMovie = async (e) => {
        e.preventDefault();

        try {
            const url = `${API_SEARCH}=${query}`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-zinc-900 text-white">
            <div className=" my-10">
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


            <div className="flex flex-col min-h-screen-[30] bg-zinc-900 text-white">

                {
                    movies.length > 0
                        ? (

                            <div className="flex justify-center sm:flex-row gap-4 flex-wrap lg:px-20 mb-20">
                                {movies.map((singleMovie) => (

                                    singleMovie.media_type === "person"
                                        ?
                                        <></>
                                        :
                                        <CardAlt movie={singleMovie} />



                                ))}
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