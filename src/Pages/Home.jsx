import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
// import DiscoverMovies from "../DetailedPage/DiscoverMovies"
// import DiscoverTv from "../DetailedPage/DiscoverTv"
import Trending from "../DetailedPage/Trending"
import React, { Suspense } from "react";
import Loading from "../components/Main/Loading"
const DiscoverMovies = React.lazy(() => import("../DetailedPage/DiscoverMovies"));
const DiscoverTv = React.lazy(() => import("../DetailedPage/DiscoverTv"));

const Home = () => {
    document.title = "Movie Home"
    return (

        <div className="bg-gradient-to-br from-[#141E30] via-[#232526] to-[#414345]">
            <Header />
            <Trending />
            <Suspense fallback={<Loading />}>
                <DiscoverMovies />
                <DiscoverTv />
            </Suspense>

            <Footer />
        </div>



    )
}

export default Home
