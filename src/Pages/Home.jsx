import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import React, { Suspense } from "react";
import Loading from "../layouts/Loading"
import { DISCOVER_TV, navActive, NOW_PLAYING, POPULAR_PERSON, TOP_RATED, UPCOMING } from "../config/config";
import { useState } from "react";
import { useEffect } from "react";
import Trending from "../components/PageData/HomePage/Trending";

const Card = React.lazy(() => import("../components/Common/Cards/Card"));
const CardBig = React.lazy(() => import("../components/Common/Cards/CardBig"));
const CardLandscape = React.lazy(() => import("../components/Common/Cards/CardLandscape"));

const Home = () => {

    document.title = "Movie Home"

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 500)
    })
    return (
        <>
            {loading
                ?
                (<Loading />)
                :

                <div>

                    <div className="flex flex-col gap-10 pb-20">

                        <Trending />
                        <Suspense fallback={<Loading />}>
                            <Card title="Now Playing (In Theatres)" first={NOW_PLAYING} second="" media_type="movie" />
                            <CardLandscape title="Upcoming Movies" first={UPCOMING} second="&region=US" media_type="movie" />
                            <Card title="Discover Top TV Shows" first={DISCOVER_TV} second="" media_type="tv" />
                            <CardBig title="Explore Popular Artists" first={POPULAR_PERSON} second="&language=en-US" media_type="person" />
                            <Card title="Discover Top Rated Movies" first={TOP_RATED} second="&sort_by=popularity.desc" media_type="movie" />
                        </Suspense>
                    </div>

                </div>
            }
        </>
    )
}

export default Home
