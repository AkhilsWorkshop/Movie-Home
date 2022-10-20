import { v4 as uuidv4 } from 'uuid';

const LScrollCard = () => {
    return (
        <div key={uuidv4()}>
            <div className="flex flex-col h-auto w-24 rounded-md gap-3">

                <div className="h-36 w-24 rounded-md shadow-lg shadow-black bg-slate-700"></div>
                <div className="h-3 w-16 bg-gray-600 rounded-md animate-pulse"></div>
                <div className="h-4 bg-slate-400 rounded-md animate-pulse"></div>

            </div>
        </div>
    )
}

export default LScrollCard
