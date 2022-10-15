
const Overview = ({ data }) => {
    return (
        <div className="flex flex-col gap-5">

            <h1 className="border-l-4 pl-2 border-yellow-500 text-slate-400 text-sm font-semibold uppercase">Overview</h1>
            <p className="text-white text-sm font-title">{data.overview}</p>

        </div>
    )
}

export default Overview
