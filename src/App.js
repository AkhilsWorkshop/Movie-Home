import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import "./styles.css";
import Testing from "./Pages/Testing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./Pages/Error";


const App = () => {

    return (
        <Router>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:searchID" element={<Search />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />

        </Router>
    )
}

export default App;