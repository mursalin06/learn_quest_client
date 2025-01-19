import { Children, useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
}

export default PrivateRoute;