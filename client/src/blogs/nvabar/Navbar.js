import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";

import Drop from './Drop'


const Navbar = () => {
  const {userData }= useSelector(state=>state.login)

//   const  dispatch = useDispatch()

//   const [search,setSearch] = useState('')
//   const [users,setUsers] = useState([])
// //   const [info,setInfo] = useState([])
// //   console.log(auth.info)

// // useEffect(()=>{
// //   setInfo(auth.user)
// // })


//   useEffect(() => {
//     if(search && auth.token) {
//       getDataAPI(`search?username=${search}`,auth.token)
      
//       .then(res => setUsers(res.data.users))
//       .catch(err => {
//         dispatch({type:GLOBALTYPES.ALERT,payload:{error:err.response.data.msg}})
//       })
//     }
//   },[search,auth.token])

  return (
    <div>
      <div className="flex justify-between bg-blue-200 pt-3 pb-3  px-20 rounded-md text-white">
        <h1 className="text-2xl font-semibold ">
          <Link to="/">homepage</Link>
        </h1>
       
    <div className="relative">
        <div className="relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="text"
            name="search"
            // value={search}
            placeholder="Search"
            // onChange = { e =>setSearch(e.target.value.toLowerCase().replace(/ /g,''))}
          />
        
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
            尋
          </button>
          </div>
          {/* <div className='absolute'>
            {
              users.map(user=>(
                <Link key = {user._id} to ={`/selfprofile/${user._id}`}>
                  <UserInfo user={user}/>
                  
                </Link>
              ))
            }
          </div> */}
        </div>
     
        {!userData.token && (
          <div className="flex">
            <h1 className="px-4 pt-2">
              <Link to="/login">login</Link>
            </h1>
            <h1 className="pr-4 pt-2">
              <Link to="/register">register</Link>
            </h1>
         
          </div>
            
        )}
          <Drop />
           
         
      </div>
    </div>
  );
};

export default Navbar;
