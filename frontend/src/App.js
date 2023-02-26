import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "./Homepage/footer/footer";
import { loggedIn } from "./redux/auth/auth.actions";
import MainRoute from "./Routers/Routes";

function App() {
	const { isLoggedin, login } = useSelector((store) => store.userManager);
	const dispatch = useDispatch();

	useEffect(() => {
		let token = Cookies.get("jwt_token");
		console.log(token);
		if (token) {
			loggedIn(dispatch, token);
		}
		console.log(isLoggedin);
	}, []);
	return (
		<div className="App">
			<MainRoute />
			<Footer />
		</div>
	);
}

export default App;
