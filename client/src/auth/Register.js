import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { register } from '../redux/authAction'
// import { register } from '../redux/actions/authAction'
import { useDispatch } from 'react-redux'
const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        register({username,email,password},dispatch)
    //     dispatch(register({username,email,password}))
        };


    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center h-96 mt-20 font-mono">
                <span className="text-blue-700 text-6xl">Register</span>
                <form className="flex flex-col justify-center mt-8" onSubmit={handleSubmit}>
                    <label className="text-green-600 text-3xl justify-center flex mt-8">username</label>
                    <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2" type="text" placeholder="username..."
                        onChange={(e) => setUsername(e.target.value)} />
                    <label className="text-green-600 text-3xl justify-center flex mt-8">Email</label>
                    <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2" type="text" placeholder="email..."
                        onChange={(e) => setEmail(e.target.value)} />

                    <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
                    <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2" type="password" placeholder="password.."
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className="p-2 mt-8 bg-gray-200 rounded-md w-28 " type="submit">Register</button>
                </form>
                


            </div>
            <button className="  bg-green-800 rounded-md w-28 absolute top-0 font-mono right-2 p-2 text-xl text-blue-300"><Link to="/login">Login</Link></button>
        </div>
    )
}
export default Register

