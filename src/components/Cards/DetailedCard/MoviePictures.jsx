import axios from 'axios';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

const MoviePictures = ({ mediaType, searchID }) => {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const fetchImages = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/718930/images?api_key=ee67127aee04e49495754bf98fb61031&language=en-US`)
        console.log(data)
    }

    useEffect(() => {
        fetchImages()
        console.log(mediaType, searchID)
    }, [])

    return (
        <div>
            <ImageGallery items={images} />
        </div>
    )
}

export default MoviePictures
