import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile:[],
};

export const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{
        updataProfile:(state,action) =>{
            state.profile = action.payload;
        }
    }
})

export const {updataProfile} = profileSlice.actions
 
export default profileSlice.reducer