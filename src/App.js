import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import "./assets/styles.css";
import MovieDetails from "./Pages/MovieDetails";
import Error from "./Pages/Error";
import SearchResults from "./Pages/SearchResults";
import PersonDetails from "./Pages/PersonDetails";
import About from "./Pages/About";
import Movies from "./Pages/Movies";
import Disabled from "./Pages/Disabled";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {

    return (
        <div className='relative min-h-screen'>


            <Router>
                <Header />
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="search">

                        <Route path=":searchID" element={<SearchResults />} />
                        <Route path="person/:searchID" element={<PersonDetails />} />
                        {/* <Route path="person/:searchID" element={<Disabled />} /> */}
                        <Route path=":mediaType/:searchID" element={<MovieDetails />} />

                    </Route>
                    <Route path="movies" element={<Movies />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />


                </Routes>


                <Footer />
            </Router>

        </div>
    )
}

export default App;