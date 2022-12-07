import { fullSizeImg } from "../../../config/config"


const ImageBg = ({ data }) => {
    return (
        <div className="relative w-full h-[0vh] sm:h-[0vh]">
            <img src={fullSizeImg + data?.backdrop_path} alt="Error Occured" />
            <div className="absolute z-10 bg-gradient-to-b via-gray-900 from-transparent to-gray-900 backdrop-brightness-50" />
        </div>


    )
}

export default ImageBg
