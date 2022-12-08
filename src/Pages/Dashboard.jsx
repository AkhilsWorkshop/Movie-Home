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

    const [userDataFromDB, setUserDataFromDB] = useState({
        savedMovies: [],
        savedShows: [],
        watchedMovies: [],
        watchedShows: []
    })

    const [loading, setLoading] = useState(false)

    const getUserDetails = () => {
        setLoading(true)
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setUserDataFromDB({
                savedMovies: doc.data()?.savedMovies,
                savedShows: doc.data()?.savedShows,
                watchedMovies: doc.data()?.watchedMovies,
                watchedShows: doc.data()?.watchedShows,
            })

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
                    <div className="h-[calc(100vh_-_7.5rem)] flex flex-col lg:flex-row">
                        <Tab.Group>

                            <SideMenu />

                            <Tab.Panels>
                                <Tab.Panel><WatchList movies={userDataFromDB?.savedMovies} tvShows={userDataFromDB?.savedShows} user={user} /></Tab.Panel>
                                <Tab.Panel><Watched movies={userDataFromDB?.watchedMovies} tvShows={userDataFromDB?.watchedShows} user={user} /></Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
            }
        </>
    )
}

export default Dashboard
