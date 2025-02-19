import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedBlog = data.find((post) => post.id === parseInt(id));
                setBlog(selectedBlog);
            });
    }, [id]);

    if (!blog) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <section className="py-20">
            <div className="w-11/12 md:w-8/12 mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
                <p className="text-gray-600 mt-5">{blog.excerpt}</p>

                {/* Image Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
                    {blog.image.slice(0, 2).map((img, index) => (
                        <img key={index} src={img} alt={`Blog ${index + 1}`} className="w-full h-72 object-cover rounded-lg" />
                    ))}
                </div>

                {/* Blog Description */}
                <p className="text-gray-700 leading-relaxed">{blog.description}</p>

                {/* Comment Section */}
                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-800">Leave a Comment</h3>
                    <textarea
                        className="w-full border p-3 mt-3 rounded-lg focus:outline-none focus:ring-0"
                        placeholder="Write your comment here..."
                        rows="4"
                    ></textarea>
                    <button className="mt-4 px-6 py-2 bg-[#5a45aa] text-white font-semibold rounded-lg hover:bg-[#5a45aa] transition">
                        Submit Comment
                    </button>
                </div>
            </div>
        </section>
    );
}
