import Card from "../components/Cards/Card"
import CardLandscape from "../components/Cards/CardLandscape"
import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
import { DISCOVER, UPCOMING } from "../config/config"

const Movies = () => {
    return (
        <div>
            <Header />
            <CardLandscape first={UPCOMING} second="&region=IN&with_original_language=ta|ml|hi|te|kn&sort_by=vote_average.desc" title="Upcoming Indian Movies" media_type="movie" />
            <Card first={DISCOVER} second="&with_original_language=ta|ml|te|kn" title="Top South Indian Movies" media_type="movie" />
            <Footer />
        </div>
    )
}

export default Movies
