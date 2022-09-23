import { Link } from "react-router-dom"


const Error = () => {

    return (
        <div>
            <div className="flex flex-col h-screen justify-center items-center text-white gap-10">
                <h1 className="text-4xl">404</h1>
                <p>Page not found</p>
                <p>
                    <Link to="/" className="border rounded-md p-2">Go to home</Link>
                </p>
            </div>
        </div>
    )
}

export default Error
