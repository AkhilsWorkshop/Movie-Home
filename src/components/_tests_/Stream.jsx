import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { useEffect } from 'react'
import { AiOutlineDown } from "react-icons/ai"
import MediumTitle from '../Common/Title/MediumTitle'
import { halfSizeImg } from '../../config/config'

const Stream = ({ stream }) => {

    const [streamProviders, setStreamProviders] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)

    const streamData = async () => {

        const data = Object.keys(null || stream?.results)
        setStreamProviders(data)
        console.log(stream)
    }

    useEffect(() => {
        streamData()
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-col gap-5 item">

                <MediumTitle title="watch providers" />

                <div className="flex items-center gap-5">
                    <p className="text-sm">Selected Country</p>

                    <div>
                        {streamProviders?.length > 1 &&
                            <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                                <Listbox.Button className="bg-slate-800 duration-150 p-2 px-4 hover:bg-slate-700 flex items-center
                                gap-2 ">{selectedCountry}<AiOutlineDown size={15} /></Listbox.Button>
                                <Listbox.Options className="bg-slate-800 max-h-80 overflow-auto absolute">
                                    {streamProviders.map((eachItem) => (
                                        <Listbox.Option
                                            key={eachItem}
                                            value={eachItem}
                                            className="hover:bg-slate-700 p-2 px-4 cursor-pointer"
                                        >
                                            {eachItem}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>
                        }

                    </div>
                </div>

                {stream?.results?.US === undefined ?
                    <></>
                    :
                    <div className="flex justify-center gap-1 items-center w-full bg-slate-700 h-10">
                        {stream?.results?.US?.flatrate === undefined ?
                            <>
                                <p className="text-slate-200 text-sm">Available to buy or rent at</p>
                                <img
                                    src={halfSizeImg + stream?.results?.US?.buy[0].logo_path}
                                    alt="Not Found"
                                    className="object-fill h-8"
                                />
                            </>
                            :
                            <>
                                <p className="text-slate-200 text-sm">Now Streaming at</p>
                                <img
                                    src={halfSizeImg + stream?.results?.US?.flatrate[0].logo_path}
                                    alt="Not Found"
                                    className="object-fill h-8"
                                />
                            </>}


                    </div>
                }
            </div>
        </div>
    )
}

export default Stream
