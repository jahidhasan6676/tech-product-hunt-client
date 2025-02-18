import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

import image1 from "../../assets/banner1.jpg";
import image2 from "../../assets/banner2.jpg";
import image3 from "../../assets/banner3.jpg";

const HomeSlider = () => {
    return (
        <div className="pb-20 relative">

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide"
                }}
                modules={[Navigation, Autoplay]}
                className='relative group'
            >

                {/* Slide 1 */}
                <SwiperSlide style={{
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    height: "550px",
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div className='flex flex-col justify-center items-center text-center w-full h-[550px] bg-gray-900/80 text-white'>
                        <motion.h2 
                            className='text-3xl md:text-5xl font-bold'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Unleash the Power of AI
                        </motion.h2>
                        <motion.p 
                            className='text-lg mt-4 max-w-2xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            Discover AI-driven tools that boost productivity, creativity, and innovation. Experience the next-gen solutions today.
                        </motion.p>
                        <motion.button 
                            className='mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            Explore Now
                        </motion.button>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide style={{
                    backgroundImage: `url(${image2})`,
                    backgroundSize: 'cover',
                    height: "550px",
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div className='flex flex-col justify-center items-center text-center w-full h-[550px] bg-gray-900/80 text-white'>
                        <motion.h2 
                            className='text-3xl md:text-5xl font-bold'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Work Smarter, Not Harder
                        </motion.h2>
                        <motion.p 
                            className='text-lg mt-4 max-w-2xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            Enhance your workflow with top-notch productivity apps and automation tools designed for efficiency.
                        </motion.p>
                        <motion.button 
                            className='mt-6 px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide style={{
                    backgroundImage: `url(${image3})`,
                    backgroundSize: 'cover',
                    height: "550px",
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div className='flex flex-col justify-center items-center text-center w-full h-[550px] bg-gray-900/80 text-white'>
                        <motion.h2 
                            className='text-3xl md:text-5xl font-bold'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Explore the Future of Technology
                        </motion.h2>
                        <motion.p 
                            className='text-lg mt-4 max-w-2xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            Stay ahead with cutting-edge innovations in AI, robotics, and digital transformation.
                        </motion.p>
                        <motion.button 
                            className='mt-6 px-6 py-3 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            Get Started
                        </motion.button>
                    </div>
                </SwiperSlide>

                {/* Left Navigation Button */}
                <div className="absolute top-[50%] group-hover:left-5 -left-[23rem] z-10 button-prev-slide duration-500 text-white w-[40px] h-[40px] bg-black/70 hover:bg-black grid place-items-center rounded-full cursor-pointer">
                    <FaArrowLeft size={20} />
                </div>

                {/* Right Navigation Button */}
                <div className="absolute top-[50%] group-hover:right-5 -right-[23rem] z-10 button-next-slide duration-500 text-white w-[40px] h-[40px] bg-black/70 hover:bg-black grid place-items-center rounded-full cursor-pointer">
                    <FaArrowRight size={20} />
                </div>

            </Swiper>
        </div>
    );
};

export default HomeSlider;
