import { Tab } from '@headlessui/react';
import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SideMenu from '../components/PageData/Dashboard/SideMenu';
import WatchList from '../components/PageData/Dashboard/WatchList';
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
        })
    }, [user?.email])

    return (
        <div className="h-[calc(100vh_-_9rem)] flex">
            <Tab.Group>

                <SideMenu />

                <Tab.Panels>
                    <Tab.Panel><WatchList movies={movies} tvShows={tvShows} user={user} /></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Dashboard
