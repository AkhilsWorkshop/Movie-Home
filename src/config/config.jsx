
// Image from API
export const halfSizeImg = "https://image.tmdb.org/t/p/w500";
export const fullSizeImg = "https://image.tmdb.org/t/p/original";
export const personImg = "https://api.themoviedb.org/3/person/";

// Custom Image
export const imgNotAvailable = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

// API
export const SEARCH_URL = "https://api.themoviedb.org/3/search/multi?api_key=";
export const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/";

export const TRENDING = "https://api.themoviedb.org/3/trending/all/week?api_key=";

// Responsive Breakpoint for react-multi-carousel
export const responsive =
{
    xxl: {
        breakpoint: {
            max: 3000,
            min: 1720
        },
        items: 12,
        partialVisibilityGutter: 40
    },
    xl: {
        breakpoint: {
            max: 1719,
            min: 1385
        },
        items: 9,
        partialVisibilityGutter: 40
    },
    lg: {
        breakpoint: {
            max: 1384,
            min: 1024
        },
        items: 7,
        partialVisibilityGutter: 30
    },
    md: {
        breakpoint: {
            max: 1023,
            min: 768
        },
        items: 6,
        partialVisibilityGutter: 30
    },
    sm: {
        breakpoint: {
            max: 767,
            min: 640
        },
        items: 4,
        partialVisibilityGutter: 30
    },
    xs: {
        breakpoint: {
            max: 639,
            min: 350
        },
        items: 3,
        partialVisibilityGutter: 30
    }
}

