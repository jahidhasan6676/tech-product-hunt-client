import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import { FaCopy } from 'react-icons/fa';

// Function to generate a random light color for better text visibility
const getRandomColor = () => {
    const colors = [
        'from-teal-400 to-teal-600',
        'from-pink-400 to-pink-600',
        'from-yellow-400 to-yellow-600',
        'from-green-400 to-green-600',
        'from-indigo-400 to-indigo-600',
        'from-red-400 to-red-600'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default function CouponCard() {
    const axiosSecure = useAxiosSecure();
    const { data: coupons = [], isLoading } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/public-coupon`);
            return data.data;
        }
    });

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        alert(`Coupon Code "${code}" Copied!`);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className='pb-20 w-11/12 mx-auto '>
                <h2 className="w-full text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
                    Grab Your Discount Coupons 
                </h2>
            <div className='flex flex-col sm:flex-row justify-start sm:justify-center'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-[250px] md:w-[350px] h-[350px] sm:self-center self-start mx-0 sm:mx-auto"
                >
                    {coupons?.map(coupon => (
                        <SwiperSlide key={coupon._id} className={`rounded-2xl shadow-xl bg-gradient-to-r ${getRandomColor()} p-4 md:p-6 flex justify-center items-center`}>
                            <div className="w-full h-full flex flex-col justify-between items-center bg-white/20 backdrop-blur-lg rounded-xl p-3 md:p-5 border border-white/30 shadow-lg">
                                <h3 className="text-2xl font-bold text-white tracking-wide text-center">
                                    {coupon.couponCode}
                                </h3>
                                <p className="text-4xl font-extrabold text-white text-center">
                                    {coupon.discountAmount}% OFF
                                </p>
                                <p className="text-white text-sm font-medium italic text-center">
                                    {coupon.description}
                                </p>
                                <p className="text-white mt-4 text-sm font-semibold">
                                    Expires: {new Date(coupon.expiryDate).toLocaleDateString()}
                                </p>
                                <button onClick={() => handleCopy(coupon.couponCode)}
                                    className="mt-4 flex items-center gap-2 bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-white/50">
                                    <FaCopy /> Copy Code
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}







