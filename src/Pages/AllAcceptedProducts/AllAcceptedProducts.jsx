import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import AcceptedProductCards from "./AcceptedProductCards";
import useUpvote from "../../Hooks/useUpvote";
import { useState } from "react";


const AllAcceptedProducts = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("");

    const { data: acceptedProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['acceptedProducts',search],
        queryFn: async () => {
            const data = await axiosSecure.get(`/accepted-product?search=${search}`)
            return data.data;
        }

    })

    const handleVote = useUpvote(refetch);

    // handle vote
    const handleUpvote = (id, voterEmail) => {
        handleVote(id, voterEmail)
    }


    // handle search by tags
    const handleSearch = (e) =>{
        e.preventDefault();
        refetch();
    }
    

   
    if(isLoading) return <LoadingSpinner/>
    
    return (
        <div className="w-11/12 mx-auto py-20">
            <div className="mb-10 w-fit mx-auto">
                {/* Search Bar */}
                <form onSubmit={handleSearch} className=" flex">
                    <input
                        type="text"
                        
                        onBlur={(e) => setSearch(e.target.value)}
                        placeholder="Search products by tags..."
                        className="flex-grow border border-gray-300 rounded-l px-4 py-2"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {
                    acceptedProducts?.map(acceptProduct => <AcceptedProductCards key={acceptProduct._id} acceptProduct={acceptProduct} handleUpvote={handleUpvote} />)
                }
            </div>
        </div >
    );
};

export default AllAcceptedProducts;