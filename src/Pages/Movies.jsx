import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import Loading from "../layouts/Loading";
import { DISCOVER, navActive, UPCOMING } from "../config/config"
const Card = React.lazy(() => import("../components/Common/Cards/Card"));
const CardLandscape = React.lazy(() => import("../components/Common/Cards/CardLandscape"));
const CardBig = React.lazy(() => import("../components/Common/Cards/CardBig"));

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
                    <div className="flex flex-col gap-10 pt-24 pb-10">
                        <Suspense fallback={<Loading />}>
                            <Card title="Action Thriller" first={DISCOVER} second="&with_genres=28,53" media_type="movie" />
                            <CardBig title="Top International Movies" first={DISCOVER} second="&with_original_language=ta|ml|te|kn" media_type="movie" />
                            <Card title="Horror" first={DISCOVER} second="&with_genres=27" media_type="movie" />
                            <Card title="Crime Thriller" first={DISCOVER} second="&with_genres=80,53&sort_by=vote_count.desc" media_type="movie" />
                            <CardLandscape title="Upcoming Indian Movies" first={UPCOMING} second="&region=IN&with_original_language=ta|ml|hi|te|kn&sort_by=vote_average.desc" media_type="movie" />
                        </Suspense>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Movies
