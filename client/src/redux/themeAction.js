
import { opening } from "./themeSlice";

export const openSide = async(inactive,dispatch) =>{
    try{
        dispatch(opening(inactive));
    }catch(error){
        (error.message)
    }
}