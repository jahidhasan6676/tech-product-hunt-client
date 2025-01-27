import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Statistics = () => {
    const axiosSecure = useAxiosSecure();

    const { data: statistics = [], isLoading } = useQuery({
        queryKey: ["statistics"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/statistics`);
            return data.data;
        },
    });

    if (isLoading) return <LoadingSpinner />;
    

    // Extract the data for the pie chart
    const totalProducts = statistics.productsCount[0]?.totalProducts || 0;
    const acceptedProducts = statistics.productsCount[0]?.acceptedProducts || 0;
    const pendingProducts = statistics.productsCount[0]?.pendingProducts || 0;
    const totalReviews = statistics.reviewCount || 0;
    const totalUsers = statistics.userCount || 0;

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const dataForPieChart = [
        { name: "Total Products", value: totalProducts },
        { name: "Accepted Products", value: acceptedProducts },
        { name: "Pending Products", value: pendingProducts },
        { name: "Reviews", value: totalReviews },
        { name: "Users", value: totalUsers },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Platform Statistics
            </h2>
            <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
                {/* Responsive Container for Pie Chart */}
                <ResponsiveContainer
                    width="100%"
                    height={400} // Adjust height for mobile and desktop views
                >
                    <PieChart>
                        <Pie
                            data={dataForPieChart}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={window.innerWidth < 768 ? 100 : 150} // Dynamic radius for mobile
                            label={({ name, value }) => `${name}: ${value}`}
                        >
                            {dataForPieChart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;

