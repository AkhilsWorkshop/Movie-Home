import React from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { FiLogOut } from "react-icons/fi"
import { MdPlaylistAdd } from "react-icons/md"
import { AiFillEye, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { MdSupervisorAccount } from "react-icons/md"
import { UserAuth } from '../../../context/AuthContext'
import { useState } from 'react'

const SideMenu = () => {

    const { user, signOutUser } = UserAuth();

    const [menu, setMenu] = useState(true);

    const sideMenu = [
        {
            id: 1,
            name: "Watchlist",
            icon: MdPlaylistAdd,
        },
        {
            id: 2,
            name: "Watched",
            icon: AiFillEye,
        },
        {
            id: 3,
            name: "Account",
            icon: MdSupervisorAccount,
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signOutUser()
        } catch (e) {
            console.log(e.message)
        }
    }



    return (
        <Tab.List className={`text-gray-400  bg-[#121216] flex flex-col duration-300 justify-between flex-shrink-0 ${menu ? "w-[15%] p-5" : "w-[5%] p-3"}`}>
            <div className='flex flex-col'>
                {sideMenu.map((eachItem) => (
                    <Tab as={Fragment} key={eachItem.id}>
                        {({ selected }) => (
                            <button className={`font-bold duration-150 px-2 py-1 my-2 flex gap-2 border-l-4 ${selected ? ' text-white border-[#EAB308]' : 'hover:text-white border-transparent'}`}>
                                <eachItem.icon size={25} className={`font-bold ${selected ? ' text-[#EAB308]' : 'hover:text-white'}`} />{menu && eachItem.name}
                            </button>
                        )}
                    </Tab>
                ))}
            </div>
            <button onClick={handleSubmit} className="bg-[#EAB308] hover:bg-[#EAB308]/80 duration-300 text-black font-bold py-2 px-4 rounded-xl flex justify-center items-center gap-2"><FiLogOut size={20} /> {menu && "Logout"}</button>
            <button onClick={() => setMenu(!menu)} className="self-end">{menu ? <AiOutlineArrowLeft size={25} /> : <AiOutlineArrowRight size={25} />}</button>

        </Tab.List>
    )
}

export default SideMenu
