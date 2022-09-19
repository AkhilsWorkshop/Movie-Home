import Body from "./Body";
import BodyAlt from "./BodyAlt";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";


const App = () => {

    return (
        <div className="relative min-h-screen">
            <Header />
            {/* <Body /> */}
            <BodyAlt />
            <Footer />
        </div>
    )
}

export default App;