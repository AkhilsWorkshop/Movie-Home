import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "../Pages/Home";
import MovieDetails from "../Pages/MovieDetails";
import Error from "../Pages/Error";
import SearchResults from "../Pages/SearchResults";
import PersonDetails from "../Pages/PersonDetails";
import About from "../Pages/About";
import Movies from "../Pages/Movies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "../Routes/ProtectedRoute";

import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {

    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="search">
                        <Route path=":searchID" element={<SearchResults />} />
                        <Route path="person/:searchID" element={<PersonDetails />} />
                        <Route path=":mediaType/:searchID" element={<MovieDetails />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="dashboard">
                        <Route path="watchlist" element={<SearchResults />} />
                    </Route>
                    <Route path="myaccount" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoute
