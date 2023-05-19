import Posts from "../components/Posts/Posts.jsx";
import { postActionTypes } from "../constants/actionTypes.js";
export default  (state=[],action)=>{
    switch(action.type) {
        case postActionTypes.FETCH_ALL_POSTS:
            return action.payload;
        case  postActionTypes.CREATE_POST : 
            return [...state, action.payload]
        case  postActionTypes.UPDATE_POST  :
            return state.map((post)=>post._id===action.payload._id?action.payload:post);
        case  postActionTypes.DELETE_POST:
            return state.filter(post=>post._id!==action.payload);
        
        default : 
            return state;
    }
}