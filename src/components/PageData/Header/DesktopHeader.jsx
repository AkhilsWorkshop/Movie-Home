import React from 'react'
import { RiAccountCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import SearchBar from '../../Sub/SearchBar'

const DesktopHeader = ({ user, logo }) => {
    return (
        <div className="z-50 w-full hidden lg:flex items-center justify-between px-10 bg-[#121216] md:justify-around h-14 shadow-xl border-b-slate-800 border-b">
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
                        <Link to="/myaccount">
                            <RiAccountCircleFill size={30} className="text-gray-300 cursor-pointer hover:text-white duration-300" />
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default DesktopHeader
