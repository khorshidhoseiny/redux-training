import {
	USER_FETCH_FAILER,
	USER_FETCH_REQUEST,
	USER_FETCH_SUCCESS,
} from "./UsersType";
import axios from "axios";

function userRequest() {
	return {
		type: USER_FETCH_REQUEST,
	};
}
function userSuccess(users) {
	return {
		type: USER_FETCH_SUCCESS,
		payload: users,
	};
}
function userFailer(error) {
	return {
		type: USER_FETCH_FAILER,
		payload: error,
	};
}
export const fetchUsers = () => {
	return function (dispatch) {
		dispatch(userRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((r) => {
				const users = r.data;
				console.log(users);
				dispatch(userSuccess(users));
			})
			.catch((error) => dispatch(userFailer(error.message)));
	};
};
