import { AiOutlineLoading3Quarters } from "react-icons/ai"
import load from "../../assets/load.png"

const Loading = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
                {/* <AiOutlineLoading3Quarters size={30} className="animate-spin text-white" /> */}
                <img src={load} alt="Loading" className="animate-ping h-10" />
                <h1 className="text-white font-bold animate-ping">Loading</h1>
            </div>
        </div>
    )
}

export default Loading
