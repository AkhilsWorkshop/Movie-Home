import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import "./styles.css";
import Testing from "./Pages/Testing";
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";
import DetailedCard from "./components/DetailedCard";
import Error from "./Pages/Error";
import SearchResults from "./components/SearchResults";


const App = () => {

    return (
        <Router>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="search">
                    <Route path=":searchID" element={<SearchResults />} />
                    <Route path=":mediaType/:searchID" element={<DetailedCard />} />
                </Route>
                <Route path="/testing" element={<Testing />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />

        </Router>
    )
}

export default App;