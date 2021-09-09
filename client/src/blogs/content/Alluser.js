import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { alluser } from "../../redux/userAction";
import { Link, useHistory } from "react-router-dom";
const Alluser = () => {
  const { login } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (login.userData.token) dispatch(alluser(login.userData.token));
  }, [dispatch, login.userData.token]);

  return (
    <div>
      <div className=" pt-10 grid grid-cols-8 gap-3 mx-20">
        {user.allusers.map((users) => (
          <div key={users._id} className="mx-auto text-center">
            <img src={users.avatar} className=" h-10 w-10" />
            <h1><Link to={`/user_xinxi/${users._id}`}>{users.username}</Link></h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alluser;
