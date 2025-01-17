import useAuth from "../../../Hooks/useAuth";


const MyProfile = () => {
    const { user } = useAuth()
    return (

        <div className="flex justify-center  items-center h-screen">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-full p-4">
                    <div className="flex justify-center items-center">
                        <img
                            className="h-24 w-24 rounded-full border-2 border-indigo-500"
                            referrerPolicy="no-referrer"
                            src={user?.photoURL}
                            alt={user?.displayName}
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h1 className="text-xl font-bold text-gray-800">{user?.displayName}</h1>
                        <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>

                    <div className="mt-6 text-center">
                        <button

                            className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-600"
                        >
                            Subscribe for $9.99
                        </button>
                    </div>


                    <div className="mt-6 text-center">
                        <p className="text-green-500 font-semibold">Status: Verified</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;