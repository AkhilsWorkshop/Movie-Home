import { AiTwotoneStar } from "react-icons/ai"

const LPersonAbout = () => {
    return (
        <>

            <div className="hidden sm:flex flex-col items-start sm:items-end gap-5">

                <div className="flex items-center gap-1 flex-wrap">
                    <AiTwotoneStar size={30} className="text-yellow-400" />
                    <div className="h-6 w-32 bg-slate-400 rounded-md animate-pulse"></div>
                </div>

                <div className="flex flex-col gap-2 items-start sm:items-end flex-wrap">

                    <div className="h-4 w-44 bg-gray-600 rounded-md animate-pulse"></div>

                    <div className="h-4 w-72 bg-slate-400 rounded-md animate-pulse"></div>

                    <div className="h-4 w-32 bg-gray-600 rounded-md animate-pulse"></div>

                </div>

            </div>

            <div className="flex sm:hidden flex-col items-start sm:items-end gap-5">

                <div className="flex items-center gap-1 flex-wrap">
                    <AiTwotoneStar size={30} className="text-yellow-400" />
                    <div className="h-4 w-24 bg-slate-400 rounded-md animate-pulse"></div>
                </div>

                <div className="flex flex-col gap-2 items-start sm:items-end flex-wrap">

                    <div className="h-4 w-28 bg-gray-600 rounded-md animate-pulse"></div>

                    <div className="h-4 w-32 bg-slate-400 rounded-md animate-pulse"></div>

                    <div className="h-4 w-28 bg-gray-600 rounded-md animate-pulse"></div>

                    <div className="h-4 w-16 bg-gray-600 rounded-md animate-pulse"></div>

                </div>

            </div>
        </>
    )
}

export default LPersonAbout