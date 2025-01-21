import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import FeaturedProductsCard from "../../../Components/HomeSection/FeaturedProductsCard/FeaturedProductsCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useUpvote from '../../../Hooks/useUpvote';

const FeaturedProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: featuredProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['featuredProduct'],
        queryFn: async () => {
            const data = await axiosPublic.get("/featured-products")
            return data.data;
        }
    })
    // console.log(latestProducts)

    const handleVote = useUpvote(refetch);

    // handle Upvote 
    const handleUpvote = (id,voterEmail) => {
       
         handleVote(id,voterEmail)
        
    }
    if (isLoading) return <LoadingSpinner />


    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2 className="text-2xl font-semibold mb-10">Latest Products</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-6">
                {
                    featuredProducts?.map(latestProduct => <FeaturedProductsCard key={latestProduct._id} latestProduct={latestProduct} handleUpvote={handleUpvote} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;