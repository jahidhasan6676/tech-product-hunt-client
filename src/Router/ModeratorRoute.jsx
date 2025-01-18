
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";


const ModeratorRoute = () => {
    const {user,loading} = useAuth(); 
    const [role,isLoading] = useRole();
    

    if(loading || isLoading){
        return <LoadingSpinner/>
    }

    if(user && role === 'moderator'){
        return children;
    }

    return <Navigate to="/dashboard"></Navigate>
};

export default ModeratorRoute;