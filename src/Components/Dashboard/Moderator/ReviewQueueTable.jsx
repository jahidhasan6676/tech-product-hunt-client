import { Link } from "react-router-dom";


const ReviewQueueTable = ({ productData, index, handleMakeFeatured, handleUpdateProductStatus }) => {
    const { productName, _id, status } = productData || {};
    return (
        <tr className="border-t">
            <td className="py-3 px-4">{index + 1}</td>
            <td className="py-3 px-4">{productName}</td>
            <td className="py-3 px-4 hover:underline"><Link to={`/productDetails/${_id}`}>View</Link></td>
            <td className="py-3 px-4">
                <button onClick={() => handleMakeFeatured(_id)}> Featured </button>
            </td>
            <td className="py-3 px-4">
                <button
                    disabled={status === 'Accepted' || status === 'Rejected'}
                    onClick={() => handleUpdateProductStatus(_id, "Accepted")}
                    className="btn btn-accent text-white"> {status === 'Accepted' ? 'Accepted' : "Accept"} </button>
            </td>
            <td className="py-3 px-4">
                <button
                    disabled={status === 'Rejected' || status === 'Accepted'}
                    onClick={() => handleUpdateProductStatus(_id, "Rejected")}
                    className="btn btn-error text-white"> {status === "Rejected" ? 'Rejected' : 'Reject'} </button>
            </td>

        </tr>
    );
};

export default ReviewQueueTable;