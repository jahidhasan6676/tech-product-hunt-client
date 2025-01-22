import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { LuSquareArrowOutUpRight, LuVote } from "react-icons/lu";
import { CiFlag1 } from "react-icons/ci";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useUpvote from "../../Hooks/useUpvote";
import ProductDetailsSection from "./ProductDetailsSection";
import ReviewSection from "./ReviewSection";
import ReviewPost from "./ReviewPost";
import { toast } from "react-toastify";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    

    const { data: productDetails = {},isLoading,refetch } = useQuery({
        queryKey: ['productDetails'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products/${id}`)
            return data.data;
        }
    })

    const handleVote = useUpvote(refetch);
    const handleUpvote = (id,voterEmail) =>{
        handleVote(id,voterEmail)
    }

     // update product report
     const handleUpdateReport = async (id) => {
        
        try {
            
            const res = await axiosSecure.patch(`product-report/${id}`, { report:true })
            if (res.data.modifiedCount) {
                toast.success("Your report successful")
                refetch();
            }
        }
        catch (err) {
            toast.error(err.response)
        }
    }

    if(isLoading) return <LoadingSpinner/>
    return (
        <div className="w-11/12 mx-auto py-20">

           <ProductDetailsSection productDetails={productDetails} handleUpvote={handleUpvote} handleUpdateReport={handleUpdateReport} />

            {/* review section */}
           <div className="py-20">
            <ReviewSection/>
           </div>

           {/* post review section */}
           <div className="">
            <ReviewPost/>
           </div>
        </div>
    );
};

export default ProductDetailsPage;