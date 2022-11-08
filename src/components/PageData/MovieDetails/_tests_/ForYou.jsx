import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, RECOMMENDATIONS } from "../../../../config/config";
import Card from "../../../Common/Cards/Card"


const ForYou = ({ id, mediaType }) => {

    const [content, setContent] = useState([])

    const fetch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Card title="Now Playing (In Theatres)" first={`${baseURL}/${mediaType}/${id}/${RECOMMENDATIONS}`} second="" media_type={mediaType} />
        </>
    )
}

export default ForYou
