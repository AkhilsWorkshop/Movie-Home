import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
import Loading from "../components/Main/Loading";
import { DISCOVER, navActive, UPCOMING } from "../config/config"
const Card = React.lazy(() => import("../components/Cards/Card"));
const CardLandscape = React.lazy(() => import("../components/Cards/CardLandscape"));
const CardBig = React.lazy(() => import("../components/Cards/CardBig"));

const Movies = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 300)
    })
    return (
        <>
            {loading
                ?
                (<Loading />)
                :

                <div>
                    <Header movies={navActive} />
                    <Suspense fallback={<Loading />}>
                        <Card title="Action Thriller" first={DISCOVER} second="&with_genres=28,53" media_type="movie" />
                        <CardBig title="Top International Movies" first={DISCOVER} second="&with_original_language=ta|ml|te|kn" media_type="movie" />
                        <Card title="Horror" first={DISCOVER} second="&with_genres=27" media_type="movie" />
                        <Card title="Crime Thriller" first={DISCOVER} second="&with_genres=80,53&sort_by=vote_count.desc" media_type="movie" />
                        <CardLandscape title="Upcoming Indian Movies" first={UPCOMING} second="&region=IN&with_original_language=ta|ml|hi|te|kn&sort_by=vote_average.desc" media_type="movie" />
                    </Suspense>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Movies
