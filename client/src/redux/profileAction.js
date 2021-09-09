import { loginError } from "./authSlice";
import { patchDataAPI } from "./fetchData";
import { updataProfile } from "./profileSlice";

export const editUser = (profile,token) =>async(dispatch)=>{
    try{
        const res = await patchDataAPI("edituser",profile,token);
        console.log(res);
        dispatch(updataProfile({
            pfile:res.data
        }));
    }catch(error){
        dispatch(loginError(error.messgae));
    }
};