import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const axiosSecure = useAxiosSecure()

    const { data: statistics = [], isLoading, refetch } = useQuery({
        queryKey: ['statistics'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/statistics`)
            return data.data;
        }

    })
    if (isLoading) return <LoadingSpinner />
    console.log(statistics)

    // Extract the data for the pie chart
    const totalProducts = statistics.productsCount[0]?.totalProducts || 0;
    const acceptedProducts = statistics.productsCount[0]?.acceptedProducts || 0;
    const pendingProducts = statistics.productsCount[0]?.pendingProducts || 0;
    const totalReviews = statistics.reviewCount || 0;
    const totalUsers = statistics.userCount || 0;

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const dataForPieChart = [
        { name: "Total Products", value: totalProducts },
        { name: "Accepted Products", value: acceptedProducts },
        { name: "Pending Products", value: pendingProducts },
        { name: "Reviews", value: totalReviews },
        { name: "Users", value: totalUsers },
    ];

    return (
        <div className="py-20">

            <ResponsiveContainer  width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={dataForPieChart}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        label={({ name, value }) => `${name}: ${value}`}
                    >
                        {dataForPieChart?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;