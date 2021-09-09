import { loginLoading, loginSuccess, loginData,loginError } from "./authSlice";
// import axios from "axios";

import { postDataAPI ,patchAuthAPI} from "./fetchData"

export const login = async (user, dispatch) => {
  dispatch(loginLoading());
  // console.log(user);
  try {
    const res = await postDataAPI('login' ,user);
    console.log(res);

    dispatch(loginSuccess({
        token:res.data.access_token,
        user:res.data.user
    }));

    localStorage.setItem("firstLogin", true);
    dispatch(loginData({
      data:res.data.user,
    }))
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const refreshToken =()=> async(dispatch) => {
  const firstLogin = localStorage.getItem("firstLogin")
if(firstLogin){
  dispatch(loginLoading());
try {
  const res = await postDataAPI("refresh_token");
  dispatch(loginSuccess({
    token:res.data.access_token,
    user:res.data.user
  }));
  dispatch(loginData({
    data:res.data.user,
  }));
} catch(error){
  dispatch(loginError(error.message))
}
}
};
export const register = async(user,dispatch) => {
  dispatch(loginLoading());
  try{
  const res = await postDataAPI('register',user)
  dispatch(
    loginSuccess({
      token:res.data.access_token
    })
  );
  localStorage.setItem("firstLogin", true);
  dispatch(loginData({
    data:res.data.user,
  }))
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try{
    localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"

  }catch(error){
    dispatch(loginError(error.message))
  }
}

// export const addToCart = async (cart,auth,dispatch) => {
//   try{
//     const res = await patchAuthAPI("addtocart",cart,auth.token)
//     console.log(res)
//     console.log(auth)
//     dispatch(addCart({
//       userData:res.data
//     }))
//   }catch(error) {
//     dispatch(loginError(error.message))
//   }
// };