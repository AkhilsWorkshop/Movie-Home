
// Image from API
export const halfSizeImg = "https://image.tmdb.org/t/p/w500";
export const fullSizeImg = "https://image.tmdb.org/t/p/original";
export const personImg = "https://api.themoviedb.org/3/person/";

// Custom Image
export const imgNotAvailable = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

// Common URL
export const SEARCH_URL = "https://api.themoviedb.org/3/search/multi?api_key=";
export const TRENDING = "https://api.themoviedb.org/3/trending/all/week?api_key=";
export const RECOMMENDATIONS = "recommendations?api_key=";
export const baseURL = "https://api.themoviedb.org/3";

// Movie URL
export const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/";
export const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
export const DISCOVER = "https://api.themoviedb.org/3/discover/movie?api_key=";
export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
export const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=";

// TV URL
export const DISCOVER_TV = "https://api.themoviedb.org/3/discover/tv?api_key=";

// Person URL
export const POPULAR_PERSON = "https://api.themoviedb.org/3/person/popular?api_key="

// Youtube URL
export const youtubeURL = "https://www.youtube.com/watch?v="

// Nav Active CSS
export const navActive = " border-b-2 border-yellow-500 scale-105 text-white";

// Trending carousal data
export const trending =
{
    xxl: {
        breakpoint: {
            max: 3000,
            min: 1720
        },
        items: 1,

    },
    xl: {
        breakpoint: {
            max: 1719,
            min: 1385
        },
        items: 1,

    },
    lg: {
        breakpoint: {
            max: 1384,
            min: 1024
        },
        items: 1,

    },
    md: {
        breakpoint: {
            max: 1023,
            min: 768
        },
        items: 1,

    },
    sm: {
        breakpoint: {
            max: 767,
            min: 640
        },
        items: 1,

    },
    xs: {
        breakpoint: {
            max: 639,
            min: 350
        },
        items: 1,

    }
}