import * as api from '../api';
import { authActionTypes } from '../constants/actionTypes';

export const signin = (formData,history)=>async(dispatch)=>{
    try {
        //Login the user ....
        const {data} = await api.signIn(formData);
        dispatch({type : authActionTypes.AUTH, data})
        history.push('/');
    }catch(err){
        console.log(err);

    }
}
export const signup = (formData,history)=>async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        dispatch({type : authActionTypes.AUTH, data})
        history.push('/');
    }catch(err){
        console.log(err);

    }
}

export const logout = ()=>{
    return {
        type : 'LOGOUT'
    }
}