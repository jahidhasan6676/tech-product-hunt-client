import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const [role, isLoading] = useRole();
    

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    if(isLoading) return <LoadingSpinner/>
    
    return (
        <div className="">
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/4ZXzmq5/logo.png'
                                alt='logo'
                                width='100'
                                height='100'
                            />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>


            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}  md:translate-x-0  transition duration-200 ease-in-out`}>
                <div>
                    <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto'>
                        <Link to='/'>
                            <h2>Product Hunt</h2>
                        </Link>
                    </div>

                    {/* Nav Items */}
                    <div>
                        <nav className="mt-10 list-none space-y-4 text-[17px] font-medium text-gray-500 flex flex-col">
                            {/* user */}
                            {role === 'user' && (<>
                                <li><NavLink to="/dashboard/userHome" >User Home</NavLink></li>
                                <li><NavLink to="/dashboard/myProfile" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>My Profile</NavLink></li>
                                <li><NavLink to="/dashboard/addProduct" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Add Product</NavLink></li>
                                <li><NavLink to="/dashboard/myProduct" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>My Product</NavLink></li>
                            </>)}
                           
                            {/* moderator */}
                            {role === 'moderator' && (<>
                                <li><NavLink to="/dashboard/productReviewQueue" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Product Review Queue</NavLink></li>
                                <li><NavLink to="/dashboard/reportedContent" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Reported Contents</NavLink></li>
                                
                            </>)}
                           

                            {role === 'admin' && (<>
                                <li><NavLink to="/dashboard/statistics" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Statistics</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageCoupon" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Manage Coupon</NavLink></li>
                                
                            </>)}
                        </nav>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Sidebar;