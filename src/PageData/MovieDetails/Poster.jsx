import { halfSizeImg } from "../../config/config"

const Poster = ({ data, stream }) => {

    return (
        <div className="flex flex-col gap-4 font-title">

            <div className="shadow-xl shadow-black border border-gray-700">

                <img
                    src={halfSizeImg + data.poster_path}
                    alt={data.original_title}
                    className="object-fill h-[30rem] max-w-[30rem] "
                />

                <div className="flex justify-center gap-1 items-center w-full bg-slate-700 h-10">
                    {stream?.US?.flatrate === undefined ?
                        <>
                            <p className="text-slate-200 text-sm">Available to buy or rent at</p>
                            <img
                                src={halfSizeImg + stream?.US?.buy[0].logo_path}
                                alt="Not Found"
                                className="object-fill h-8"
                            />
                        </>
                        :
                        <>
                            <p className="text-slate-200 text-sm">Now Streaming at</p>
                            <img
                                src={halfSizeImg + stream?.US?.flatrate[0].logo_path}
                                alt="Not Found"
                                className="object-fill h-8"
                            />
                        </>}


                </div>

            </div>

        </div>
    )
}

export default Poster
