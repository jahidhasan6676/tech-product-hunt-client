import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import ManageUsersTable from "../../../Components/Dashboard/Admin/ManageUsersTable";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

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

    // update user role
    const handleUpdateUserRole = async (updateRole, email) => {
        if(updateRole === 'user')return;
        try {
            
            const res = await axiosSecure.patch(`/user/role/${email}`, { role: updateRole })
            if (res.data.modifiedCount) {
                toast.success("Role Update Successfully")
                refetch();
            }
        }
        catch (err) {
            toast.error(err.response)
        }
    }
    
    if (isLoading) return <LoadingSpinner/>
    // if (error) return <h4>Error handling: {error.message}</h4>

    return (
        <div className="pt-3 bg-gray-50 h-screen px-4 md:px-6 lg:px-10">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4"> Name</th>
                            <th className="text-left py-3 px-4">Email</th>
                            <th className="text-left py-3 px-4">Role</th>
                            <th className="text-left py-3 px-4">Update Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser?.map(userData => <ManageUsersTable key={userData._id} userData={userData} handleUpdateUserRole={handleUpdateUserRole} ></ManageUsersTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;