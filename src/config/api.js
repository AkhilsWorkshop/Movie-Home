import axios from "axios";

export const getMovieDetails1 = async (mediaType, searchID) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${searchID}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images`);
        const receivedData = await response.json()
        return receivedData
    } catch (error) {
        console.log(error)
    }
}

// Watch Providers API
export const getWatchProviders = async (mediaType, searchID) => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${searchID}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
    return data
    // fetch(`https://api.themoviedb.org/3/${mediaType}/${searchID}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         return data
    //     })

}