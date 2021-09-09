import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNewsPost } from "../../redux/postAction";
// import { createNewsPost } from "../redux/actions/postAction"
import { Link, useHistory } from "react-router-dom";
// import { createNewsPost } from "../redux-toolkit/postAction";

const Uploadpost = () => {
  const { login } = useSelector((state) => state);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const username = user.username;
  const history = useHistory();
  // console.log(username)

  useEffect(() => {
    setUser(login.userInfo);
  });
  // const { auth } = useSelector(state => state)

  // const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewsPost(
      { title, content, username },
      login.userData.token,
      dispatch
    );
    return history.push("/");
    // dispatch(createNewsPost({title,content,username}))
  };

  return (
    <div className="w-6/12 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex h-screen items-center  justify-center ">
          <div className="grid bg-white-600 rounded-lg shadow-xl w-10/12">
            <h1 className="flex justify-center py-4 text-3xl text-gray-600 font-bold">
              Upload YOUR's
            </h1>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <input
                className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-50 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <textarea
                className=" py-4 px-3 rounded-lg border-2 bg-gray-50 h-36 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="you minds"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                Upload Photo
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col border-4 border-dashed border-purple-300 w-full h-32 hover:bg-gray-300 hover:border-purple-300 group">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                      Select a photo
                    </p>
                  </div>
                  <input type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center my-4 ">
              <button className="bg-gray-300 p-2 m-2 rounded-md" type="submit">
                Publish
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Uploadpost;
