import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import AcceptedProductCards from "./AcceptedProductCards";
import useUpvote from "../../Hooks/useUpvote";
import { useState } from "react";


const AllAcceptedProducts = () => {
    const axiosSecure = useAxiosSecure();
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("");
    const limit = 6;


    const { data: acceptedProductsData = {}, isLoading, refetch } = useQuery({
        queryKey: ['acceptedProducts', page, search],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/accepted-product?page=${page}&limit=${limit}&search=${search}`)

            return data;
        }

    })


    // Extract products and totalPages from the response
    const acceptedProducts = acceptedProductsData.products || [];
    const totalPages = acceptedProductsData.totalPages || 1;

    const handleVote = useUpvote(refetch);

    // handle vote
    const handleUpvote = (id, voterEmail) => {
        handleVote(id, voterEmail)
    }


    // handle search by tags
    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        refetch();
    }

    // next page
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    //   previous page
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };



    if (isLoading) return <LoadingSpinner />

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

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2 bg-gray-100 border-t border-b">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div >
    );
};

export default AllAcceptedProducts;

