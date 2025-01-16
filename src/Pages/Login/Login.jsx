
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";


const Login = () => {
    const { loginUser, setUser } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      

        // clear error massage
        setError("");

        // user login
        loginUser(email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
                navigate("/")
                toast.success("Successfully login")
            })
            .catch(err => {
                setError(err.code)
            })

    }

    return (
        <div className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50">
            <div className="w-11/12  mx-auto space-y-4 lg:flex justify-around items-center">
                
                    <div className=" p-6 max-w-md w-full mx-auto bg-white rounded-lg shadow-lg">
                        {/* Title */}
                        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                            Login
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600 "
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600"
                                />
                                {
                                    error && <p className='text-xs text-red-500'>Invalid Email or Password! </p>
                                }
                            </div>

                            {/* Forget Password */}
                            <div className="text-right">
                                <a
                                    href="#"
                                    className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Login
                            </button>

                        </form>
                        {/* Login Link */}
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">
                                Don’t have an account ?
                                <Link to="/register" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Register
                                </Link>
                            </p>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
               
            </div>
        </div>
    );
};

export default Login;