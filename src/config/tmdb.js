import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
    },
};

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept: "application/json"
    },
    https: config,
    params: {
        api_key: `${process.env.REACT_APP_API_KEY}`
    }
})