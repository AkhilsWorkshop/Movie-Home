import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { RiMenuAddLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import { UserAuth } from '../context/AuthContext'

const WatchList = ({ data, mediaType }) => {

    const { user } = UserAuth()

    const movieShowID = doc(db, "users", `${user?.email}`)

    console.log(data)

    const saveWatchData = async () => {
        if (user?.email) {
            if (mediaType === "movie") {
                await updateDoc(movieShowID, {
                    savedMovies: arrayUnion({
                        id: data.id,
                        title: data.title,
                        img: data.backdrop_path
                    })
                })
            }

            else {
                await updateDoc(movieShowID, {
                    savedShows: arrayUnion({
                        id: data.id,
                        title: data.name,
                        img: data.backdrop_path
                    })
                })
            }

        }
        else {
            alert("Log In first")
        }
    }

    return (
        <div className=' w-full'>
            <button onClick={saveWatchData} className="text-black font-bold bg-[#EAB308]/80 hover:bg-[#EAB308] rounded-sm px-5 py-2.5 text-center duration-300 flex w-full justify-center items-center gap-3">
                <RiMenuAddLine size={20} />
                <p>Add to watch list</p>
            </button>

        </div>
    )
}

export default WatchList
