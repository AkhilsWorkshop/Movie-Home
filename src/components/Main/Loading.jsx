import { AiOutlineLoading3Quarters } from "react-icons/ai"
import load from "../../assets/load.png"

const Loading = () => {
    return (
        <div>
            <div className="relative flex flex-col gap-3 justify-center items-center min-h-screen">
                <img src={load} alt="Loading" className="absolute h-10" />
                <AiOutlineLoading3Quarters size={70} className="absolute animate-spin text-yellow-500" />

                <h1 className="text-white font-bold mt-32">Loading</h1>
            </div>
        </div>
    )
}

export default Loading
