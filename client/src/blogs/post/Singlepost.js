import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import pug from "../../images/pug.png";
import { singlePost } from "../../redux/postAction";
import { dePost } from "../../redux/postAction";
import Editpost from "./Editpost";

const Singlepost = () => {

  const { login } = useSelector((state) => state);
  const { post } = useSelector((state) => state);
  const [userpost, setUserpost] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  // console.log(post.singPosts);
  useEffect(() => {
    setUserpost(post.singPosts);
  });
  useEffect(() => {
    dispatch(singlePost({ id }, login.userData.token));
  }, [dispatch, login.userData.token]);

  const handleDeletePost = () => {
    dispatch(dePost(userpost._id, login.userData.token));
    return history.push("/");
  };
  

  // console.log(userpost._id);


  return (
    // <div className="grid grid-cols-5 gap-3 mx-auto">
    <div>
   
      <div className="bg-green-500 h-4/6 w-3/6 mt-4 mx-auto rounded-md text-center relative pt-10">
        <img
          src={pug}
          className="h-10 w-10 rounded-md absolute top-1 left-3 "
        />
        <h1 className="absolute top-0 left-3 hover:text-gray-300 text-gray-700 pt-3 pl-16">
          {userpost.username}
        </h1>
        {/* <h1 className="absolute top-0 right-3 hover:text-gray-300 text-gray-700 pt-3 pl-16">
          {userpost.createdAt}
        </h1> */}
        <h1 className="pt-3 w-3/5 text-justify  mx-auto">{userpost.content}</h1>
        <img src={pug} className="rounded-md pt-3 mx-auto" />
      </div>
      <div className="flex items-center justify-center my-4 ">
      {!onEdit ? (
        <button className="bg-gray-300 p-2 m-2 w-20 rounded-md" onClick={() => setOnEdit(!onEdit)}>
          EDIT</button> ) :(
          <button className="bg-gray-300 p-2 m-2 w-20 rounded-md" onClick={() => setOnEdit(!onEdit)}>
          SAVE</button>)}
        <button
          className="bg-gray-300 p-2 m-2 w-20 rounded-md"
          onClick={handleDeletePost}
        >
          delete
        </button>
      </div>
   
      {onEdit && 
      <Editpost postdata ={userpost}/> 
      }
     
    </div>
  );
};

export default Singlepost;
