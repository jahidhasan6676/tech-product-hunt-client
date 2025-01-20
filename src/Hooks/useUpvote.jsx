import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { toast } from "react-toastify";


const useUpvote =  (refetch) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
           
    const handleVote = async(id,voterEmail) =>{
        if (!user && !user?.email) {
            return navigate("/login")
        }
        try {
            await axiosPublic.patch(`/products-vote/${id}`,{voterEmail})
            refetch()
            
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }

    return handleVote;
      
};

export default useUpvote;