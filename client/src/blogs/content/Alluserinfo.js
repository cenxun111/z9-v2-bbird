import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { allUserfa } from "../../redux/postAction";
import { singleUser } from "../../redux/userAction";


const Alluserinfo = () => {
    const { login } = useSelector((state) => state);
    const { id } = useParams();
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [userInfo, setUserinfo] = useState([]);
    useEffect(() => {
        setUserinfo(user.singuser);
      });

    useEffect(() => {
        dispatch(singleUser({ id }, login.userData.token));

      }, [dispatch, login.userData.token]);

      useEffect(() => {
        dispatch(allUserfa({ id }, login.userData.token));
      }, [dispatch, login.userData.token]);
    
    // console.log(login.userData.token)
    return (
        <div>

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
            //   onClick={() => setOnEdit(!onEdit)}
            >
              follow
            </button>
            {userInfo._id === login.userInfo._id &&
            <button
              className=" bg-green-300  w-2/3 py-1 mt-2 rounded-md "
            //   onClick={() => setOnEdit(!onEdit)}
            >
              Edit Profile
            </button>}
          </div>
        </div>
        </div>
    )
}

export default Alluserinfo
