import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import "./assets/styles.css";
import MovieDetails from "./Pages/MovieDetails";
import Error from "./Pages/Error";
import SearchResults from "./Pages/SearchResults";
import PersonDetails from "./Pages/PersonDetails";
import About from "./Pages/About";
import Movies from "./Pages/Movies";

const App = () => {

    return (
        <Router>



            <Routes>



                <Route path="/" element={<Home />} />

                <Route path="search">

                    <Route path=":searchID" element={<SearchResults />} />
                    <Route path="person/:searchID" element={<PersonDetails />} />
                    <Route path=":mediaType/:searchID" element={<MovieDetails />} />

                </Route>
                <Route path="movies" element={<Movies />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error />} />


            </Routes>



        </Router>
    )
}

export default App;