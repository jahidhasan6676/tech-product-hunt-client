import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";


const PrivateRouter = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <LoadingSpinner/>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
    
};

export default PrivateRouter;