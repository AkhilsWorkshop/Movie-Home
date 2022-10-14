import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { CgClose, CgMenu } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import SearchBar from "../Sub/SearchBar"
import { Link as Linking } from 'react-scroll';

const Header = () => {

    const linkStylesDesktop = "hover:border-yellow-500 border-transparent hover:text-white hover:scale-105 border-b-2 py-3 duration-200 border-black"
    const linkStylesMobile = "px-4 cursor-pointer text-gray-300 py-6 text-4xl"

    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between px-10 bg-black/20 md:justify-around h-20 shadow-xl border-b-slate-800 border-b">
                <div>
                    <a href="/">
                        <img src={logo} alt="Movie DB" className="h-14 md:h-16 py-2 sm:hover:animate-pulse" />
                    </a>
                </div>
                <div className="hidden lg:flex items-center gap-8 font-slogan">
                    <div className="flex gap-8 text-neutral-400">
                        <Link to="/" className={linkStylesDesktop}>Home</Link>
                        <Linking to="Movies" smooth duration={500} className={linkStylesDesktop}>
                            <Link to="/">Movies</Link>
                        </Linking>
                        <Linking to="TV" smooth duration={500} className={linkStylesDesktop}>
                            <Link to="/">TV Shows</Link>
                        </Linking>
                        <Link to="/about" className={linkStylesDesktop}>About</Link>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>

                <div className="flex items-center gap-8 text-gray-300 lg:hidden">
                    <div onClick={() => setSearch(!search)} className="cursor-pointer">
                        {search ? <BsSearch size={21} className="text-white" /> : <BsSearch size={20} />}
                    </div>
                    <div onClick={() => setMenu(!menu)} className="z-50 cursor-pointer">
                        {menu ? <CgClose size={30} /> : <CgMenu size={30} />}
                    </div>
                </div>

                {menu && (
                    <div className="flex flex-col justify-center items-center absolute z-40 top-0 left-0 w-full h-screen bg-gradient-to-b from-[#272727] to-gray-800">
                        <div className="flex flex-col items-center gap-8 text-neutral-400">
                            <Link onClick={() => setMenu(!menu)} to="/" className={linkStylesMobile}>Home</Link>
                            <Linking to="Movies" smooth duration={500} className={linkStylesMobile}>
                                <Link to="/">Movies</Link>
                            </Linking>
                            <Linking to="TV" smooth duration={500} className={linkStylesMobile}>
                                <Link to="/">TV Shows</Link>
                            </Linking>
                            <Link to="/about" className={linkStylesMobile}>About</Link>
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