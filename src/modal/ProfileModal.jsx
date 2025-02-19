import { useState } from "react";

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold">Edit Personal Information</h2>
        <p className="text-gray-500 text-sm mb-4">Update your details to keep your profile up-to-date.</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700">Social Links</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <input type="text" placeholder="Facebook" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="X.com" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="LinkedIn" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="Instagram" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700">Personal Information</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <input type="text" placeholder="Name" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="email" placeholder="Email Address" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="Phone" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="Country" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="City" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
              <input type="text" placeholder="Bio" className="border p-2 rounded w-full focus:outline-none focus:ring-0" />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Close</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
