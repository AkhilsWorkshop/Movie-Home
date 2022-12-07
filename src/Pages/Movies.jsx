import React, { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../layouts/Loading";
import { DISCOVER, UPCOMING } from "../config/config"
const Card = React.lazy(() => import("../components/Common/Card"));
const CardLandscape = React.lazy(() => import("../components/Common/CardLandscape"));
const CardBig = React.lazy(() => import("../components/Common/CardBig"));

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
                <div className="flex flex-col gap-10 pt-10 pb-20">
                    <Suspense fallback={<Loading />}>
                        <Card title="Action Thriller" first={DISCOVER} second="&with_genres=28,53" media_type="movie" />
                        <CardBig title="Top International Movies" first={DISCOVER} second="&with_original_language=ta|ml|te|kn" media_type="movie" />
                        <Card title="Horror" first={DISCOVER} second="&with_genres=27" media_type="movie" />
                        <Card title="Crime Thriller" first={DISCOVER} second="&with_genres=80,53&sort_by=vote_count.desc" media_type="movie" />
                        <CardLandscape title="Upcoming Indian Movies" first={UPCOMING} second="&region=IN&with_original_language=ta|ml|hi|te|kn&sort_by=vote_average.desc" media_type="movie" />
                    </Suspense>
                </div>
            }
        </>
    )
}

export default Movies
