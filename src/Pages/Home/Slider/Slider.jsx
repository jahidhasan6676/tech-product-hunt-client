import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider-3.jpg'



export default function Slider() {
    return (
        <div className=' pb-20 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                {/* 1st  */}

                <SwiperSlide

                    style={{
                        backgroundImage: `url(${slider1})`,
                        backgroundSize: 'cover',
                        height: "550px",
                        width: "full",
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center '>
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Find the Best Tools for Every Need</h2>
                            <p className='text-sm font-medium text-white mt-2'>Whether you're into gaming, productivity, or AI, we've got something for you.</p>
                        </div>
                    </div>

                </SwiperSlide>

                {/* 2nd */}

                <SwiperSlide

                    style={{
                        backgroundImage: `url(${slider2})`,
                        backgroundSize: 'cover',
                        height: "550px",
                        width: "full",
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70 '>
                        <div className='px-3 lg:px-0'>
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Discover the Future of Tech.</h2>
                            <h4 className=' font-medium text-gray-200 mt-2'>Explore cutting-edge web apps, software, and AI tools shared by the community.</h4>
                            
                        </div>
                    </div>

                </SwiperSlide>

                {/* 3rd */}

                <SwiperSlide

                    style={{
                        backgroundImage: `url(${slider3})`,
                        backgroundSize: 'cover',
                        height: "550px",
                        width: "full",
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center '>
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Share Your Favorite Tech Products</h2>
                            <p className='text-sm font-medium text-white mt-2'>Contribute your top tech finds and help others discover innovative solutions.</p>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}