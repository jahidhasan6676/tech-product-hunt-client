import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import FeaturedProductsCard from "../../../Components/HomeSection/FeaturedProductsCard/FeaturedProductsCard";


const FeaturedProducts = () => {
    const axiosSecure = useAxiosSecure();

    const {data: latestProducts = [],isLoading} = useQuery({
        queryKey: ['latestProduct'],
        queryFn:async()=>{
            const data = await axiosSecure.get("/latest-product")
            return data.data;
        }
    })
    // console.log(latestProducts)
    if(isLoading) return <LoadingSpinner/>
    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2>Latest Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {
                    latestProducts?.map(latestProduct=> <FeaturedProductsCard key={latestProduct._id} latestProduct={latestProduct}/>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;