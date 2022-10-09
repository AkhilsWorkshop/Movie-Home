import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { halfSizeImg } from "../../config/config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollContainer from "react-indiana-drag-scroll";
import { AiOutlineRight } from "react-icons/ai"

const DiscoverMovies = () => {

    const container = useRef(null);

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    console.log(content)

    return (
        <div className="text-white">

            <div className="my-5 px-4 sm:px-10">
                <h1 className="border-l-4 pl-2 border-yellow-500 text-lg tracking-widest font-bold">Discover Top Movies</h1>
            </div>

            <ScrollContainer className="px-4 sm:px-10 flex gap-3" id="container">

                {content?.map((eachItem, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex w-[7rem] sm:w-[10rem] overflow-hidden rounded-md hover:cursor-pointer">
                            <img className="object-fill w-[7rem] sm:w-[10rem] shadow-lg shadow-black duration-1000 sm:hover:scale-105 sm:hover:saturate-150" src={halfSizeImg + eachItem.poster_path} alt=""></img>
                        </div>

                        <p className="text-xs sm:text-base">{eachItem.title}</p>


                    </div>
                ))}

            </ScrollContainer>


            {/* <div className="absolute w-[10%] h-[86%] bg-gradient-to-r from-transparent to-black/80 right-0 top-0 hover:duration-1000 hover:to-black hover:cursor-pointer"
            >
                <AiOutlineRight size={60} className="absolute top-[40%] left-[50%]" />
            </div> */}

        </div>
    )
}

export default DiscoverMovies
