import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import "./styles.css";
import Testing from "./Pages/Testing";
import DetailedCard from "./components/DetailedCard";
import Error from "./Pages/Error";
import SearchResults from "./Pages/SearchResults";



const App = () => {

    return (
        <Router>



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="search">
                    <Route path=":searchID" element={<SearchResults />} />
                    <Route path=":mediaType/:searchID" element={<DetailedCard />} />
                </Route>
                <Route path="/testing" element={<Testing />} />
                <Route path="*" element={<Error />} />
            </Routes>



        </Router>
    )
}

export default App;