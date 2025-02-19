
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Subscription = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: payment = [], isLoading, refetch } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const data = await axiosPublic.get(`/payment/${user?.email}`)
            return data.data;
        }

    })
    

    return (

        <div className="flex justify-center  items-center h-screen bg-gray-50">
            <div className="max-w-md py-8 w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-full p-4">
                    <div className="flex justify-center items-center">
                        <img
                            className="h-24 w-24 rounded-full border-2 border-indigo-500"
                            referrerPolicy="no-referrer"
                            src={user?.photoURL}
                            alt={user?.displayName}
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h1 className="text-xl font-bold text-gray-800">{user?.displayName}</h1>
                        <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>

                    {
                        payment.status === 'succeeded' ? <div className="mt-6 text-center">
                            <p className="text-green-500 font-semibold">Status: Verified</p>
                        </div>
                            :
                            <div className="mt-6 text-center">
                                <Link to="/dashboard/payment">
                                    <button
                                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-600"
                                    >
                                        Subscribe for $10
                                    </button>
                                </Link>
                            </div>

                    }

                </div>
            </div>
        </div>
    );
};

export default Subscription;

