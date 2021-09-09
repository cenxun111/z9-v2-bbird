import {
  createPost,
  updateSuccess,
  postError,
  getUserPosts,
  updateStart,
  getSinglePost,
  deletePost,
  updatePost,
  allUserPost
} from "./postSlice";

import {
  postDataAPI,
  getDataAPI,
  deleteDataAPI,
  patchDataAPI,
} from "./fetchData";

export const createNewsPost = async (newPost, token, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await postDataAPI("createNewsPost", newPost, token);
    // console.log(res);
    dispatch(
      createPost({
        post: res.data,
      })
    ),
      dispatch(updateSuccess());
    dispatch(updateStart());
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const allPost = (token) => async (dispatch) => {
  try {
    const res = await getDataAPI("user_posts", token);
    // console.log(res);
    dispatch(
      getUserPosts({
        data: res.data,
      })
    );
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const allUserfa =({id},token) => async(dispatch) => {
  try {
    const res = await getDataAPI(`userpost/${id}`,token);
    dispatch(
      allUserPost({
        data:res.data,
      })
    );
  }catch (error) {
    dispatch(postError(error.message));
  }
}

export const singlePost = ({ id }, token) => async (dispatch) => {
    try {
      const res = await getDataAPI(`post/${id}`, token);
      dispatch(
        getSinglePost({
          data: res.data,
        })
      );
    } catch (error) {
      dispatch(postError(error.message));
    }
  };

export const dePost = (id, token) => async (dispatch) => {
  //   console.log(id, token);
  try {
    const res = await deleteDataAPI(`post/${id}`, token);

    dispatch(
      deletePost({
        data: res.data,
      })
    );
    // console.log(data);
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const upPost = async (content, id, token, dispatch) => {
  try {
    const res = await patchDataAPI(`post/${id}`, content, token);
    console.log(res);
    dispatch(
      updatePost({
        data: res.data,
      })
    );
  } catch (error) {
    dispatch(postError(error.message));
  }
};

// export const deletePost =({id})
// export const allPost =()=> async(dispatch) => {
//     try{
//         const res = await getDataAPI("allPost");
//         console.log(res)
//         dispatch(getPosts({
//             data:res.data
//         }));
//     }catch(error) {
//         dispatch(postError(error.message))
//     }
// };

// export const userPosts =({username})=> async(dispatch) => {
//     try{
//         const res = await getDataAPI(`user_posts/${username}`)
//         console.log(username)
//         console.log(res)
//         dispatch(getUserPosts({
//             data:res.data
//         }));
//     }catch(error) {
//         dispatch(postError(error.message))
//     }
// };
