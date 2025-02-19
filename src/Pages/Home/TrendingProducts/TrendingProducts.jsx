import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TrendingProductCards from "../../../Components/HomeSection/TrendingProductCards.jsx/TrendingProductCards";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import useUpvote from "../../../Hooks/useUpvote";


const TrendingProducts = () => {
    const axiosPublic = useAxiosPublic();

    const {data: trendingProducts = [],isLoading,refetch} = useQuery({
        queryKey:['trendingProducts'],
        queryFn: async()=>{
            const data = await axiosPublic.get('/trending-products')
            return data.data;
        }
    })
    // console.log("trending --->",trendingProducts)
    const handleVote = useUpvote(refetch);
    
    // handle vote
    const handleUpvote = (id,voterEmail)=>{
        handleVote(id,voterEmail)
    }

    if(isLoading)return <LoadingSpinner/>
    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2 className="text-3xl font-semibold mb-1 text-left lg:text-center"> What’s Trending: Popular Picks</h2>
            <p className="text-sm font-medium text-gray-500 mb-10 text-left lg:text-center">Explore the products everyone’s talking about! From top-voted innovations <br/> to crowd favorites, discover what’s making waves right now.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    trendingProducts?.map(trendingProduct => <TrendingProductCards key={trendingProduct._id} trendingProduct={trendingProduct} handleUpvote={handleUpvote}/>)
                }
            </div>
        </div>
    );
};

export default TrendingProducts;