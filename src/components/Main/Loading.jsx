import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <AiOutlineLoading3Quarters size={30} className="animate-spin text-white" />
            </div>
        </div>
    )
}

export default Loading
