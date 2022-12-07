import React from 'react'
import { halfSizeImg, imgNotAvailable } from '../../../config/config'
import { Tab, Menu } from '@headlessui/react'
import { Fragment } from 'react';
import { BiDotsVertical } from "react-icons/bi"
import { RiVideoAddFill } from "react-icons/ri"
import { MdDeleteSweep } from "react-icons/md"
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const WatchList = ({ movies, tvShows, user }) => {

    const tabList = ["Movies", "TV Shows"]

    const movieRef = doc(db, "users", `${user?.email}`)
    const deleteShow = async (showID) => {
        try {
            const result = movies.filter((item) => item.id !== showID)
            await updateDoc(movieRef, {
                savedMovies: result
            })
        } catch (e) {
            console.log(e.message)
        }
    }
    const watchedShow = async (show) => {
        try {
            await updateDoc(movieRef, {
                watchedMovies: arrayUnion({
                    id: show.id,
                    title: show.title,
                    img: show.img
                })
            })
            const result = movies.filter((item) => item.id !== show.id)
            await updateDoc(movieRef, {
                savedMovies: result
            })
        } catch (e) {
            console.log(e.message)
        }
    }


    return (
        <div className='px-10 py-5'>
            <Tab.Group>
                <Tab.List className="text-gray-400">
                    {tabList.map((eachItem, index) => (
                        <Tab as={Fragment} key={index}>
                            {({ selected }) => (
                                <button className={selected ? 'font-bold border-b-2 text-white border-[#EAB308] duration-150 p-2 px-4' : 'border-b-2 border-transparent hover:border-[#EAB308] duration-150 p-2 px-4'}>
                                    {eachItem}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="pt-5">
                    <Tab.Panel>
                        <div className="flex gap-4 flex-wrap">
                            {movies?.map((eachItem) => (
                                <div key={eachItem.id} className="flex flex-col gap-2 w-[7rem] sm:w-[9rem]">
                                    <div className="flex w-[7rem] sm:w-[9rem] overflow-hidden rounded-md hover:cursor-pointer shadow-lg shadow-black border border-gray-700 hover:shadow-xl hover:shadow-black">
                                        <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                            src={eachItem.img === null ? imgNotAvailable : halfSizeImg + eachItem.img}
                                            alt="Reload Page"
                                            loading="lazy">
                                        </img>
                                    </div>
                                    <div className='text-white flex items-center justify-between relative'>
                                        <p className=" text-xs truncate">{eachItem.title}</p>
                                        <Menu>
                                            <Menu.Button><BiDotsVertical size={20} className='flex-shrink-0 cursor-pointer' /></Menu.Button>
                                            <Menu.Items className="absolute bg-slate-700 text-xs rounded-md bottom-7 right-0">
                                                <Menu.Item>
                                                    <div onClick={() => watchedShow(eachItem)} className="flex gap-1 p-2 justify-center items-center cursor-pointer hover:text-[#EAB308] hover:bg-slate-800">
                                                        <RiVideoAddFill size={15} />
                                                        <p>Watched</p>
                                                    </div>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <div onClick={() => deleteShow(eachItem.id)} className="flex gap-1 p-2 justify-center items-center cursor-pointer hover:text-[#EAB308] hover:bg-slate-800">
                                                        <MdDeleteSweep size={20} />
                                                        <p>Remove</p>
                                                    </div>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Menu>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex gap-4">
                            {tvShows?.map((eachItem) => (

                                <div key={eachItem.id} className="flex w-[7rem] sm:w-[9rem] overflow-hidden rounded-md hover:cursor-pointer shadow-xl shadow-black border border-gray-700">
                                    <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                        src={eachItem.img === null ? imgNotAvailable : halfSizeImg + eachItem.img}
                                        alt="Reload Page"
                                        loading="lazy">
                                    </img>
                                </div>

                            ))}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div >
    )
}

export default WatchList
