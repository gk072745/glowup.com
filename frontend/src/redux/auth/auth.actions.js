import axios from "axios";
import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_ERROR,
	USER_LOGIN_LOADING,
	USER_LOGOUT_SUCCESS,
	USER_LOGOUT_ERROR,
	USER_LOGOUT_LOADING,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_ERROR,
	USER_REGISTER_LOADING,
} from "./auth.types";

const URL = "http://localhost:8080";

export const loginUser = async (dispatch, details) => {
	dispatch({ type: USER_LOGIN_LOADING });
	try {
		let res = await axios.post(`${URL}/user/login`, details);
		dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.details });
	} catch (err) {
		dispatch({ type: USER_LOGIN_ERROR });
	}
};

export const registerUser = async (dispatch, details) => {
	dispatch({ type: USER_REGISTER_LOADING });
	try {
		let res = await axios.post(`${URL}/user/register`, details);
		console.log(res);
		dispatch({ type: USER_REGISTER_SUCCESS });
	} catch (error) {
		dispatch({ type: USER_REGISTER_ERROR });
	}
};

export const logoutUser = async (dispatch) => {
	dispatch({ type: USER_LOGOUT_LOADING });
	try {
		dispatch({ type: USER_LOGOUT_SUCCESS });
	} catch (error) {
		dispatch({ type: USER_LOGOUT_ERROR });
	}
};
