import { Menu } from '@headlessui/react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { BiDotsVertical } from 'react-icons/bi'
import { MdDeleteSweep } from 'react-icons/md'
import { RiVideoAddFill } from 'react-icons/ri'
import { halfSizeImg, imgNotAvailable } from '../../../config/config'
import { db } from '../../../config/firebase'
import Button from '../../Sub/Button'

const DashCard = ({ showData, user, type, name }) => {

    const movieRef = doc(db, "users", `${user?.email}`)
    const deleteSaved = async (showID) => {
        try {
            const result = showData.filter((item) => item.id !== showID)
            if (type === "movie") {
                await updateDoc(movieRef, {
                    savedMovies: result
                })
            }
            else {
                await updateDoc(movieRef, {
                    savedShows: result
                })
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    const deleteWatched = async (showID) => {
        try {
            const result = showData.filter((item) => item.id !== showID)
            if (type === "movie") {
                await updateDoc(movieRef, {
                    watchedMovies: result
                })
            }
            else {
                await updateDoc(movieRef, {
                    watchedShows: result
                })
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    const watchedShow = async (show) => {
        const result = showData.filter((item) => item.id !== show.id)
        try {
            if (type === "movie") {
                await updateDoc(movieRef, {
                    watchedMovies: arrayUnion({
                        id: show.id,
                        title: show.title,
                        img: show.img
                    })
                })
                await updateDoc(movieRef, {
                    savedMovies: result
                })
            }
            else {
                await updateDoc(movieRef, {
                    watchedShows: arrayUnion({
                        id: show.id,
                        title: show.title,
                        img: show.img
                    })
                })
                await updateDoc(movieRef, {
                    savedShows: result
                })
            }

        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="flex gap-4 flex-wrap justify-center w-full lg:justify-start max-h-[calc(100vh_-_16.5rem)] lg:max-h-[calc(100vh_-_13rem)] overflow-y-auto lg:overflow-x-hidden">
            {showData?.map((eachItem) => (

                <div className="flex flex-col gap-2 w-[7rem] sm:w-[9rem]" key={eachItem.id}>
                    <Button media_type={type} id={eachItem.id}>
                        <div className="flex w-[7rem] sm:w-[9rem] overflow-hidden rounded-md hover:cursor-pointer shadow-lg shadow-black border border-gray-700 hover:shadow-xl hover:shadow-black">
                            <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                                src={eachItem.img === null ? imgNotAvailable : halfSizeImg + eachItem.img}
                                alt="Reload Page"
                                loading="lazy">
                            </img>
                        </div>
                    </Button>
                    <div className='text-white flex items-center justify-between relative'>
                        <p className=" text-xs truncate">{eachItem.title}</p>
                        <Menu>
                            <Menu.Button><BiDotsVertical size={20} className='flex-shrink-0 cursor-pointer' /></Menu.Button>
                            <Menu.Items className="absolute bg-slate-700 text-xs rounded-md bottom-7 right-0">
                                {name === "watched" ? <></>
                                    :
                                    <Menu.Item>
                                        <div onClick={() => watchedShow(eachItem)} className="flex gap-1 p-2 justify-center items-center cursor-pointer hover:text-[#EAB308] hover:bg-slate-800 rounded-t-md">
                                            <AiFillEye size={15} />
                                            <p>Watched</p>
                                        </div>
                                    </Menu.Item>
                                }
                                <Menu.Item>
                                    <div onClick={() => name === "watched" ? deleteWatched(eachItem.id) : deleteSaved(eachItem.id)} className="flex gap-1 p-2 justify-center items-center cursor-pointer hover:text-[#EAB308] hover:bg-slate-800 rounded-b-md">
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
    )
}

export default DashCard
