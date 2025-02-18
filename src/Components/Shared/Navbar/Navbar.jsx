import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useRole from '../../../Hooks/useRole';
import { LiaProductHunt } from 'react-icons/lia';
import { Search } from 'lucide-react';
import SearchBar from '../../../Hooks/SearchBar';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [role] = useRole();

    // user sign out
    const handleSignOut = async () => {
        try {
            await signOutUser();
            navigate("/login");
        } catch (error) {
            console.error('Error during sign out:', error);
        }
    };




    return (
        <nav className="py-3 bg-white border-b w-full sticky top-0 z-50 backdrop:blur-sm">
            <div className="w-11/12 mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center">

                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap flex items-center gap-1"><LiaProductHunt className='text-4xl' /><i>Tech Hunt</i></h2>
                </div>

                <div className="flex  md:order-2 items-center">
                    <SearchBar/>
                    {
                        user && user?.email ? <button onClick={toggleDropdown} className="flex items-center text-sm rounded-full ">
                            <img
                                referrerPolicy='no-referrer'
                                src={user?.photoURL}
                                alt="User"
                                className="w-[42px] h-[42px] rounded-full"
                            />
                        </button> : <Link to="/login">
                            <button className='px-4 py-2 font-semibold border border-gray-500 rounded-lg  transition duration-300'>Login</button>
                        </Link>
                    }


                    {
                        isDropdownOpen && user && (
                            <div className="z-50 my-4 text-base list-none bg-white rounded-sm shadow w-44 absolute top-[51px] right-[64px]">
                                <div className="px-4 py-3">
                                    <span className="block">{user?.displayName}</span>
                                </div>
                                <ul className="py-1">
                                    {user && role === 'admin' && <li><Link to="/dashboard/manageUsers" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>}
                                    {user && role === 'moderator' && <li><Link to="/dashboard/productReviewQueue" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>}
                                    {user && role === 'user' && <li><Link to="/dashboard/myProfile" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>}
                                    <hr />
                                    <li><Link onClick={handleSignOut} className="block w-full text-left px-4 py-2 hover:bg-gray-100">LogOut</Link></li>
                                </ul>
                            </div>
                        )
                    }

                    <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer text-4xl flex items-center">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto  ${open
                    ? ""
                    : "hidden"
                    }`}>

                    <ul className="flex flex-col mt-4 md:mt-0 space-y-2 md:space-y-0  md:flex-row md:space-x-6 text-[18px]">
                        <li><NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-[#F5A623]' : 'hover:text-[#F5A623]'}`}>Home</NavLink></li>
                        <li><NavLink to="/allAcceptedProduct" className={({ isActive }) => ` ${isActive ? 'text-[#F5A623]' : 'hover:text-[#F5A623]'}`}>All Product</NavLink></li>
                        <li><NavLink to="/allAcceptedProduct" className={({ isActive }) => ` ${isActive ? 'text-[#F5A623]' : 'hover:text-[#F5A623]'}`}>Contact</NavLink></li>
                    </ul>
                    

                    {/* Search Bar (Mobile) */}
                    <div className="pt-3 md:hidden">
                        <form className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="border rounded-full py-2 pl-10 pr-4 w-[220px] text-gray-700 focus:outline-none focus:ring-0"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
