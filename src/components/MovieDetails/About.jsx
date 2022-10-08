import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

const About = ({ data, mediaType }) => {
    return (
        <div className="flex flex-col items-start sm:items-end gap-5">

            <>
                {
                    data.homepage === "" ?
                        <></>
                        :
                        <div onClick={(e) => {
                            e.preventDefault();
                            window.location.href = data.homepage;
                        }}>
                            <FaExternalLinkAlt size={20} className=" text-gray-300 cursor-pointer hover:text-white" />
                        </div>
                }
            </>

            <div className="flex items-center gap-1">
                <AiTwotoneStar size={30} className="text-yellow-400" />
                <h1 className="text-2xl font-bold">{Math.round(data.vote_average)}<span className="text-lg text-slate-400">/10</span></h1>
            </div>

            <p className="text-slate-400 text-sm gap-1 flex flex-wrap items-end">
                {data.genres?.map(({ id, name }) => (
                    <span key={id} className="text-white border border-gray-400 px-1 rounded-md"> {name}</span>
                ))}
            </p>

            {
                mediaType === "movie"
                &&
                <div className="flex items-center gap-1">
                    <h1 className="text-xl font-bold">{Math.round(data.runtime)}<span className="text-lg text-slate-400 font-normal"> min</span></h1>
                </div>
            }

            <div className="flex flex-col gap-1 items-start sm:items-end">

                <p className="text-slate-400 text-sm">Country:
                    {data.production_countries?.map(({ id, name }) => (
                        <span key={id} className="text-white font-bold"> {name}</span>
                    ))}
                </p>

                <p className="text-slate-400 text-sm">Released: <span className="text-white font-bold">{data.first_air_date || data.release_date || "N/A"}</span></p>

                <p className="text-slate-400 text-sm">Main Language:
                    {data.spoken_languages?.map(({ id, name, english_name }) => {
                        return english_name ?
                            (
                                <span key={id} className="text-white font-bold"> {english_name}</span>
                            )
                            :
                            (
                                <span key={id} className="text-white font-bold"> {name}</span>
                            )
                    }
                    )}
                </p>

            </div>

        </div>
    )
}

export default About
