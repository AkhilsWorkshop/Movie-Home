import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
import DiscoverMovies from "../DetailedPage/DiscoverMovies"
import DiscoverTv from "../DetailedPage/DiscoverTv"
import Trending from "../DetailedPage/Trending"

const Home = () => {
    return (

        <div>
            <Header />
            <Trending />
            <DiscoverMovies />
            <DiscoverTv />
            <Footer />
        </div>



    )
}

export default Home
