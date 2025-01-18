import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";


const FeaturedProductsCard = ({ latestProduct }) => {
    const { productName, image, tagInfo, vote } = latestProduct || {};
    // console.log(tagInfo)
    return (
        <div  className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={productName} className="w-full h-48 object-cover" />
            <div className="p-4">
                <Link  className="text-lg font-bold hover:text-blue-500">
                    {productName}
                </Link>
                <p className="text-sm text-gray-600 mt-2">{tagInfo.join(", ")}</p>
            </div>
            <div className="p-4 flex items-center justify-between">
                <button
                    
                    className={`flex items-center text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded`}>
                    <AiFillHeart className="mr-2" />
                    {vote}
                </button>
                <p className="text-sm text-gray-500">Votes</p>
            </div>
        </div>
    );
};

export default FeaturedProductsCard;