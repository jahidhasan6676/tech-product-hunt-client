import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <section className="py-20 bg-gray-100">
            <div className="w-11/12 mx-auto max-w-7xl">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Tech Insights & AI Blogs</h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    Stay ahead in the tech world with the latest AI advancements, software tools, and innovative trends.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                            
                            <div className="p-5">
                                <h3 className="text-2xl font-semibold text-gray-800">{blog.title}</h3>
                                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
