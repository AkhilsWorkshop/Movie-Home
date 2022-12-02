
import { useNavigate } from "react-router-dom";


const Button = ({ children, media_type, id }) => {

    const navigate = useNavigate();

    // Function to route ID as search URL
    const getMovieID = () => {
        navigate("/Search/" + media_type + "/" + id)
        window.scroll(0, 0)

        // Temporary fix for Component not reloading
        window.location.reload(false);
    }

    return (
        <>
            <button onClick={getMovieID}>{children}</button>
        </>
    )
}

export default Button
