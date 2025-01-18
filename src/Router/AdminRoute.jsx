import { Navigate, useLocation} from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth(); 
    const [role,isLoading] = useRole();
    const location = useLocation();

    if(loading || isLoading){
        return <LoadingSpinner/>
    }

    if(user && role === 'admin'){
        return children;
    }

    return <Navigate to="/dashboard"></Navigate>
};

export default AdminRoute;