import { Tab } from '@headlessui/react';
import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SideMenu from '../components/PageData/Dashboard/SideMenu';
import Watched from '../components/PageData/Dashboard/Watched';
import WatchList from '../components/PageData/Dashboard/WatchList';
import { db } from '../config/firebase';
import { UserAuth } from '../context/AuthContext'
import Loading from '../layouts/Loading';

const Dashboard = () => {

    const { user } = UserAuth();

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const [loading, setLoading] = useState(false)

    const getUserDetails = () => {
        setLoading(true)
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies);
            setTvShows(doc.data()?.savedShows);
        })
    }

    useEffect(() => {
        getUserDetails()
        setTimeout(() => { setLoading(false) }, 500)
    }, [])

    return (
        <>
            {
                loading ? (
                    <Loading />
                )
                    :
                    <div className="h-[calc(100vh_-_9rem)] flex">
                        <Tab.Group>

                            <SideMenu />

                            <Tab.Panels>
                                <Tab.Panel><WatchList movies={movies} tvShows={tvShows} user={user} /></Tab.Panel>
                                <Tab.Panel><Watched movies={movies} tvShows={tvShows} user={user} /></Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
            }
        </>
    )
}

export default Dashboard
