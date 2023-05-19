import { authActionTypes } from "../constants/actionTypes";

const authReducer = (state={authData:null},action)=> {
    switch(action.type) {
        case authActionTypes.AUTH : 
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state,authData : action?.data};
        case authActionTypes.LOGOUT : 
            localStorage.clear();
            return {...state, authData : null}
        default : 
        return state;
    }
}
 
export default authReducer