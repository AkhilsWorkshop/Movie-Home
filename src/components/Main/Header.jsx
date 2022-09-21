import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import SearchBar from "../SearchBar"
import { CgClose, CgMenu } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"


const Header = () => {

    const linkStylesDesktop = "hover:border-white hover:text-white hover:scale-105 border-b-2 py-3 duration-200 border-black"
    const linkStylesMobile = "px-4 cursor-pointer text-gray-300 py-6 text-4xl"

    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between px-10 md:justify-around bg-black h-20 shadow-xl">
                <div>
                    <a href="/">
                        <img src={logo} alt="Movie DB" className="h-16 md:h-20 py-2" />
                    </a>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8 text-neutral-400">
                        <Link to="/" className={linkStylesDesktop}>Home</Link>
                        <Link to="/" className={linkStylesDesktop}>Movies</Link>
                        <Link to="/" className={linkStylesDesktop}>TV Shows</Link>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>

                <div className="flex items-center gap-8 text-gray-300 md:hidden">
                    <div onClick={() => setSearch(!search)} className="cursor-pointer">
                        {search ? <BsSearch size={21} className="text-white" /> : <BsSearch size={20} />}
                    </div>
                    <div onClick={() => setMenu(!menu)} className="z-20 cursor-pointer">
                        {menu ? <CgClose size={30} /> : <CgMenu size={30} />}
                    </div>
                </div>

                {menu && (
                    <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#272727] to-gray-800">
                        <div className="flex flex-col items-center gap-8 text-neutral-400">
                            <Link onClick={() => setMenu(!menu)} to="/" className={linkStylesMobile}>Home</Link>
                            <Link to="/" className={linkStylesMobile}>Movies</Link>
                            <Link to="/" className={linkStylesMobile}>TV Shows</Link>
                        </div>

                    </div>
                )}

            </div>


            {search && (
                <div className="flex justify-center bg-gradient-to-b from-black to-transparent h-14">
                    <SearchBar />
                </div>
            )}



        </div>
    )
}

export default Header