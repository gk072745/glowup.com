import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute=({children})=>{
	const { login, isLoggedin, isAdmin } = useSelector(
		(store) => store.userManager
	);


    if(!isLoggedin){
        return <Navigate to={"/signup"}   />
    }
    return children
}