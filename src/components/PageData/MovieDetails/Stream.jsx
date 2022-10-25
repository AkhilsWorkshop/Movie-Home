import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const Stream = ({ stream }) => {

    console.log(stream)

    return (
        <div>
            {Object.keys(stream.results).map(key => (
                <li>{stream.results[key].link}</li>
            ))}
        </div>
    )
}

export default Stream
