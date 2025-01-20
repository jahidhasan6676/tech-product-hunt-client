
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const ReviewSection = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    const { data: review = [], isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/reviews/${id}`)
            return data.data;
        }

    })

    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <div className="text-center">
                <p className="text-orange-400"> ---what our users are saying--- </p>
                <hr className="w-[300px] mx-auto " />
                <h2 className="text-3xl  text-gray-800 mt-2">TESTIMONIALS</h2>
                <hr className="w-[300px] mx-auto mt-2" />
            </div>

            {
                review.length <= 0 ? <h3 className="text-center mt-10 text-lg">No reviews yet. Be the first to review this product!</h3> : (<Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review?.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center mx-10 md:mx-24 lg:mx-24 mt-14">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                />
                                <p className="py-8">{review?.description}</p>
                                <div className="flex gap-2 items-center">
                                    <img className="w-[50px] h-[50px] rounded-full" src={review?.image} alt="" />
                                    <h3 className="text-2xl text-orange-400">{review?.name}</h3>
    
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>)
            }
        </div>
    );
};

export default ReviewSection;


