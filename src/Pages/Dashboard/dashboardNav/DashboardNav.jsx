import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { LiaProductHunt } from "react-icons/lia";
import SearchBar from "../../../Hooks/SearchBar";
import useRole from "../../../Hooks/useRole";
import { IoNotificationsCircleSharp, IoNotificationsOutline } from "react-icons/io5";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

const DashboardNav = () => {
    const { user } = useAuth();
    const [role, isLoading] = useRole();
    const [date, newDate] = useState(new Date())

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="sticky top-0 z-50 border-gray-600 hidden md:flex w-full h-[60px] bg-white">

            <div className="w-full flex justify-between items-center md:px-1 lg:px-10 ">
                {/* left side */}
                <SearchBar></SearchBar>
                {/* right side */}
                <div className="flex items-center gap-1">

                    <IoNotificationsCircleSharp className="text-4xl mr-1" />
                    <button className="text-sm p-3 rounded-md bg-gray-100 text-gray-600 mr-2">
                        {new Date().toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </button>
                    <img src={user?.photoURL} alt="" referrerPolicy="no-referrer" className="w-[45px] h-[45px] rounded-full" />
                    <div className="flex flex-col gap-0">
                        <p className="text-sm">{user?.displayName}</p>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardNav;