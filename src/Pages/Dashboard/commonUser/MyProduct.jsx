import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MyProductTableForm from "../../../Components/Dashboard/commonUser/MyProductTableForm";


const MyProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // user products data load

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products/${user?.email}`)
            return data.data;
        }

    })
    console.log(products)


    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">My Products</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4">Product Name</th>
                            <th className="text-left py-3 px-4">Votes</th>
                            <th className="text-left py-3 px-4">Status</th>
                            <th className="text-left py-3 px-4">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       
                    {
                        products?.map(product => <MyProductTableForm key={product._id} product={product}></MyProductTableForm>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;