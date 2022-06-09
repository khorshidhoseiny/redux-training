import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
  } from "./PostTypes";
  
  export const fetchPostsRequest = (id) => {
	return {
	  type: FETCH_POSTS_REQUEST,
	  payload: id,
	};
  };
  
  export const fetchPostsSuccess = (Posts) => {
	return {
	  type: FETCH_POSTS_SUCCESS,
	  payload: Posts,
	};
  };
  
  export const fetchPostsFailure = (error) => {
	return {
	  type: FETCH_POSTS_FAILURE,
	  payload: error,
	};
  };