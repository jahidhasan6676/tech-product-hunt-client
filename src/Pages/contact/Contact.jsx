import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto py-20 space-y-8">
            {/* Heading & Short Description */}
            <h2 className="text-3xl font-bold text-center">Get in Touch with Us</h2>
            <p className="text-center text-gray-600">Have questions? Reach out to us anytime!</p>

            {/* Contact Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-4 border p-6 rounded-lg shadow-md bg-gray-100">
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                    <p><strong>Email:</strong> support@techproducthunt.com</p>
                    <p><strong>Phone:</strong> +8801818186676</p>
                    <p><strong>Address:</strong> Cumilla, Chittagoan, Bangladesh</p>

                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-blue-600 text-2xl"><FaFacebook /></a>
                        <a href="#" className="text-blue-400 text-2xl"><FaTwitter /></a>
                        <a href="#" className="text-blue-700 text-2xl"><FaLinkedin /></a>
                        <a href="#" className="text-gray-800 text-2xl"><FaGithub /></a>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-4 border p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold">Send Us a Message</h3>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-0"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-0"
                        required
                    />
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-0">
                        <option>General Inquiry</option>
                        <option>Bug Report</option>
                        <option>Feature Request</option>
                        <option>Other</option>
                    </select>
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring-0"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#5a45aa] text-white p-2 rounded-md hover:bg-[#5a45aa]"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Google Map (Optional) */}
            <div className="w-full h-64 mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                    title="Google Map"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95592831531896!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1df9f5f%3A0xa1f4a9f9d2d0e0b5!2sTech%20Hub!5e0!3m2!1sen!2sus!4v1633919123475!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
