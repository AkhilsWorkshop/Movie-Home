import Card from "../components/Cards/Card"
import CardLandscape from "../components/Cards/CardLandscape"
import Footer from "../components/Main/Footer"
import Header from "../components/Main/Header"
import { DISCOVER, UPCOMING } from "../config/config"

const Movies = () => {
    return (
        <div>
            <Header />
            <Card title="Action Thriller" first={DISCOVER} second="&with_genres=28,53" media_type="movie" />
            <Card title="Top International Movies" first={DISCOVER} second="&with_original_language=ta|ml|te|kn" media_type="movie" />
            <Card title="Horror" first={DISCOVER} second="&with_genres=27" media_type="movie" />
            <Card title="Crime Thriller" first={DISCOVER} second="&with_genres=80,53&sort_by=vote_count.desc" media_type="movie" />
            <CardLandscape title="Upcoming Indian Movies" first={UPCOMING} second="&region=IN&with_original_language=ta|ml|hi|te|kn&sort_by=vote_average.desc" media_type="movie" />

            <Footer />
        </div>
    )
}

export default Movies
