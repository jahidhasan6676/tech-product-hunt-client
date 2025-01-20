import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ProductDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const {data: productDetails = {}} = useQuery({
        queryKey:['productDetails'],
        queryFn:async()=>{
            const data = await axiosSecure.get(`/products/${id}`)
            return data.data;
        }
    })
    console.log(productDetails)
    return (
        <div>
            product details page
        </div>
    );
};

export default ProductDetails;