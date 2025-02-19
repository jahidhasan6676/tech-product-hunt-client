import { Search } from "lucide-react";


const SearchBar = () => {
    return (
        <>
            {/* Search Bar (Desktop) */}
            < div className="hidden md:flex items-center relative mr-2" >
                <form className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="border rounded-full py-2 pl-10 pr-4 w-[180px] lg:w-[200px] text-gray-700 focus:outline-none focus:ring-0"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                </form>
            </div >
        </>
    );
};

export default SearchBar;