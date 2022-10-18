import { halfSizeImg } from "../../../config/config"



const Production = ({ companies }) => {

    return (
        <>
            {
                companies?.length > 0
                    ?
                    <div className="flex flex-col gap-5">

                        <h1 className="border-l-4 pl-2 border-yellow-500 text-slate-400 text-sm font-semibold uppercase">Production</h1>

                        <div className="flex gap-2 flex-wrap">

                            {companies?.map(({ index, name, logo_path }) => {
                                return logo_path === null ?
                                    <div key={index} className="flex flex-col justify-center gap-1 opacity-100 sm:opacity-70 bg-gradient-to-t from-slate-500 via-current to-slate-400 p-2 rounded-sm duration-200 sm:hover:opacity-100">
                                        <p className="text-black font-extrabold text-sm">{name}</p>
                                    </div>
                                    :
                                    <div key={index} className="flex flex-col justify-center gap-1 opacity-100 sm:opacity-70 bg-gradient-to-t from-slate-500 via-current to-slate-400 p-2 rounded-sm duration-200 sm:hover:opacity-100">
                                        <img
                                            src={halfSizeImg + logo_path}
                                            alt={name}
                                            className="object-fill h-6"
                                        />
                                    </div>
                            })}

                        </div>

                    </div>

                    :
                    <></>
            }
        </>
    )
}

export default Production
