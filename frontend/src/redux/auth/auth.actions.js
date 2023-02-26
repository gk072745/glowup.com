import axios from "axios";
import Cookies from "js-cookie";
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

const URL = "http://periwinkle-sheep-hem.cyclic.app";

export const loginUser = async (dispatch, details) => {
	dispatch({ type: USER_LOGIN_LOADING });
	try {
		let res = await axios.post(`${URL}/user/login`, details);
		console.log(res);
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
		Cookies.set("jwt_token", res.data.token);
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

export const loggedIn = async (dispatch, token) => {
	dispatch({ type: USER_LOGIN_LOADING });
	try {
		console.log(token);
		let res = await axios.get(`${URL}/user/getdetails`, {
			headers: {
				Authorization: token,
			},
		});
		console.log(res.data);
		dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data[0] });
	} catch (error) {
		dispatch({ type: USER_LOGIN_ERROR });
	}
};
