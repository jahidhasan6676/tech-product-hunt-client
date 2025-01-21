import { LuSquareArrowOutUpRight, LuVote } from "react-icons/lu";
import useAuth from "../../Hooks/useAuth";
import { CiFlag1 } from "react-icons/ci";
import { Link } from "react-router-dom";


const ProductDetailsSection = ({productDetails,handleUpvote,handleUpdateReport}) => {
    const { productName, image, vote, tagInfo, externalLink, ownerInfo, description,_id } = productDetails || {};
    const {user} = useAuth();
    return (
        <div className=" mx-auto bg-gray-50 rounded-lg py-10">
            <div className="lg:w-8/12 mx-auto px-3 md:px-10 lg:px-0 ">

                <div >
                    {/* image,name and vote */}
                    <div className="flex justify-between">
                        {/* image and name */}
                        <div className="">
                            <img
                                src={image}
                                alt={productName}
                                className="w-[80px] h-[80px] object-cover rounded-md"
                            />
                            <h2 className="text-2xl font-semibold">{productName}</h2>
                        </div>
                        {/* vote */}
                        <div className="flex  flex-col lg:flex-row items-center gap-2 lg:gap-4">

                            {/* vote btn */}
                            <button disabled={user?.email === ownerInfo?.email} onClick={() => handleUpvote(_id, user?.email)} className="disabled:cursor-not-allowed border px-2 md:px-4 py-2  rounded-xl bg-black text-white">

                                <span className="flex items-center"><LuVote className="text-2xl" /> Upvote {vote}</span>
                            </button>

                            {/* external btn */}
                            <Link to={externalLink}>
                                <button className="border border-black px-3 py-2 rounded-xl font-medium flex items-center  w-fit "><LuSquareArrowOutUpRight className="text-[18px] mr-1" /> Visit</button>
                            </Link>

                            {/* report btn */}
                            <button onClick={()=>handleUpdateReport(_id)} className="flex  items-center text-[16px] hover:text-red-600"><CiFlag1 className="text-[20px]" /> Report</button>

                        </div>
                    </div>

                    {/* description and tagInfo */}
                    <div className="mt-5">
                        <p className="text-[17px] text-gray-500">{description}</p>

                        <div className="flex justify-between items-center">
                            <p className="mt-5 ">
                                <span className="text-[17px]">Launch tags: </span>
                                <span className="hover:underline text-[20px]">{Array.isArray(tagInfo)
                                    ? tagInfo.map((tag, index) => (
                                        <span key={index} className="mr-2">
                                            {tag}
                                        </span>
                                    ))
                                    : tagInfo
                                }</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSection;