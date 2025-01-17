import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";


const Sidebar = () => {
    const [isActive, setActive] = useState(false)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
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
                            <li><NavLink to="/dashboard/userHome">User Home</NavLink></li>
                            <li><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                            <li><NavLink>My Product</NavLink></li>
                            <hr />
                            <li>Product Review</li>
                            <li>Product Report</li>
                            <hr />
                            <li>Statistics</li>
                            <li>Manage Users</li>
                            <li>Manage Coupons</li>
                        </nav>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Sidebar;