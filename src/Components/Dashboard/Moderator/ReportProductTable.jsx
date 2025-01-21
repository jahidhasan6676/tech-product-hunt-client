import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const ReportProductTable = ({ reportData, index,handleDeleteReportProduct }) => {
    const { productName, _id } = reportData || {};
    return (
        <tr className="border-t">

            <td className="py-3 px-4">{index + 1}</td>
            <td className="py-3 px-4">{productName}</td>
            <td className="py-3 px-4 hover:underline"><Link to={`/productDetails/${_id}`}>View</Link></td>
            <td className="py-3 px-4">
                <button
                    onClick={() => handleDeleteReportProduct(_id)}
                    className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600">
                    <MdDelete />
                </button>
            </td>

        </tr>
    );
};

export default ReportProductTable;