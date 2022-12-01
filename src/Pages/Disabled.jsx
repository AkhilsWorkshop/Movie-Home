import React from 'react'
import disabledImg from "../assets/maintenance/disabled.svg"

const Disabled = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <img src={disabledImg} alt="Disabled" className='h-[30rem]' />
            <p className='text-2xl text-slate-100'>Under maintenance</p>
        </div>
    )
}

export default Disabled
