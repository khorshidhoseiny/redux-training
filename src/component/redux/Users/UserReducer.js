import { USER_FETCH_FAILER, USER_FETCH_REQUEST, USER_FETCH_SUCCESS } from "./UsersType";

const initialState={
    Loading:false,
    users:[],
    error:""
}


const UserReducer = (state=initialState,action) => {
    switch(action.type){
        case USER_FETCH_REQUEST:
            return{Loading:true}
        
        case USER_FETCH_SUCCESS:
            return{Loading:false,users:action.payload}
            case USER_FETCH_FAILER:
                return{Loading:false,error:action.payload}
                default:
                    return state;
        
    }
}
 
export default UserReducer;