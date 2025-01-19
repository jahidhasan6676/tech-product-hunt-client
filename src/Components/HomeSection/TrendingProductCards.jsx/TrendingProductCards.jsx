import { LuVote } from "react-icons/lu";


const TrendingProductCards = ({ trendingProduct }) => {
    const { image, productName, tagInfo, vote } = trendingProduct || {};
    return (
        <div className="bg-white hover:bg-gray-800 rounded-lg hover:text-white p-4 overflow-hidden flex justify-between">
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
            <div>
                <button  className=" border p-2 flex flex-col items-center rounded-xl">
                                    <span>{vote}</span>
                                    <span className="flex items-center"><LuVote className="text-2xl"/> vote</span>
                                </button>
            </div>
        </div>
    );
};

export default TrendingProductCards;