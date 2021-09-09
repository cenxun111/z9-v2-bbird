import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useHistory} from "react-router-dom";
import { editUser } from "../../redux/profileAction";
const Profile = () => {
  const { userInfo } = useSelector((state) => state.login);
  // const [userData,setUserData] = useState([])
  const history = useHistory()
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch()
  const [onEdit, setOnEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  // useEffect(() => {
  //     setUserData(auth.user);
  //   },[setUserData]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(({email,password}))
    dispatch(editUser({username,email,about,website},(login.userData.token)));
    return history.push('/')
    
    
};

  return (
    <div>
      {!onEdit ? (
        <div className="flex-col w-3/12 mt-14">
          <div>
            <img
              src={userInfo.avatar}
              className="h-40 w-40 mt-1 rounded-full m-auto "
            />
            {/* <button>change avatar</button> */}
          </div>
          <div className="text-center">
            <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
              USERNAME--{userInfo.username}
            </h1>
            <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
              EMAIL--{userInfo.email}
            </h1>
            <h1 className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer ">
              ABOUT--{userInfo.about}
            </h1>

            <a className="pl-3 pt-2 text-black hover:text-green-700 cursor-pointer">
              <Link to="/mysite">WEBSITE--{userInfo.website}</Link>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-green-300  w-2/3 py-1 mt-2 rounded-md "
              onClick={() => setOnEdit(!onEdit)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-col w-3/12 mt-14">
          <div>
            <img
              src={userInfo.avatar}
              className="h-40 w-40 mt-1 rounded-full m-auto "
            />
          </div>
          <div className="">
            <form className="" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center  justify-center">
                <h1 className="text-green-300 text-xl  mt-6">Username</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2"
                  type="text"
                  placeholder="username..."
                  onChange={(e) => setUsername(e.target.value)}
                />
                <h1 className="text-green-300 text-xl  mt-6">Email</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2"
                  type="text"
                  placeholder="Email..."
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h1 className="text-green-300 text-xl  mt-6">About me</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2"
                  type="text"
                  placeholder="About me..."
                  onChange={(e) => setAbout(e.target.value)}
                />

                <h1 className="text-green-300 text-xl  mt-6">Your's website</h1>
                <input
                  className="w-80 bg-gray-200 rounded-md py-1 pl-2 mt-2"
                  type="text"
                  placeholder="Your's website..."
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <button className="bg-green-300 w-4/12 ml-14 py-1 mt-2 rounded-md"
                type="submit"
                
                >
                Save
              </button>
              <button
                className="bg-green-300 w-4/12 ml-14 py-1 mt-2 rounded-md"
              
                onClick={() => setOnEdit(!onEdit)}
                
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
