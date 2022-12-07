import MediumTitle from "../../Common/MediumTitle"

const Overview = ({ data }) => {
    return (
        <>
            {data.overview !== ""
                &&
                <div className="flex flex-col gap-5">

                    <MediumTitle title="overview" />
                    <p className="text-white text-sm font-title">{data.overview}</p>

                </div>
            }
        </>
    )
}

export default Overview
