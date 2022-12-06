import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
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

        </div>
    )
}

export default Dashboard
