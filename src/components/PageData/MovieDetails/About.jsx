import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const About = ({ data, mediaType }) => {

    return (
        <div className="flex flex-col items-start sm:items-end gap-5 font-title w-full">

            <table className="border-separate border-spacing-1 w-full">
                <tr>
                    <th className="w-[40%]"></th>
                    <th></th>
                </tr>
                {
                    data.vote_average > 1
                    &&
                    <tr>
                        <td>
                            <p className="text-slate-400 text-sm font-semibold uppercase">Rating</p>
                        </td>
                        <td>
                            <div className="flex items-center gap-1">
                                <AiTwotoneStar size={20} className="text-yellow-400" />
                                <h1 className="text-lg font-bold">{Math.round(data.vote_average)}<span className="text-sm text-slate-400 font-normal">/10</span></h1>
                            </div>
                        </td>
                    </tr>
                }
                {
                    mediaType === "movie"
                    &&
                    data.runtime > 1
                    &&
                    <tr>
                        <td>
                            <p className="text-slate-400 text-sm font-semibold uppercase">Runtime</p>
                        </td>
                        <td>
                            <h1 className="text-md font-bold">{Math.floor(data.runtime / 60)}<span className="text-sm text-slate-400 font-normal"> h</span> {data.runtime % 60}<span className="text-sm text-slate-400 font-normal"> min</span></h1>
                        </td>
                    </tr>

                }
                <tr className='align-top'>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Genre</p>
                    </td>
                    <td>
                        <div className="flex flex-wrap gap-2">
                            {data.genres?.map(({ name }) => (
                                <span key={uuidv4()} className="text-blue-100 border uppercase bg-black/70 text-[0.65rem] border-gray-400 px-1 rounded-sm"> {name}</span>
                            ))}
                        </div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Country</p>
                    </td>
                    <td>
                        <p className="text-white text-xs capitalize leading-6"> {data.production_countries?.map((item) => item.name).join(', ')}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Release Date</p>
                    </td>
                    <td>
                        <span className="text-white text-xs capitalize">{data.first_air_date || data.release_date || "N/A"}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Language</p>
                    </td>
                    <td>
                        <p className="text-white text-xs capitalize"> {data.spoken_languages?.map((item) => item.english_name).join(', ')}</p>
                    </td>
                </tr>

            </table>

        </div>
    )
}

export default About
