import React, { useState } from "react";
import "./sidenav.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
// import { GLOBALTYPES } from "../../redux/action/globalTypes";
import { useDispatch,useSelector } from 'react-redux';
import { openSide } from "../../redux/themeAction";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from "react-router-dom";

const Sidenav = () => {
    const  dispatch = useDispatch()
    
  const [inactive, setInactive] = useState(false);
  openSide(inactive,dispatch)

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="relative">
        <div className="navgate">
          <h1> Navgate</h1>
        </div>
        <button
          className="absolute top-0 right-1 hover:text-gray-300 rounded-2xl"
          onClick={() => setInactive(!inactive) }
        >
          <MenuOpenIcon />
        </button>
      </div>
      <div className="flex-col text-2xl text-white ">
        {!inactive ? (
          <div className=" w-3/4 mx-auto">
            <button className="bg-blue-500 py-2 px-4 mt-3    rounded-md   "><Link to="/upload">Upload</Link></button>
            {/* <button className="bg-gray-500 p-2 mt-3 ">HOMEPAGE</button>

            <button className="bg-gray-500 p-2 mt-3 ">HOMEPAGE</button> */}
            <button className="bg-blue-500 py-2 px-4 mt-3 rounded-md   "><Link to ="/alluser">ALLUSER</Link></button>
            <button className="bg-blue-500 py-2 px-4 mt-3 rounded-md   ">PosTIng</button>
          </div>
        ) : (
          <div className="w-4/5 mx-auto">
            <div>
            <button><Link to="/upload"><CloudUploadIcon/></Link></button>
            <h6 className="text-xs text-center">Upload</h6>
            </div>
            <button><CloudUploadIcon/></button>
            <button><CloudUploadIcon/></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidenav;
