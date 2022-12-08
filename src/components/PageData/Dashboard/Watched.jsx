import React from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react';
import DashCard from './DashCard';

const Watched = ({ movies, tvShows, user }) => {

    const tabList = ["Movies", "TV Shows"]

    return (
        <div className='lg:px-10 lg:py-5 flex flex-col items-center lg:items-start'>
            <Tab.Group>
                <Tab.List className="text-gray-400">
                    {tabList.map((eachItem, index) => (
                        <Tab as={Fragment} key={index}>
                            {({ selected }) => (
                                <button className={selected ? 'font-bold border-b-2 text-white border-[#EAB308] duration-150 p-2 px-4' : 'border-b-2 border-transparent hover:text-white duration-150 p-2 px-4'}>
                                    {eachItem}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="pt-2 lg:pt-4">
                    <Tab.Panel>
                        <DashCard showData={movies} user={user} type="movie" name="watched" />
                    </Tab.Panel>
                    <Tab.Panel>
                        <DashCard showData={tvShows} user={user} type="tv" name="watched" />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div >
    )
}

export default Watched
