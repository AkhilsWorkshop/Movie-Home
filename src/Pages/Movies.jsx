import NowPlaying from "../components/HomePage/NowPlaying"
import Header from "../components/Main/Header"
import Indian from "../PageData/Movies/Indian"

const Movies = () => {
    return (
        <div>
            <Header />
            <NowPlaying />
            <Indian />
        </div>
    )
}

export default Movies
