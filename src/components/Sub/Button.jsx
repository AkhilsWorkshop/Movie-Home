
import { useNavigate } from "react-router-dom";


const Button = ({ children, media_type, id }) => {

    const navigate = useNavigate();

    // Function to route ID as search URL
    const getMovieID = () => {
        navigate("/Search/" + media_type + "/" + id)
        console.log("clicked" + id)
    }

    return (
        <div>
            <button onClick={getMovieID}>{children}</button>
        </div>
    )
}

export default Button
