import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import CouponCard from '../../../Components/Dashboard/Admin/CouponCard';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

const ManageCoupon = () => {
    const axiosSecure = useAxiosSecure();
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle modal visibility
    const showModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleCoupon = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const couponCode = form.couponCode.value;
        const expiryDate = form.expiryDate.value;
        const description = form.description.value;
        const discountAmount = parseInt(form.discountAmount.value);
        
        const couponData = {
            couponCode,
            expiryDate,
            description,
            discountAmount
        }

         // coupon data save database
                try {
                    const res = await axiosSecure.post("/coupon",couponData)
                    if (res.data.insertedId) {
                        toast.success("Coupon successfully added")
                        form.reset();
        
                    }
        
                } catch (err) {
                    console.log(err)
                }
    }

    // get all coupon data
    const { data: coupons = [], isLoading,refetch } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/coupon`)
            return data.data;
        }

    })


    // coupon data delete from UI and database
        const handleDeleteCoupon = (id) =>{
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(async(result) => {
                if (result.isConfirmed) {
                    const res = await axiosSecure.delete(`/coupon/${id}`)
                    if(res.data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: " Coupon has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                }
              });
        }


    
    if(isLoading) return <LoadingSpinner/>

    return (
        <div className="pt-3 bg-gray-50 h-screen px-4 md:px-6 lg:px-10">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-bold mb-4">Manage Coupon</h1>
                <button onClick={showModal} className="btn">Add Coupon</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="text-left py-3 px-4">Coupon Code</th>
                            <th className="text-left py-3 px-4">Expiry Date</th>
                            <th className="text-left py-3 px-4">Description</th>
                            <th className="text-left py-3 px-4">Discount</th>
                            <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add your coupons here */}
                        {
                            coupons?.map(coupon => <CouponCard key={coupon._id} coupon={coupon} handleDeleteCoupon={handleDeleteCoupon} refetch={refetch}/>)
                        }
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <dialog open id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Coupon</h3>
                        {/* Add form for coupon */}
                        <form method="dialog" onSubmit={handleCoupon} className="py-4">
                            <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700">
                                Coupon Code
                            </label>
                            <input
                                name="couponCode"
                                type="text"
                                className="input input-bordered w-full mb-2"
                                placeholder="Enter coupon code"
                            />

                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                name="expiryDate"
                                type="date"
                                className="input input-bordered w-full mb-2"
                            />

                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full mb-2"
                                placeholder="Enter coupon description"
                            ></textarea>

                            <label htmlFor="discountAmount" className="block text-sm font-medium text-gray-700">
                                Discount Amount
                            </label>
                            <input
                                name="discountAmount"
                                type="number"
                                className="input input-bordered w-full mb-2"
                                placeholder="Enter discount amount"
                            />

                            <div className="modal-action">
                                <button
                                    className="btn btn-primary"
                                   
                                >
                                    Add Coupon
                                </button>
                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ManageCoupon;
