import ReactPlayer from "react-player";
import { Button } from "react-scroll";
import { youtubeURL } from "../../../config/config";

const VideoPanel = ({ trailerLink, content }) => {
    return (
        <>
            <div id="video" className="absolute aspect-video w-full top-[-2rem] z-0">
                <ReactPlayer url={youtubeURL + trailerLink?.key} playing={true} height="100%" width="100%" />
            </div>
            <div className="flex flex-col justify-center pt-20 h-[30vh] sm:h-[80vh] backdrop-brightness-[100%] bg-gradient-to-b from-transparent to-[#18181b] text-white">
                <div className="flex flex-col gap-5 px-16 sm:px-[10rem]">
                    <h1 className="text-2xl sm:text-[3rem] line font-bold text-blue-100 leading-tight">{content[0]?.title || content[0]?.name}</h1>
                    <p className="hidden sm:block text-xl truncate">{content[0]?.overview}</p>
                    <div className="flex gap-2 flex-wrap">
                        {/* <button onClick={() => { setIsOpen(true); getTrailer(content[0]?.media_type, content[0]?.id) }} className="p-2 px-3 font-semibold rounded-md w-fit bg-yellow-500 shadow-md border h-12 duration-300 text-black hover:bg-yellow-600 border-yellow-500/70 flex items-center"><BsFillPlayFill size={25} /> Watch Trailer</button> */}
                        <Button media_type={content[0]?.media_type} id={content[0]?.id}>
                            <input type="submit" value="More Info" className="p-2 px-3 font-semibold rounded-md bg-black/60 shadow-md border duration-200 h-12 w-28 hover:border-2 hover:cursor-pointer text-yellow-500 hover:border-yellow-600 border-yellow-500/70" />
                        </Button>
                    </div>


                </div>


            </div>
        </>
    )
}

export default VideoPanel
