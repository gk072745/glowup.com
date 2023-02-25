import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthProvider } from "react-auth-kit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthProvider
		authType="cookie"
		authName="jwt_token"
		cookieDomain={window.location.hostname}
		cookieSecure={true}
	>
		<BrowserRouter>
			<ChakraProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ChakraProvider>
		</BrowserRouter>
	</AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
