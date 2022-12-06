import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import "./assets/styles.css";
import MovieDetails from "./Pages/MovieDetails";
import Error from "./Pages/Error";
import SearchResults from "./Pages/SearchResults";
import PersonDetails from "./Pages/PersonDetails";
import About from "./Pages/About";
import Movies from "./Pages/Movies";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

const App = () => {

    return (
        <div className='relative min-h-screen'>
            <AuthContextProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="search">
                            <Route path=":searchID" element={<SearchResults />} />
                            <Route path="person/:searchID" element={<PersonDetails />} />
                            <Route path=":mediaType/:searchID" element={<MovieDetails />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="myaccount" element={<Dashboard />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </Router>
            </AuthContextProvider>
        </div>
    )
}

export default App;