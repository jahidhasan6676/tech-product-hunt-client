import { LuVote } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const TrendingProductCards = ({ trendingProduct,handleUpvote }) => {
    const { image, productName, tagInfo, vote, _id, ownerInfo } = trendingProduct || {};
    const { user } = useAuth();
    return (
        <div className="bg-gray-50 rounded-lg  p-4 overflow-hidden flex justify-between">
            <div className="flex flex-col ">
                <div>
                    <img src={image} alt={productName} className="w-[80px] h-[80px] rounded-lg object-cover" />
                </div>
                <div className="mt-2">
                    <h3 className="text-xl font-medium">{productName}</h3>
                    <p className="text-xs hover:underline mt-1">
                        {Array.isArray(tagInfo)
                            ? tagInfo.map((tag, index) => (
                                <span key={index} className="mr-2">
                                    {tag}
                                </span>
                            ))
                            : tagInfo
                        }
                    </p>

                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <button
                    disabled={user?.email === ownerInfo?.email}
                    onClick={() => handleUpvote(_id, user?.email)}
                    className=" disabled:cursor-not-allowed border p-2 flex flex-col items-center rounded-xl">
                    <span>{vote}</span>
                    <span className="flex items-center"><LuVote className="text-2xl" /> vote</span>
                </button>
                <Link to="/allAcceptedProduct">
                    <button className="text-sm px-4 py-3 border-b border-b-[#5a45aa]  hover:bg-[#5a45aa] hover:text-white font-semibold rounded-lg">Show All Products</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingProductCards;