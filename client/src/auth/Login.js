import React,{ useState } from 'react'
import { Link } from "react-router-dom"
// import { loginSuccess } from '../redux-toolkit/authSlice';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authAction';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const [showpass,setShowpass] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(({email,password}))
        login({email,password},dispatch)
    };

return (
    <div className="relative" >
    <div  className="flex flex-col items-center justify-center h-96 mt-36 font-mono">
        <span className="text-blue-700 text-6xl">Login</span>
        <form className="flex flex-col justify-center mt-8"
        onSubmit={handleSubmit} >
            <label className="text-green-600 text-3xl justify-center flex mt-8">Email</label>
            <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"   type="email"
            // onChange={handleChangeInput} value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
            <div className="relative">
            <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"  type={showpass ?"text":"password"}
             onChange={(e) => setPassword(e.target.value)}
            // onChange={handleChangeInput} value={password}
            />
            <small className='absolute top-2 right-2 pt-3 cursor-pointer' onClick={() => setShowpass(!showpass)}>
                {showpass ? 'Hide':'Show'}
            </small>
            </div>
            <button className="p-2 mt-8 bg-green-800 rounded-md w-28    disabled:opacity-50" type="submit" >Login</button>
        </form>
        {/* <Notify /> */}

    </div>
    <div className="absolute top-1 right-2 pr-20">
    <button className="  bg-green-800 rounded-md w-28 p-2 text-xl text-blue-300"><Link to="/register">Register</Link></button>
    {/* {notify.loading && <div className=' text-3xl  text-blue-400'><LoopIcon/>Loading...</div>} */}
    </div>
    </div>
)
}

export default Login

