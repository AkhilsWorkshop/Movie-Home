import { Link } from "react-router-dom"


const Error = () => {

    return (
        <div>
            <div className="flex flex-col justify-center items-center text-white my-20 gap-3">
                <h1>Oops!</h1>
                <p>Not configured yet!</p>
                <p>
                    <Link to="/" className="border rounded-md p-2">Go to home</Link>
                </p>
            </div>
        </div>
    )
}

export default Error
