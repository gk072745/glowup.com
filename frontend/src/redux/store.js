import { legacy_createStore, compose, combineReducers } from "redux";
import { userReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
	userManager: userReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancer());
