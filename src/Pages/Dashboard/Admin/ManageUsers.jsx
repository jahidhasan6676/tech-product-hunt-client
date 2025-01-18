import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: allUser = [], refetch, isLoading, error } = useQuery({
        queryKey: ['allUser', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-users/${user?.email}`)
            return res.data;
        }
    })

    console.log(allUser)
    if (isLoading) return <h2>Loading...</h2>
    if (error) return <h4>Error handling: {error.message}</h4>

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">My Products</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4"> Name</th>
                            <th className="text-left py-3 px-4">Email</th>
                            <th className="text-left py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser?.map(user => <tr key={user._id} className="border-t">
                                <td className="py-3 px-4">{user?.name}</td>
                                <td className="py-3 px-4">{user?.email}</td>
                                <td className="py-3 px-4 capitalize">user</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;