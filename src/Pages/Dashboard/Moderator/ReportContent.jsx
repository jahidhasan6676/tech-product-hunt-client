import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ReportProductTable from "../../../Components/Dashboard/Moderator/ReportProductTable";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";


const ReportContent = () => {
    const axiosSecure = useAxiosSecure();

    const { data: reportProducts = {}, isLoading, refetch } = useQuery({
        queryKey: ['reportProducts'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/report-products`)
            return data.data;
        }
    })

    const handleDeleteReportProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/report-products/${id}`)
                if (res.data.deletedCount) {
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
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="w-11/12 mx-auto py-20">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4">No.</th>
                            <th className="text-left py-3 px-4">Product Name</th>
                            <th className="text-left py-3 px-4">Product Details</th>
                            <th className="text-left py-3 px-4">Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reportProducts?.map((reportData, index) => <ReportProductTable key={reportData._id} reportData={reportData} index={index} handleDeleteReportProduct={handleDeleteReportProduct} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportContent;