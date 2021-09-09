import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    allusers:[],
    singuser:[]
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        getUsers:(state,action) => {
            state.allusers = action.payload.data;
    },
        getSingUser:(state,action) =>{ 
            state.singuser = action.payload.data;
        }
    }
})


export const {getUsers,getSingUser} = userSlice.actions

export default userSlice.reducer