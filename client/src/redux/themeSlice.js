import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    side:true
}

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        opening:(state,action) =>{
        state.side = action.payload;
    },
}
})

export const {opening} = themeSlice.actions

export default themeSlice.reducer

