
import { useNavigate } from "react-router-dom";


const Results = ({ children, media_type, id }) => {

    const navigate = useNavigate();

    // Function to route ID as search URL
    const getMovieID = () => {
        navigate("/Search/" + media_type + "/" + id)
    }

    return (
        <div>
            <button onClick={getMovieID}>{children}</button>
        </div>
    )
}

export default Results
