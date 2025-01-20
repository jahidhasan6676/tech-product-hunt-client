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

const ProductDetailsPage = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    

    const { data: productDetails = {},isLoading,refetch } = useQuery({
        queryKey: ['productDetails'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products/${id}`)
            return data.data;
        }
    })
    console.log(productDetails)
    

    const handleVote = useUpvote(refetch);
    const handleUpvote = (id,voterEmail) =>{
        handleVote(id,voterEmail)
    }

    if(isLoading) return <LoadingSpinner/>
    return (
        <div className="w-11/12 mx-auto py-20 ">

           <ProductDetailsSection productDetails={productDetails} handleUpvote={handleUpvote} />

            {/* review section */}
           <div className="py-20">
            <ReviewSection/>
           </div>

           {/* post review section */}
           <div className="py-20">
            <ReviewPost/>
           </div>
        </div>
    );
};

export default ProductDetailsPage;