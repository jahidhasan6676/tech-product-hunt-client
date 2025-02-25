import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const MyProductTableForm = ({ product,handleDeleteProduct }) => {
    const { productName, vote, status, _id } = product || {};
    return (
        <tr className="border-t">
            <td className="py-3 px-4">{productName}</td>
            <td className="py-3 px-4">{vote}</td>
            <td className="py-3 px-4">{status}</td>
            <td className="py-3 px-4">
                <Link to={`/dashboard/updateProduct/${_id}`}>
                    <button
                        className="bg-blue-500 text-white px-2 py-2 rounded-md mr-2 hover:bg-blue-600">
                        <FaRegEdit />
                    </button>
                </Link>

                <button
                    onClick={()=>handleDeleteProduct(_id)}
                    className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600">
                    <MdDelete />
                </button>

            </td>
        </tr>

    );
};

export default MyProductTableForm;