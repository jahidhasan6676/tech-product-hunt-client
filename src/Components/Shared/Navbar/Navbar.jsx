import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [open, setOpen] = useState(false);
    
    

    

    return (
        <nav className="py-5 bg-indigo-100 w-full  fixed top-0 z-50">
            <div className="w-11/12 mx-auto flex flex-wrap items-center justify-between ">
                <div className="flex items-center">

                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap">Product Hunt</h2>
                </div>
                
                <div className="flex  md:order-2 items-center">
                    <button className='px-4 py-2 text-blue-500 font-semibold border border-gray-500 rounded-lg hover:bg-gray-800  transition duration-300'>Login</button>
                    <button onClick={toggleDropdown} className="flex items-center text-sm rounded-full ">
                        <img
                            src="https://img.freepik.com/premium-photo/excited-man-pointing-chest_251859-1951.jpg?semt=ais_hybrid"
                            alt="User"
                            className="w-12 h-12 rounded-full"
                        />
                    </button>
                    {
                        isDropdownOpen && (
                            <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 absolute top-[70px] right-[64px]">
                                <div className="px-4 py-3">
                                    <span className="block text-sm">Bonnie Green</span>
                                </div>
                                <ul className="py-1">
                                    <li><Link className="block px-4 py-2 text-sm hover:bg-gray-100">Dashboard</Link></li>
                                    <li><Link className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">LogOut</Link></li>
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
                        <li><NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Home</NavLink></li>
                        <li><NavLink to="/product" className={({ isActive }) => ` ${isActive ? 'text-blue-500' : 'hover:text-blue-400'}`}>Product</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
