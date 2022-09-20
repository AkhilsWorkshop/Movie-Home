import SearchBar from "../components/SearchBar"
import DiscoverMovies from "../DetailedPage/DiscoverMovies"
import DiscoverTv from "../DetailedPage/DiscoverTv"
import Trending from "../DetailedPage/Trending"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <SearchBar />
            <Trending />
            <DiscoverMovies />
            <DiscoverTv />

        </div>
    )
}

export default Home
