import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import CouponSingleSlider from "./CouponSingleSlider";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


const CouponSlider = () => {
    const axiosSecure = useAxiosSecure();


    // get all coupon data
    const { data: coupons = [], isLoading, refetch } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/coupon`)
            return data.data;
        }

    })

    return (
        <div className="w-11/12 mx-auto pb-20">

            <div>
                <Swiper spaceBetween={30}
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
                    className='mySwiper'>

                    {
                        coupons?.map(coupon => <SwiperSlide
                            key={coupon._id}>
                           <div className="flex items-center justify-center w-full h-[300px] bg-[#262626]  rounded-lg shadow-lg border border-gray-200 p-8">
                            <div className="text-center">
                                {/* Coupon Code */}
                                <h3 className="text-xl font-semibold text-white tracking-wide mb-4">
                                    <span className="text-sm font-normal">Coupon Code:</span> {coupon.couponCode}
                                    
                                </h3>

                                {/* Discount Amount */}
                                <p className="text-3xl font-bold text-blue-600">
                                    Save {coupon.discountAmount}% Off
                                </p>

                                {/* Description */}
                                <p className="text-white mt-4 text-sm font-medium italic">
                                    {coupon.description}
                                </p>

                                {/* Expiry Date */}
                                <p className="text-white mt-6 text-sm">
                                    <span className="font-semibold">Expires:</span>{" "}
                                    {new Date(coupon.expiryDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>)
                    }

                </Swiper>

            </div>

        </div>
    );
};

export default CouponSlider;