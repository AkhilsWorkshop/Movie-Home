import Card from "./Card"
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineEmojiSad } from "react-icons/hi";
import notImag from "../src/assets/NotFound.png"

const Body = () => {

    const API = "https://omdbapi.com?apikey=ac88eda5"

    const [movies, setMovies] = useState([])

    const [searchTitle, setSearchTitle] = useState("")

    const [selectMovie, setselectMovie] = useState("")

    const searchMovies = async (title) => {

        const response1 = await fetch(`${API}&s=${title}`);
        const response2 = await fetch(`${API}&s=${title}&page=2`);
        const response3 = await fetch(`${API}&s=${title}&page=3`);

        const data = await Promise.all([response1.json(), response2.json(), response3.json()]);

        //First Data - Page 1
        const receivedData1 = data[0].Search

        //Second Data - Page 2
        const receivedData2Check = data[1]
        const receivedData2 = data[1].Search

        //Third Data - Page 3
        const receivedData3Check = data[1]
        const receivedData3 = data[1].Search

        if (receivedData2Check.Response === "False") {
            setMovies(receivedData1);
        }

        else if (receivedData3Check.Response === "False") {
            const combinedData1 = receivedData1.concat(receivedData2)
            setMovies(combinedData1);
        }
        else {
            const combinedData1 = receivedData1.concat(receivedData2)
            const combinedData2 = combinedData1.concat(receivedData3)
            setMovies(combinedData2);
        }

    }

    const movieData = async (title) => {
        const response = await fetch(`${API}&t=${title}`);

        const data = await response.json();
        console.log(data)

    }



    useEffect(() => {
        searchMovies("American");
    }, [])

    movieData(searchTitle)
    console.log(searchTitle)

    return (
        <div className="flex flex-col justify-center items-center bg-zinc-900 text-white">
            <div className=" my-10">
                <div class="relative text-gray-600 focus-within:text-gray-400">

                    <input
                        placeholder="Search movies, series & more"
                        className="py-2 w-64 text-sm text-black bg-white rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        required
                    />

                    <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <BiSearchAlt2 onClick={() => searchMovies(searchTitle) & setSearchTitle("")} size={30} className=" p-1 focus:outline-none focus:shadow-outline cursor-pointer hover:text-black" />
                    </span>

                </div>

            </div>



            <div className="flex flex-col min-h-screen-[30] bg-zinc-900 text-white">

                {
                    movies?.length > 0
                        ? (

                            <div className="flex justify-center sm:flex-row gap-4 flex-wrap lg:px-20 mb-20">
                                {movies.map((movie) => (
                                    <Card movie={movie} />
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

export default Body