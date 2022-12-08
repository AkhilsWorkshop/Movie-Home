import { Sling as Hamburger } from 'hamburger-react'
import React from 'react'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { HiUserAdd } from 'react-icons/hi'
import { MdLogin } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SearchBarMobile from '../../Sub/SearchBarMobile'

const MobileHeader = ({ user, signOutUser, logo }) => {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [autocompleteData, setAutoCompleteData] = useState([])

    const handleSubmit = async () => {
        try {
            await signOutUser()
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="z-50 w-full flex lg:hidden items-center justify-between px-2 bg-[#121216] md:justify-around h-14 shadow-xl border-b-slate-800 border-b">

            <a href="/">
                <img src={logo} alt="Movie DB" className="h-8 pl-3" />
            </a>
            <div className='flex gap-3 items-center justify-center'>
                <BiSearchAlt2 onClick={() => { setSearch(!search); setAutoCompleteData("") }} size={27} className={`duration-300 ${search ? "text-[#EAB308]/80" : "text-gray-400"}`} />
                <Link to="/myaccount">
                    <FaUserCircle size={25} className="text-neutral-600 ml-1" />
                </Link>
                <Hamburger size={28} toggled={menu} toggle={setMenu} color="rgb(156,163,175)" />
            </div>

            <SearchBarMobile search={search} setSearch={setSearch} autocompleteData={autocompleteData} setAutoCompleteData={setAutoCompleteData} />

            <div className={`flex fixed left-0 top-0 w-full h-full transition-all ease-linear duration-300 z-[25] ${menu ? 'visible bg-black/10 backdrop-blur-sm' : 'invisible'}`}>
                <div className={`absolute bg-[#121216] h-full w-[230px] transition-all ease-linear duration-300 flex flex-col justify-between ${menu ? 'right-0' : '-right-[100%]'}`}>
                    <div className="flex justify-between p-5">
                        <BsArrowRight onClick={() => setMenu(!menu)} size={30} className="text-white" />
                        <img src={logo} alt="Movie DB" className="h-6" />
                    </div>
                    <div className='h-[0.1rem] w-full bg-neutral-800' />
                    <div className='flex text-gray-300 w-full justify-around p-4' >
                        {user === null ?
                            <>
                                <Link onClick={() => setMenu(!menu)} to="/register" className='flex flex-col gap-1 justify-center items-center'>
                                    <HiUserAdd size={30} />
                                    <p className='text-xs'>Register</p>
                                </Link>
                                <div className='w-[0.1rem] h-full bg-neutral-800' />
                            </>
                            :
                            <></>
                        }
                        <Link onClick={() => { user === null ? setMenu(!menu) : handleSubmit(); setMenu(!menu) }} to="/login" className='flex flex-col gap-1 justify-center items-center'>
                            <MdLogin size={30} />
                            <p className='text-xs'>{user === null ? "Login" : "Logout"}</p>
                        </Link>
                    </div>
                    <div className='h-[0.1rem] w-full bg-neutral-800' />
                    <div className="flex flex-col grow">
                        <div className="flex flex-col gap-5 text-neutral-400 p-5 text-lg">
                            <Link onClick={() => setMenu(!menu)} to="/">Home</Link>
                            <Link onClick={() => setMenu(!menu)} to="/movies">Movies</Link>
                            <Link onClick={() => setMenu(!menu)} to="/about">About</Link>
                        </div>
                        <div className='h-[0.1rem] w-full bg-neutral-800' />
                        {/* <Link to="/myaccount">
                            <p className="text-gray-300 cursor-pointer hover:text-white duration-300">Watchlist</p>
                        </Link> */}
                    </div>
                    <div className="bg-[#17171b] py-2">
                        <p className="text-sm text-center font-slogan text-gray-500">Built & Designed by <a href="https://akhilkumar.dev/" target="_blank" rel="noreferrer" className="text-[#EAB308]">Akhil</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MobileHeader
