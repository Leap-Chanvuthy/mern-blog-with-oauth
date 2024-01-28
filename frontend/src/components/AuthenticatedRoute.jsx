import { Outlet , Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticatedRoute = () => {
    const {currentUser} = useSelector(state => state.user);
    return currentUser ? <Outlet/> : <Navigate to='/sign-in' />
}
 
export default AuthenticatedRoute;