import * as api from '../api';
import { postActionTypes } from '../constants/actionTypes';

//Action Creators
export const getPosts = ()=>async(dispatch)=>{
    try{
        // console.log('Reached at action');
        const {data} =await api.fetchPosts();
        console.log(data);
        dispatch({
            type : postActionTypes.FETCH_ALL_POSTS,
            payload : data,
        })
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post)=>async(dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        dispatch({
            type : postActionTypes.CREATE_POST,
            payload : data,
        });
    } catch(error) {
        console.log(error.message)
    }
}

export const updatePost = (id,post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type : postActionTypes.UPDATE_POST, payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
}

export const deletePost = (id)=>async(dispatch)=>{
    try {
         await api.deletePost(id);
        dispatch({type : postActionTypes.DELETE_POST, payload : id});
    }
    catch(error){
        console.log(error);
    }
}

export const likePost = (id)=>async(dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        dispatch({type : postActionTypes.UPDATE_POST, payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
}