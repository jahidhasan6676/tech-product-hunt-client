
import { LuVote } from "react-icons/lu";
import useAuth from "../../../Hooks/useAuth";



const FeaturedProductsCard = ({ latestProduct,handleUpvote }) => {
    const { productName, image, tagInfo, vote,_id,ownerInfo } = latestProduct || {};
    const {user} = useAuth();

    // console.log(tagInfo)
    return (
        <div className=" border p-4 hover:bg-gray-100 flex justify-between">
            <div className="flex gap-8 items-center">
                <div className="">
                    <img
                        src={image}
                        alt={productName}
                        className="w-[80px] h-[80px] object-cover rounded-md"
                    />
                </div>
                <div className="">
                    <h3 className=" text-lg font-semibold text-gray-800">
                        {productName}
                    </h3>
                    <p className=" text-xs hover:underline">
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
            <div>
                <button disabled={user?.email === ownerInfo?.email} onClick={()=>handleUpvote(_id,user?.email)} className="disabled:cursor-not-allowed border p-2 flex flex-col items-center rounded-xl">
                    <span>{vote}</span>
                    <span className="flex items-center"><LuVote className="text-2xl"/> vote</span>
                </button>
            </div>
        </div>
    );
};

export default FeaturedProductsCard;