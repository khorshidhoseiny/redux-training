import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import postReducer from "./post/PostReducer";
import UserReducer from "./Users/UserReducer";

const RootReducer=combineReducers({
    cake:CakeReducer,
    IceCream:IceCreamReducer,
    user:UserReducer,
    post:postReducer
});
export default RootReducer;