import logo from "../assets/logo.png"
import { BsGithub } from "react-icons/bs"
import { DiReact } from "react-icons/di"
import { HiChevronDoubleRight } from "react-icons/hi"
import { navActive } from "../config/config";

const About = () => {

    document.title = "About | Movie Home"

    return (
        <div className="h-screen flex flex-col bg-gradient-to-bl from-[#141E30] via-[#1D4350] to-[#A43931]">

            <div className="flex flex-col items-center justify-center h-full p-5 lg:px-72 gap-5 text-white">



                <div className="bg-black bg-opacity-30 p-5 rounded-md flex flex-col items-center gap-5 shadow-2xl">

                    <img src={logo} alt="tmdb" />
                    <div className="rounded-md flex flex-col gap-5">



                        <ol className="flex flex-col gap-3">
                            <li className="flex gap-2 items-center">
                                <HiChevronDoubleRight size={15} className="text-yellow-400" />
                                <p className="text-gray-400"> <span className="text-white">May not contain </span>correct information & can fail to load images due to API limitation</p>

                            </li>
                            <li className="flex gap-2 items-center">
                                <HiChevronDoubleRight size={15} className="text-yellow-400" />
                                <p className="text-gray-400"> Fetches data from</p>
                                <a href="https://www.themoviedb.org/">
                                    <img className="h-5" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="tmdb" />
                                </a>
                            </li>
                            <li className="flex gap-2 items-center">
                                <HiChevronDoubleRight size={15} className="text-yellow-400" />
                                <p className="text-gray-400"> Created using <span className="text-white"> React</span></p>
                                <DiReact size={25} />
                            </li>
                            <li className="flex gap-2 items-center">
                                <HiChevronDoubleRight size={15} className="text-yellow-400" />
                                <p className="text-gray-400"> Deployed & hosted on <span className="text-white"> Github</span></p>
                                <BsGithub size={22} />
                            </li>
                            <li className="flex gap-2 items-center">
                                <HiChevronDoubleRight size={15} className="text-yellow-400" />
                                <p className="text-gray-400"> Found any bugs or have suggestions? Feel free to reach me <a href="https://akhilkumar.ga/" className="text-white hover:text-yellow-400 duration-200">here</a></p>
                            </li>
                        </ol>

                    </div>


                </div>


            </div>

        </div >
    )
}

export default About
