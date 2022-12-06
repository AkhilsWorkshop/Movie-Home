import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { BsArrowLeft } from "react-icons/bs"
import SearchBar from "../components/Sub/SearchBar"
import SearchBarMobile from "../components/Sub/SearchBarMobile"
import { Sling as Hamburger } from 'hamburger-react'
import { UserAuth } from "../context/AuthContext"
import { BiUserCircle } from "react-icons/bi"
import { RiAccountCircleFill } from "react-icons/ri"

const Header = () => {

    const { user, signOutUser } = UserAuth();

    const [menu, setMenu] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signOutUser()
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <div className={`z-50 w-full flex items-center justify-between px-10 bg-[#121216] md:justify-around h-20 shadow-xl border-b-slate-800 border-b ${menu ? '' : ' '}`}>

                {/* Mobile Version */}
                <div className={`cursor-pointer lg:hidden ${menu ? "invisible" : "visible"}`}>
                    <Hamburger size={30} toggled={menu} toggle={setMenu} color={menu ? "#ffffff" : "#ffffff"} />
                </div>

                <div className="flex flex-1 justify-center">
                    <a href="/">
                        <img src={logo} alt="Movie DB" className="h-14 md:h-16 py-2 sm:hover:animate-pulse" />
                    </a>
                </div>
                <div className="hidden lg:flex flex-1 justify-center items-center gap-8 font-slogan">
                    <div className="flex gap-8 text-neutral-400">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                    {user === null ?
                        <Link to="/login">
                            <button className="bg-[#EAB308] hover:bg-[#EAB308]/80 duration-300 text-black font-bold py-2 px-4 rounded-full">Sign In</button>
                        </Link>
                        :
                        <>
                            <button onClick={handleSubmit} className="bg-[#EAB308] hover:bg-[#EAB308]/80 duration-300 text-black font-bold py-2 px-4 rounded-full">Logout</button>
                            <Link to="/myaccount">
                                <RiAccountCircleFill size={30} className="text-gray-300 cursor-pointer hover:text-white duration-300" />
                            </Link>
                        </>
                    }
                </div>



                <div className={`lg:hidden flex fixed left-0 top-0 w-full h-full transition-all ease-linear duration-300 z-[25] ${menu ? ' visible bg-black/10 backdrop-blur-sm' : ' invisible'}`}>
                    <div className={`absolute bg-[#121216] h-full w-[80%] transition-all ease-linear duration-300 flex flex-col justify-between ${menu ? 'left-0' : '-left-[40rem]'}`}>
                        <div className="flex justify-end p-5">
                            <BsArrowLeft onClick={() => setMenu(!menu)} size={30} className="text-white" />
                        </div>

                        <SearchBarMobile />
                        <div className="flex flex-col justify-between grow">
                            <div className="flex flex-col gap-5 text-neutral-400 p-5 text-lg">
                                <Link onClick={() => setMenu(!menu)} to="/">Home</Link>
                                <Link onClick={() => setMenu(!menu)} to="/movies">Movies</Link>
                                <Link onClick={() => setMenu(!menu)} to="/about">About</Link>
                            </div>
                            <div className="bg-[#17171b] py-2">
                                <p className="text-sm text-center font-slogan text-gray-500">Built & Designed by <a href="https://akhilkumar.dev/" target="_blank" rel="noreferrer" className="text-[#EAB308]">Akhil</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header