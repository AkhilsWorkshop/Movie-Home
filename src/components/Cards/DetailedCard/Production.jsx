import { halfSizeImg } from "../../../config/config"


const Production = ({ companies }) => {

    return (
        <>
            {
                companies?.length > 0
                    ?

                    <div className="flex gap-2 flex-wrap">

                        {companies?.map(({ id, name, logo_path }) => {
                            return logo_path === null ?
                                <div className="flex flex-col justify-center gap-1 opacity-100 sm:opacity-70 bg-gradient-to-t from-slate-500 via-current to-slate-400 p-2 rounded-md duration-200 sm:hover:opacity-100">
                                    <p className="text-black font-extrabold text-sm">{name}</p>
                                </div>
                                :
                                <div className="flex flex-col justify-center gap-1 opacity-100 sm:opacity-70 bg-gradient-to-t from-slate-500 via-current to-slate-400 p-2 rounded-md duration-200 sm:hover:opacity-100">
                                    <img
                                        src={halfSizeImg + logo_path}
                                        alt={name}
                                        className="object-fill h-8"
                                    />
                                </div>
                        })}

                    </div>

                    :
                    <></>
            }
        </>
    )
}

export default Production
