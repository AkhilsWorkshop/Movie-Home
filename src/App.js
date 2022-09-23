import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import "./styles.css";
import Detailed from "./Pages/Detailed";
import Error from "./Pages/Error";
import SearchResults from "./Pages/SearchResults";



const App = () => {

    return (
        <Router>



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="search">
                    <Route path=":searchID" element={<SearchResults />} />
                    <Route path=":mediaType/:searchID" element={<Detailed />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>



        </Router>
    )
}

export default App;