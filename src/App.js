import { HashRouter as Router } from "react-router-dom"
import "./assets/styles.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import AnimatedRoute from "./Routes/AnimatedRoute";

const App = () => {
    return (
        <div className='relative min-h-screen'>
            <AuthContextProvider>
                <Router>
                    <Header />
                    <AnimatedRoute />
                    <Footer />
                </Router>
            </AuthContextProvider>
        </div>
    )
}

export default App;