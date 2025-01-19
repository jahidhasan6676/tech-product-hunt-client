import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import FeaturedProductsCard from "../../../Components/HomeSection/FeaturedProductsCard/FeaturedProductsCard";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";


const FeaturedProducts = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate();

    const { data: latestProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['latestProduct'],
        queryFn: async () => {
            const data = await axiosPublic.get("/latest-product")
            return data.data;
        }
    })
    // console.log(latestProducts)

    // handle Upvote 
    const handleUpvote = async (id,voterEmail) => {
        
        if (!user && !user?.email) {
            return navigate("/login")
        }
        try {
            await axiosPublic.patch(`/products-vote/${id}`,{voterEmail})
            refetch();
        } catch (err) {
            toast.error(err.response.data.message)
        }

    }
    if (isLoading) return <LoadingSpinner />


    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2 className="text-2xl font-semibold mb-10">Latest Products</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-6">
                {
                    latestProducts?.map(latestProduct => <FeaturedProductsCard key={latestProduct._id} latestProduct={latestProduct} handleUpvote={handleUpvote} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;