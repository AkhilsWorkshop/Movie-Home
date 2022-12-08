import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import bgImg from "../assets/login/bg.jpg"
import { UserAuth } from '../context/AuthContext';
import Loading from '../layouts/Loading';

const Login = () => {

    const { signInUser, getUserData } = UserAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInUser(email, password)
            await getUserData(email)
            navigate(-1)
        } catch (e) {
            switch (e.code) {
                case "auth/user-not-found":
                    setError("No account found");
                    break
                case "auth/wrong-password":
                    setError("Sorry, your password was incorrect.");
                    break
                case "auth/too-many-requests":
                    setError("Too many attempts! Please try again after some time.");
                    break
                default:
                    setError("Please try again!");
                    break
            }
        }
    }

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 500)
    }, [])

    return (

        <>
            {
                loading ?
                    <Loading />

                    :

                    <div className="h-[calc(100vh_-_7.5rem)] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>

                        <div className="flex items-center justify-center h-full w-full bg-black/70 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-[2px] backdrop-brightness-[50%]">

                            <div className="flex flex-col gap-7 w-full lg:w-1/4 lg:bg-[#121216] lg:border lg:border-slate-800 shadow-md rounded-lg p-10 text-white">
                                <p className="font-bold text-2xl">Sign in</p>

                                <form className="flex flex-col gap-7 text-white" onSubmit={handleSubmit}>
                                    <input type="email" id="email" className="bg-slate-700 rounded-md block w-full p-2.5 py-3 focus:outline-none" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value); setError("") }} required />

                                    <input type="password" id="password" className="bg-slate-700 rounded-md block w-full p-2.5 py-3 focus:outline-none" placeholder="Password" onChange={(e) => { setPassword(e.target.value); setError("") }} required />
                                    <p className={`duration-300 transition-all text-center text-sm rounded-md bg-red-700/70 ${error.length > 0 ? "h-auto py-1 " : "h-0"}`}>{error}</p>
                                    <button type="submit" className="text-black font-bold bg-[#EAB308]/80 hover:bg-[#EAB308] rounded-md px-5 py-2.5 text-center duration-300">Login</button>
                                </form>
                                <div className="flex gap-2 justify-center items-center">
                                    <Link to="/forgot-password" className="text-sm underline">Forgot your password?</Link>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <p className="font-bold text-lg text-gray-500">Are you new?</p>
                                    <Link to="/register" className="text-sm underline">Create an Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Login
