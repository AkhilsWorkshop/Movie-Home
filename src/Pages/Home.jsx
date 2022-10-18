import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
import React, { Suspense } from "react";
import Loading from "../components/Main/Loading"
import { DISCOVER_TV, NOW_PLAYING, POPULAR_PERSON, TOP_RATED, UPCOMING } from "../config/config";
import { useState } from "react";
import { useEffect } from "react";
import Trending from "../components/PageData/HomePage/Trending";

const Card = React.lazy(() => import("../components/Cards/Card"));
const CardBig = React.lazy(() => import("../components/Cards/CardBig"));
const CardLandscape = React.lazy(() => import("../components/Cards/CardLandscape"));

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
                    <Header />
                    <Trending />
                    <Suspense fallback={<Loading />}>
                        <Card title="Now Playing (In Theatres)" first={NOW_PLAYING} second="" media_type="movie" />
                        <CardLandscape title="Upcoming Movies" first={UPCOMING} second="&region=US" media_type="movie" />
                        <Card title="Discover Top TV Shows" first={DISCOVER_TV} second="" media_type="tv" />
                        <CardBig title="Explore Popular Artists" first={POPULAR_PERSON} second="" media_type="person" />
                        <Card title="Discover Top Rated Movies" first={TOP_RATED} second="&sort_by=popularity.desc" media_type="movie" />
                    </Suspense>

                    <Footer />
                </div>
            }
        </>
    )
}

export default Home
