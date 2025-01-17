import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const { user,signOutUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // user sign out
    const handleSignOut = async () => {
        try {
            await signOutUser();  // Wait for the sign-out process to complete
            navigate("/login"); // Redirect to register page
        } catch (error) {
            console.error('Error during sign out:', error);
        }
    };
    



    return (
        <nav className="py-5 bg-[#262626] w-full text-white  fixed top-0 z-50">
            <div className="w-11/12 mx-auto flex flex-wrap items-center justify-between ">
                <div className="flex items-center">

                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap">Product Hunt</h2>
                </div>

                <div className="flex  md:order-2 items-center">
                    {
                        user && user?.email ? <button onClick={toggleDropdown} className="flex items-center text-sm rounded-full ">
                            <img
                                referrerPolicy='no-referrer'
                                src={user?.photoURL}
                                alt="User"
                                className="w-[42px] h-[42px] rounded-full"
                            />
                        </button> : <Link to="/login">
                            <button className='px-4 py-2 text-white font-semibold border border-gray-500 rounded-lg hover:bg-[#262626]  transition duration-300'>Login</button>
                        </Link>
                    }


                    {
                        isDropdownOpen && user && (
                            <div className="z-50 my-4 text-base list-none bg-[#262626]  rounded shadow w-44 absolute top-[66px] right-[64px]">
                                <div className="px-4 py-3">
                                    <span className="block text-sm">{user?.displayName}</span>
                                </div>
                                <ul className="py-1">
                                    <li><Link to="/dashboard" className="block px-4 py-2 text-sm hover:text-[#F5A623]">Dashboard</Link></li>
                                    <li><Link onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm hover:text-[#F5A623]">LogOut</Link></li>
                                </ul>
                            </div>
                        )
                    }

                    <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer text-4xl ">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto  ${open
                    ? " "
                    : "hidden"
                    }`}>
                    <ul className="flex flex-col mt-4 md:mt-0 space-y-2 md:space-y-0  md:flex-row md:space-x-8 text-[18px]">
                        <li><NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-[#F5A623]' : 'hover:text-[#F5A623]'}`}>Home</NavLink></li>
                        <li><NavLink to="/product" className={({ isActive }) => ` ${isActive ? 'text-[#F5A623]' : 'hover:text-[#F5A623]'}`}>Product</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
