import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allPost } from "../../redux/postAction";
import pug from "../../images/pug.png";
import { Link, useHistory } from "react-router-dom";
import Dropde from "./Dropde";

const MainContent = () => {
  const { login } = useSelector((state) => state);
  const { post } = useSelector((state) => state);
  // const [userPost,setUserPost] = useState([])
  const dispatch = useDispatch();

  // useEffect(()=> {
  //     setUserPost (post.userPosts)
  // })
  //  dispatch((login.userData.token));
  useEffect(() => {
    if (login.userData.token) dispatch(allPost(login.userData.token));
  }, [dispatch, login.userData.token]);
  console.log(post.userPosts);
  return (
    <div className="grid grid-cols-5 gap-3 mx-auto">
      {post.userPosts.map((posts) => (
        <div key={posts._id}>
          <div className="bg-green-500 h-4/6 w-full mt-4 mx-auto rounded-md text-center relative">
          <Dropde key={posts._id} postInfo={posts}/>

          {/* <div className="absolute top-0 right-1">
              <Dropdown className="mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  <div className=" text-3xl  rounded-full hover:text-blue-500 hover:bg-gray-50  hover:bg-opacity-25">
                    <ExpandMoreRoundedIcon fontSize="large" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className=" text-md  text-left text-green-500  bg-gray-50 rounded-2xl p-2">
                  <div>
                    <Dropdown.Item>save</Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>update</Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item >
                      delete
                    </Dropdown.Item>
                    {/* onClick={handleDeleteProduct} */}
                  {/* </div>
                </Dropdown.Menu>
              </Dropdown>
            </div> */} 
            <img
              src={pug}
              className="h-10 w-10 rounded-md absolute top-1 left-3"
            />
            <h1 className="hover:text-gray-300 text-gray-700 pt-3 pl-16 absolute">
              <Link to={`/user_info/${posts.username}`}>{posts.username}</Link>
            </h1>
            <h1 className="pt-12">
              <Link to={`/user_post/${posts._id}`}>{posts.content}</Link>
            </h1>
            <img src={pug} className="rounded-md pt-3" />
          </div>

        </div>
      ))}

    </div>
  );
};

export default MainContent;
