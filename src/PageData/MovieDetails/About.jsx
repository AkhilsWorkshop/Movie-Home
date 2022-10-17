import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';

const About = ({ data, mediaType }) => {
    return (
        <div className="flex flex-col items-start sm:items-end gap-5 font-title">

            <table className="border-separate border-spacing-1">
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
                {
                    mediaType === "movie"
                    &&
                    <tr>
                        <td>
                            <p className="text-slate-400 text-sm font-semibold uppercase">Runtime</p>
                        </td>
                        <td>
                            <h1 className="text-lg font-bold">{Math.round(data.runtime)}<span className="text-sm text-slate-400 font-normal"> min</span></h1>
                        </td>
                    </tr>
                }
                <tr className='align-top'>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Genre</p>
                    </td>
                    <td>
                        <div className="flex flex-wrap gap-2">
                            {data.genres?.map(({ id, name }) => (
                                <span key={id} className="text-blue-100 border uppercase bg-black/70 text-[0.65rem] border-gray-400 px-1 rounded-sm"> {name}</span>
                            ))}
                        </div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Country</p>
                    </td>
                    <td>
                        <ul>
                            {data.production_countries?.map(({ id, name }) => (
                                <li key={id} className="text-white text-xs capitalize leading-6"> {name}</li>
                            ))}
                        </ul>

                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Released On</p>
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
                        {data.spoken_languages?.map(({ id, name, english_name }) => {
                            return english_name ?
                                (
                                    <span key={id} className="text-white text-xs capitalize"> {english_name}</span>
                                )
                                :
                                (
                                    <span key={id} className="text-white text-xs capitalize"> {name}</span>
                                )
                        }
                        )}
                    </td>
                </tr>
                {/* <tr className='align-top'>
                    <td>
                        <p className="text-slate-400 text-sm font-semibold uppercase">Production</p>
                    </td>
                    <td>
                        <Production companies={data.production_companies} />
                    </td>
                </tr> */}
            </table>

        </div>
    )
}

export default About
