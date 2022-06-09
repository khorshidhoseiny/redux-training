import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostsFailure, fetchPostsSuccess } from "../post/PostActions";
import { FETCH_POSTS_REQUEST} from "../post/PostTypes";

function* fetchPost(action){
    try {
        const EndPoint=`http://jsonplaceholder.typicode.com/posts/${action.payload}`;
        const response=yield call(()=>axios.get(EndPoint));
        yield put(fetchPostsSuccess(response.data))
    } catch (error) {
        yield put(fetchPostsFailure(error.message))
    }
}
export function* watchFetchPost(){
yield takeEvery(FETCH_POSTS_REQUEST,fetchPost)
}