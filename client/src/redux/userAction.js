import { getDataAPI } from './fetchData'
import {getUsers,getSingUser} from './userSlice'

export const alluser = (token) => async(dispatch) => {
    try{
        const res = await getDataAPI('alluser',token);
        console.log(res)
        dispatch(getUsers({
            data:res.data
        }));
    }catch(error) {
        (error.message)
    }
};

export const  singleUser = ({id},token) => async(dispatch) => {
    try{
        const res = await getDataAPI(`user/${id}`,token);
        console.log(res)
        dispatch(getSingUser({
            data:res.data.user,
        })
        );
    }catch(error) {
        (error.message);
    }
};