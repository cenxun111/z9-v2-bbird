import { createSlice } from '@reduxjs/toolkit'

const initialState={
    singPosts:[],
    spost:[],
    userPosts:[],
    allPost:[]
};

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        createPost:(state,action) => {
            state.spost = action.payload;
        },
        updateSuccess:(state) => {
            state.updated = true;
        },
        updateStart:(state) => {
            state.updated = false;
        },
        // getPosts:(state,action) =>{
        //     state.allposts = action.payload.data;
        // },
        getUserPosts:(state,action) =>{
            state.userPosts = action.payload.data;
        },
        getSinglePost:(state,action) => {
            state.singPosts = action.payload.data;
        },
        allUserPost:(state,action) =>{
            state.allPost = action.payload.data;
        },
        postError:(state,action) =>{
            state.error = action.payload;
        },
        deletePost:(state,action) =>{
            // state.userPosts.shift(action.payload.data)
        //    return state.userPosts.filter((pInfo) => pInfo._id !== action.payload);
        //    console.log(postInfo._id)
        const newUserposts = state.userPosts.filter(userPost => userPost._id !== action.payload.data._id);
        console.log(newUserposts)
        state.userPosts = newUserposts;
        },
        updatePost:(state,action) => {
            state.singPosts.content = action.payload.data.newPost.content;
        }
    },


})



export const {createPost,updateSuccess,updateStart,getUserPosts,postError,getSinglePost,deletePost,updatePost,allUserPost} = postSlice.actions 

export default postSlice.reducer