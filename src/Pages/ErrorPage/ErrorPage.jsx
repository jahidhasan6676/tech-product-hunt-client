import { Link } from "react-router-dom";
import { useState } from "react";
import { FiHome, FiRefreshCw } from "react-icons/fi";

const ErrorPage = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <div className="relative">
                {/* Animated 404 Text */}
                <h1
                    className={`text-9xl font-extrabold text-gray-300 animate-pulse ${hover ? "text-red-400" : ""
                        }`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    404
                </h1>
                {/* Floating Message */}
                <p className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-gray-600">
                    Oops! Page Not Found
                </p>
            </div>

            {/* Error Description */}
            <p className="text-gray-500 mt-6">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            {/* Button Options */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 flex items-center gap-2 transition"
                >
                    <FiHome className="text-lg" /> Back to Home
                </Link>

                {/* Reload Page Button */}
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 flex items-center gap-2 transition"
                >
                    <FiRefreshCw className="text-lg" /> Reload Page
                </button>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-200 to-gray-300 animate-gradient-x"></div>
        </div>
    );
};

export default ErrorPage;