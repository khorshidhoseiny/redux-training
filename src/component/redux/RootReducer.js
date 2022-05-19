import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import UserReducer from "./Users/UserReducer";

const RootReducer=combineReducers({
    cake:CakeReducer,
    IceCream:IceCreamReducer,
    user:UserReducer
});
export default RootReducer;