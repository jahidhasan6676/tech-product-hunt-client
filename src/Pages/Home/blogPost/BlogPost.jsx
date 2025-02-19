import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";



export default function BlogPost() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    

    return (
        <section className="pb-20">
            <div className="w-11/12  mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Latest Tech Blogs</h2>
                <p className="text-center text-gray-600 mb-10">
                    Stay updated with the latest technology trends, AI tools, and web development insights.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {blog.map((post) => (
                        <div key={post.id} className="bg-white/50 rounded-lg overflow-hidden transition">
                            {/* Automatic Swiper Slider */}
                            <Swiper
                                autoplay={{
                                    delay: 2000, 
                                    disableOnInteraction: false, 
                                }}
                                pagination={{ clickable: true }}
                                loop={true}
                                modules={[Autoplay,Pagination]}
                                className="w-full h-56"
                            >
                                {post?.image?.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-56 object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="mt-5">
                                <h3 className="text-lg font-medium text-gray-800">{post.title}</h3>
                                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                                <Link
                                    to="/blog"
                                    className="mt-4 inline-block bg-[#5a45aa] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#5a45aa] transition"
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
