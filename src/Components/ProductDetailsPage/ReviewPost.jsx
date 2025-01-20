import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ReviewPost = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    const handleReviewSubmit =async (e) =>{
        e.preventDefault();

        // form data collect
        const form = e.target;
        const description = form.description.value;
        const rating = parseInt(form.rating.value);

        const reviewData = {
            name:user?.displayName,
            image:user?.photoURL,
            description,
            rating,
            productId:id,
        }
        console.log(reviewData)

        try{
            const res = await axiosSecure.post(`/review`,reviewData)
            console.log(res.data)
            if(res.data.insertedId){
                toast.success("Review Successfully Submit")
                form.reset();
            }
        }catch (err){
            console.log(err)
        }
    }
    return (
        <div className=" bg-gray-50 py-10 rounded-lg ">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Leave a Review</h2>
        <form  onSubmit={handleReviewSubmit} className=" w-11/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Reviewer Name */}
            <div>
                <label className="block text-gray-600 font-semibold mb-2">Reviewer Name</label>
                <input
                    type="text"
                    defaultValue={user?.displayName}
                    readOnly
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-gray-200 "
                />
            </div>

            {/* Reviewer Image */}
            <div>
                <label className="block text-gray-600 font-semibold mb-2">Reviewer Image</label>
                <input
                    type="text"
                    defaultValue={user?.photoURL}
                    readOnly
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-gray-200"
                />
            </div>

            {/* Review Description */}
            <div>
                <label className="block text-gray-600 font-semibold mb-2">Review Description</label>
                <textarea
                    name="description"
                    placeholder="Share your thoughts..."
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg h-28 resize-none"
                />
            </div>

            {/* Rating */}
            <div className='flex flex-col '>
                <label className="block text-gray-600 font-semibold mb-2">Rating (1 to 5)</label>
                <input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    placeholder="Enter your rating"
                    
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                />

                 {/* Submit Button */}
           
                <button
                    type="submit"
                    className="w-full mt-3 bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                    Submit Review
                </button>
           
            </div>

           
        </form>
    </div>
    );
};

export default ReviewPost;