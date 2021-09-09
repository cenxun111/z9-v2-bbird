import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authAction";
import Dropdown from "react-bootstrap/Dropdown";
import infopic from "../../images/pug.png";
import { useDispatch, useSelector } from "react-redux";
const Drop = () => {
  const { userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      {/* < className="h-10 w-10 rounded-full " /> */}
      <div className="absolute top-0 right-1 pt-3 pr-6 z-10 ">
        <Dropdown className="mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            <img src={infopic} className="h-10 w-10 rounded-full " />
          </Dropdown.Toggle>

          <Dropdown.Menu className=" text-md  text-center text-2xl text-green-500  bg-gray-50 rounded-xl p-2 w-28 mt-2">
            <div>
              <Dropdown.Item className="bg-gray-200 hover:text-green-700 hover:bg-yellow-500 px-2 py-1 rounded-xl">
                <Link to={`/user_info/${userInfo.username}`}>
                  {userInfo.username}
                </Link>
              </Dropdown.Item>
            </div>
            <div>
              <Dropdown.Item className="bg-gray-200  hover:text-green-700 hover:bg-yellow-500 px-2 py-1 rounded-xl">
                <Link to="/follow">follow</Link>
              </Dropdown.Item>
            </div>
            <div>
              <Dropdown.Item className="bg-gray-200   hover:text-green-700 hover:bg-yellow-500 px-2 py-1 rounded-xl">
                <Link to="/upload">upload</Link>
              </Dropdown.Item>
            </div>
            <div>
              <Dropdown.Item
                className="bg-gray-200   hover:text-green-700 hover:bg-yellow-500 px-2 py-1 rounded-xl"
                onClick={() => dispatch(logout())}
              >
                logout
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Drop;
