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

import Cookies from "js-cookie";
import axios from "axios";

let initial_check = false;
let initial_dets = {};
const loader = async () => {
	axios.defaults.withCredentials = true;
	let dets = await axios.get("http://localhost:8080/user/");
	initial_dets = dets.data.details;
};

if (Cookies.get("jwt_token")) {
	initial_check = true;
	loader();
}

const userInitialState = {
	login: {
		loading: false,
		error: false,
		admin: false,
	},
	register: {
		loading: false,
		error: false,
		admin: false,
	},
	logout: {
		loading: false,
		error: false,
		admin: false,
	},
	userdetails: initial_dets,
	isLoggedin: initial_check,
};

export const userReducer = (state = userInitialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN_LOADING: {
			return {
				...state,
				login: {
					loading: true,
					error: false,
					admin: false,
				},
			};
		}
		case USER_LOGIN_ERROR: {
			return {
				...state,
				login: {
					loading: false,
					error: true,
					admin: false,
				},
			};
		}
		case USER_LOGIN_SUCCESS: {
			return {
				...state,
				login: {
					loading: false,
					error: false,
					admin: payload.isAdmin,
				},
				userdetails: { ...payload },
				isLoggedin: true,
			};
		}
		case USER_LOGOUT_LOADING: {
			return {
				...state,
				logout: {
					loading: true,
					error: false,
					admin: false,
				},
			};
		}
		case USER_LOGOUT_ERROR: {
			return {
				...state,
				logout: {
					loading: false,
					error: true,
					admin: false,
				},
			};
		}
		case USER_LOGOUT_SUCCESS: {
			return {
				...userInitialState,
			};
		}
		case USER_REGISTER_LOADING: {
			return {
				...state,
				register: {
					loading: true,
					error: false,
					admin: false,
				},
			};
		}
		case USER_REGISTER_ERROR: {
			return {
				...state,
				register: {
					loading: false,
					error: true,
					admin: false,
				},
			};
		}
		case USER_REGISTER_SUCCESS: {
			return {
				...state,
				register: {
					loading: false,
					error: false,
					admin: false,
				},
			};
		}

		default:
			return state;
	}
};
