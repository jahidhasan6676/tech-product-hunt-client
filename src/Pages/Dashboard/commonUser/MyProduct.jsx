import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MyProductTableForm from "../../../Components/Dashboard/commonUser/MyProductTableForm";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";


const MyProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // user products data load

    const { data: products = [], isLoading,refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products/emailed/${user?.email}`)
            return data.data;
        }

    })
    

    // product delete
    const handleDeleteProduct = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${id}`)
                if(res.data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your product has been deleted.",
                        icon: "success"
                      });
                      refetch()
                }
            }
          });
    }


    if (isLoading) {
        return <LoadingSpinner/>
    }
    return (
        <div className="pt-3 bg-gray-50 h-screen px-4 md:px-6 lg:px-10 ">
            
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
                        products?.map(product => <MyProductTableForm key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></MyProductTableForm>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;