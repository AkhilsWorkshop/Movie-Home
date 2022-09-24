import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import "./styles.css";
import Detailed from "./Pages/Detailed";
import Error from "./Pages/Error";
import SearchResults from "./Pages/SearchResults";
import DetailedPerson from "./Pages/DetailedPerson";
import About from "./Pages/About";
// import React, { Suspense, lazy } from "react";
// const Detailed = lazy(() => import("./Pages/Detailed"));
// const Error = lazy(() => import("./Pages/Error"));
// const SearchResults = lazy(() => import("./Pages/SearchResults"));
// const DetailedPerson = lazy(() => import("./Pages/DetailedPerson"));
// const About = lazy(() => import("./Pages/About"));



const App = () => {

    return (
        <Router>



            <Routes>



                <Route path="/" element={<Home />} />

                <Route path="search">

                    <Route path=":searchID" element={<SearchResults />} />
                    <Route path="person/:searchID" element={<DetailedPerson />} />
                    <Route path=":mediaType/:searchID" element={<Detailed />} />

                </Route>
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error />} />


            </Routes>



        </Router>
    )
}

export default App;