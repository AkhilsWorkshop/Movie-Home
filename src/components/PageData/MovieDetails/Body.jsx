import React, { Suspense } from "react"
import LScrollCard from "../../LazyLoading/LScrollCard"
import About from "./About"
import Overview from "./Overview"
import Poster from "./Poster"
import Production from "./Production"
import Title from "./Title"
import Trailer from "./Trailer"
import Videos from "./Videos"
import ForYou from "./_tests_/ForYou"
import Stream from "./_tests_/Stream"

const ScrollCard1 = React.lazy(() => import("../../Cards/DetailedCard/ScrollCard1"));
const ScrollCard2 = React.lazy(() => import("../../Cards/DetailedCard/ScrollCard2"));

const Body = ({ data, watchProv, mediaType, searchID }) => {


    return (
        <div className="flex flex-col justify-center sm:px-20 xl:px-52 lg:px-32 backdrop-brightness-[100%] bg-gradient-to-b via-gray-900 from-transparent to-gray-900 text-white">

            <Trailer data={data} />

            <div className="flex flex-col gap-5 bg-gray-900 p-6 rounded-md">

                <Title data={data} />

                <div className="flex flex-col md:flex-row gap-5">

                    <div className="flex flex-col items-center gap-4">

                        <Poster data={data} stream={watchProv} />
                        <About data={data} mediaType={mediaType} />
                        <Stream stream={watchProv} />

                    </div>

                    <div className="flex flex-col w-full gap-5 overflow-hidden">


                        <Suspense fallback={<LScrollCard />}>

                            <ScrollCard1 mediaType={mediaType} searchID={searchID} />

                        </Suspense>

                        <Suspense fallback={<LScrollCard />}>

                            <ScrollCard2 mediaType={mediaType} searchID={searchID} />

                        </Suspense>

                        <Overview data={data} />

                        <Videos data={data} />

                        <Production companies={data?.production_companies} />

                        <ForYou id={data.id} mediaType={mediaType} />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Body
