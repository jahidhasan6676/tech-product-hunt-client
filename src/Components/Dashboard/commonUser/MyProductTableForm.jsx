import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const MyProductTableForm = ({product}) => {
    const {productName,vote,status} = product || {};
    return (
        <tr className="border-t">
            <td className="py-3 px-4">{productName}</td>
            <td className="py-3 px-4">{vote}</td>
            <td className="py-3 px-4 capitalize">{status}</td>
            <td className="py-3 px-4">
                <button
                    className="bg-blue-500 text-white px-2 py-2 rounded-md mr-2 hover:bg-blue-600">
                    <FaRegEdit />
                </button>
                <button
                    className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600">
                    <MdDelete />
                </button>
            </td>
        </tr>

    );
};

export default MyProductTableForm;