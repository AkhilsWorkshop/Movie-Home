import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
import React, { Suspense } from "react";
import Loading from "../components/Main/Loading"
import Trending from "../components/HomePage/Trending";
// import DiscoverMovies from "../components/HomePage/DiscoverMovies";
// import DiscoverTV from "../components/HomePage/DiscoverTV";
// import PopularPeople from "../components/HomePage/PopularPeople";
const DiscoverMovies = React.lazy(() => import("../components/HomePage/DiscoverMovies"));
const DiscoverTV = React.lazy(() => import("../components/HomePage/DiscoverTV"));
const PopularPeople = React.lazy(() => import("../components/HomePage/PopularPeople"));

const Home = () => {
    document.title = "Movie Home"
    return (

        <div>
            <Header />
            <Trending />
            <Suspense fallback={<Loading />}>
                <DiscoverMovies />
                <DiscoverTV />
                <PopularPeople />
            </Suspense>

            <Footer />
        </div>



    )
}

export default Home
