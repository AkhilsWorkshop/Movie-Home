import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { halfSizeImg, imgNotAvailable } from '../config/config';
import { db } from '../config/firebase';
import { UserAuth } from '../context/AuthContext'

const Dashboard = () => {

    const { user } = UserAuth();

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies);
            setTvShows(doc.data()?.savedShows);
            console.log(doc.data())
        })
    }, [user?.email])

    return (
        <div>
            <h1 className='text-white'>My Movies</h1>
            <div className="flex gap-4">
                {movies?.map((eachItem) => (
                    <div key={eachItem.id} className="flex w-[7rem] sm:w-[9rem] overflow-hidden rounded-md hover:cursor-pointer shadow-xl shadow-black border border-gray-700">
                        <img className="object-fill shadow-lg shadow-black duration-300 sm:hover:scale-105 sm:hover:saturate-150 aspect-[2/3]"
                            src={eachItem.img === null ? imgNotAvailable : halfSizeImg + eachItem.img}
                            alt="Reload Page"
                            loading="lazy">
                        </img>
                    </div>
                ))}
            </div>
            <h1 className='text-white'>My TV Shows</h1>
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
    )
}

export default Dashboard
