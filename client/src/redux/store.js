import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux/authSlice'
import themeReducer from '../redux/themeSlice'
import profileReducer from '../redux/profileSlice'
import postReducer from '../redux/postSlice'
import userReducer from '../redux/userSlice'
export const store = configureStore({
  reducer: {
      login: loginReducer,
      theme: themeReducer,
      profile: profileReducer,
      post:postReducer,
      user:userReducer
  },
})