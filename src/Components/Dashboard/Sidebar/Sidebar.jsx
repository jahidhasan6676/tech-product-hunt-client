

import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { CgProfile } from "react-icons/cg";
import { FaPlus, FaBox, FaChartPie, FaUsers, FaTicketAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";

const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const [role, isLoading] = useRole();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="">
            {/* Small Screen Navbar */}
            <div className="bg-gray-100 flex justify-between md:hidden">
                <div>
                    <div className="block cursor-pointer p-4 font-bold">
                        <Link to="/">
                            <img
                                src="https://i.ibb.co/4ZXzmq5/logo.png"
                                alt="logo"
                                width="100"
                                height="100"
                            />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
                >
                    <AiOutlineBars className="h-5 w-5" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
                    } md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div>
                    <div className="w-full hidden md:flex justify-center items-center mx-auto">
                        <h2 className="self-center text-2xl font-semibold whitespace-nowrap flex items-center gap-1"><LiaProductHunt className='text-4xl' /><i className="text-[#5a45aa]">Tech Hunt</i></h2>
                    </div>
                    <hr className="mt-2 w-full" />
                    {/* Nav Items */}
                    <div>
                        <nav className="mt-10 list-none space-y-4 text-[17px] font-medium flex flex-col">
                            {/* user */}
                            {role === "user" && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myProfile"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                    ? "bg-[#5a45aa] text-white"
                                                    : "hover:bg-[#5a45aa] hover:hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <CgProfile /> My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/addProduct"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                    ? "bg-green-100 text-white"
                                                    : "hover:bg-gray-200 hover:hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <FaPlus /> Add Product
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myProduct"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                    ? "bg-green-100 text-white"
                                                    : "hover:bg-gray-200 hover:hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <FaBox /> My Product
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            {/* moderator */}
                            {role === "moderator" && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/productReviewQueue"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                    ? "bg-green-100 text-white"
                                                    : "hover:bg-gray-200 hover:hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <FaChartPie /> Product Review Queue
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/reportedContent"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                    ? "bg-green-100 text-white"
                                                    : "hover:bg-gray-200 hover:hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <MdReportProblem /> Reported Contents
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            {/* admin */}
                            {role === "admin" && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/statistics"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                    ? "bg-[#5a45aa] text-white"
                                                    : "hover:bg-[#5a45aa] hover:hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <FaChartPie /> Statistics
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageUsers"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg  ${isActive
                                                    ? "bg-[#5a45aa] text-white"
                                                    : "hover:bg-[#5a45aa] hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <FaUsers /> Manage Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard/manageCoupon"
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 px-4 py-2 rounded-lg  ${isActive
                                                    ? "bg-[#5a45aa] text-white"
                                                    : "hover:bg-[#5a45aa] hover:text-white text-gray-400"
                                                }`
                                            }
                                        >
                                            <FaTicketAlt /> Manage Coupon
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            <div className="divider"></div>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg  ${isActive
                                            ? "bg-[#5a45aa] text-white"
                                            : "hover:bg-[#5a45aa] hover:text-white text-gray-400"
                                        }`
                                    }
                                >
                                    <FaTicketAlt /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/LogOut"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-lg  ${isActive
                                            ? "bg-[#5a45aa] text-white"
                                            : "hover:bg-[#5a45aa] hover:hover:text-white text-gray-400"
                                        }`
                                    }
                                >
                                    <FaTicketAlt /> LogOut
                                </NavLink>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
