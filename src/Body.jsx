import Card from "./Card"
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Body = () => {

    const API = "http://omdbapi.com?apikey=ac88eda5"

    const [movies, setMovies] = useState([])

    const [searchTitle, setSearchTitle] = useState("")

    const searchMovies = async (title) => {

        const response1 = await fetch(`${API}&s=${title}&page=1`);

        const data = await response1.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies("American");
    }, [])



    return (
        <div className="flex flex-col justify-center items-center bg-zinc-900 text-white">

            <div class="relative text-gray-600 focus-within:text-gray-400 my-10">

                <input
                    placeholder="Search movies"
                    className="py-2 w-64 text-sm text-black bg-white rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    required
                />

                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <BiSearchAlt2 onClick={() => searchMovies(searchTitle)} size={30} className=" p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black" />
                </span>

            </div>

            <div className="flex flex-col justify-center items-center min-h-screen  bg-zinc-900 text-white">

                {
                    movies?.length > 0
                        ? (

                            <div className="flex justify-center sm:flex-row gap-4 flex-wrap sm:px-80 mb-10">
                                {movies.map((movie) => (
                                    <Card movie={movie} />
                                ))}
                            </div>

                        ) : (

                            <div className="flex flex-col items-center gap-4 flex-wrap p-10 mb-10">
                                <HiOutlineEmojiSad size={30} className="" />
                                <p>No movies found</p>

                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default Body