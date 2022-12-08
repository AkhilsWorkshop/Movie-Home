import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImg from "../assets/login/bg.jpg"
import { db } from '../config/firebase'
import { UserAuth } from '../context/AuthContext'
import Loading from '../layouts/Loading'

const Register = () => {

    const { signUpUser } = UserAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUpUser(email, password)
            setDoc(doc(db, "users", email), {
                savedMovies: [],
                savedShows: [],
                watchedMovies: [],
                watchedShows: [],
                userData: []
            })
            navigate("/myaccount")
        } catch (e) {
            switch (e.code) {
                case "auth/email-already-in-use":
                    setError("Email already in use! Sign in instead.");
                    break
                case "auth/weak-password":
                    setError("Password is weak! Please use a strong password");
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

                    <div className="h-[calc(100vh_-_7.5rem)] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }} >

                        <div className="flex items-center justify-center h-full w-full bg-black/70 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-[2px] backdrop-brightness-[50%]">

                            <div className="flex flex-col gap-7 w-full lg:w-1/4 lg:bg-[#121216] lg:border lg:border-slate-800 shadow-md rounded-lg p-10 text-white">
                                <p className="font-bold text-2xl">Sign Up</p>

                                <form className="flex flex-col gap-7 text-white" onSubmit={handleSubmit}>
                                    <input type="email" id="email" className="bg-slate-700 rounded-md block w-full p-2.5 py-3 focus:outline-none" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value); setError("") }} required />
                                    <input type="password" id="password" className="bg-slate-700 rounded-md block w-full p-2.5 py-3 focus:outline-none" placeholder="Password" onChange={(e) => { setPassword(e.target.value); setError("") }} required />
                                    <p className={`duration-300 transition-all text-center text-sm rounded-md bg-red-700/70 ${error.length > 0 ? "h-auto py-1 " : "h-0"}`}>{error}</p>
                                    <button type="submit" className="text-black font-bold bg-[#EAB308]/80 hover:bg-[#EAB308] rounded-md px-5 py-2.5 text-center duration-300">Register</button>
                                </form>
                                <div className="flex gap-2 justify-center items-center">
                                    <p className="font-bold text-md text-gray-500">Already have an account?</p>
                                    <Link to="/login" className="text-sm underline">Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Register
