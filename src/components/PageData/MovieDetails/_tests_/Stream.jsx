import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { useEffect } from 'react'
import MediumTitle from '../../../Common/Title/MediumTitle'

const Stream = ({ stream }) => {

    const [streamProviders, setStreamProviders] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)

    const streamData = async () => {

        const data = Object.keys(null || stream?.results)
        setStreamProviders(data)
        console.log(data)
    }

    useEffect(() => {
        streamData()
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-col gap-5 item">

                <MediumTitle title="watch providers" />

                <div className="flex items-center gap-5">
                    <p>Selected Country</p>

                    <div>
                        {streamProviders?.length > 1 &&
                            <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                                <Listbox.Button className="bg-slate-800 duration-150 p-2 px-4 hover:bg-slate-700 shadow-sm shadow-black ">{selectedCountry}</Listbox.Button>
                                <Listbox.Options className="bg-slate-800 max-h-80 overflow-auto">
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
            </div>
        </div>
    )
}

export default Stream
