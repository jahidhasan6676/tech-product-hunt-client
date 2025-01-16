
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full mx-auto pt-16 bg-gray-900">
            <div className="w-11/12 mx-auto space-y-6 md:space-y-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Section 1 */}
                <div className="flex flex-col">
                    <img className='w-[80px]' src="hello" alt="" />
                    <p className="mt-2 text-gray-200">
                        Product Hunt Ltd.
                        <br />
                        Nurturing a passion for reading and knowledge since 1992.
                    </p>

                    {/* social icon */}
                    <div className="flex space-x-4 text-xl mt-4 text-white">
                        <Link to="#" className="">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="#" className="">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" className="">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Service</h6>
                    <nav className="flex flex-col gap-2">
                        <Link to="/" className="text-gray-300 hover:text-blue-400">Home</Link>
                        <Link to="/allBooks" className="text-gray-300 hover:text-blue-400">All Books</Link>
                        <Link to="/addBooks" className="text-gray-300 hover:text-blue-400">Add Books</Link>
                        <Link to="/borrowBooks" className="text-gray-300 hover:text-blue-400">Borrowed Books</Link>
                        <Link to="/helpCenter" className="text-gray-300 hover:text-blue-400">Help center</Link>

                    </nav>
                </div>

                {/* Section 3 */}
                <div className=" text-white">
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Contact Us</h6>
                    <nav className="flex flex-col gap-2">
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-phone"></i> +123 456 7890
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-envelope"></i> books@librarywebsite.com
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-map-marker-alt"></i> 123 Street, Dhaka, Bangladesh
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i class="fa-solid fa-hourglass-half"></i> Sunday-Wednesday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-300 hover:text-blue-400">
                            <i className="fas fa-clock"></i> Sat: 10:00 AM - 4:00 PM
                        </p>
                    </nav>
                </div>

                {/* Section 4 */}

                <div>
                    <h6 className="text-lg font-semibold text-gray-400 mb-3">Subscribe to Our Newsletter</h6>
                    <p className="text-sm text-gray-300 mb-3">
                        Stay updated with our latest collections, book recommendations, and events.
                    </p>
                    <fieldset className="form-control">
                        <label className="label">
                            <span className="text-gray-300">Enter your email address</span>
                        </label>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="yourname@example.com"
                                className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </div>

                
            </div>

            <div className="text-center block w-full mt-8 pb-3">
                <div className="divider w-11/12 mx-auto"></div>
                <p className="text-sm text-gray-400 pb-3">
                    &copy; {new Date().getFullYear()} Books Lovers. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;