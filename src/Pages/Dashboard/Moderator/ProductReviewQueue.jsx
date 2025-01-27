import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ReviewQueueTable from "../../../Components/Dashboard/Moderator/ReviewQueueTable";
import { toast } from "react-toastify";


const ProductReviewQueue = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allProduct = {}, isLoading, refetch } = useQuery({
        queryKey: ['allProduct'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/all-products`)
            return data.data;
        }
    })

    // handle make featured
    const handleMakeFeatured = async (id) => {
        try {

            const res = await axiosSecure.patch(`product-featured/${id}`, { featured: true })
            if (res.data.modifiedCount) {
                toast.success("Product Make Featured successful")
                refetch();
            }
        }
        catch (err) {
            toast.error(err.response)
        }
    }

    // update product stats
    const handleUpdateProductStatus = async(id, status) => {
        try {

            const res = await axiosSecure.patch(`product-status/${id}`, { status })
            if (res.data.modifiedCount) {
                toast.success(`Product Status ${status}`)
                refetch();
            }
        }
        catch (err) {
            toast.error(err.response)
        }

    }


    if (isLoading) return <LoadingSpinner />
    return (
        <div className="pt-3 bg-gray-50 h-screen px-4 md:px-6 lg:px-10">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4">No.</th>
                            <th className="text-left py-3 px-4">Product Name</th>
                            <th className="text-left py-3 px-4">Product Details</th>
                            <th className="text-left py-3 px-4">Make Featured</th>
                            <th className="text-left py-3 px-4">Action</th>
                            <th className="text-left py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allProduct?.map((productData, index) => <ReviewQueueTable key={productData._id} productData={productData} index={index} handleMakeFeatured={handleMakeFeatured} handleUpdateProductStatus={handleUpdateProductStatus} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductReviewQueue;