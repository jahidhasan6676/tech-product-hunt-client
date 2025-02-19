import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import ProfileModal from "../../../modal/ProfileModal";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const Profile = () => {
    const { user } = useAuth();
    const [role,isLoading] = useRole();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if(isLoading) return <LoadingSpinner/>
    return (
        <div className="mx-auto p-2 md:p-6">
            <div className="bg-white border p-2 md:p-10 space-y-10 rounded-lg">
                {/* Profile Section */}
                <div className="border rounded-2xl shadow p-2 md:p-6  bg-white">
                    <h2 className="text-2xl font-bold mb-4">Profile</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                className=" w-16 md:w-20 h-16 md:h-20 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{user?.displayName}</h3>
                                <p className="text-gray-600">{role} | Cumilla</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-4 text-gray-600">
                            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                        </div>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="border rounded-2xl shadow p-2 md:p-6  bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Personal Information</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="border px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                            Edit
                        </button>
                        
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-gray-500 text-sm">First Name</p>
                            <p className="font-semibold"></p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Email Address</p>
                            <p className="font-semibold"></p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Phone</p>
                            <p className="font-semibold"></p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Country</p>
                            <p className="font-semibold"></p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">City</p>
                            <p className="font-semibold"></p>
                        </div>
                        <div className="">
                            <p className="text-gray-500 text-sm">Bio</p>
                            <p className="font-semibold"></p>
                        </div>
                    </div>



                </div>



            </div>
            <ProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Profile;
