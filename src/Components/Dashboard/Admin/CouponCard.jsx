import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const CouponCard = ({ coupon, handleDeleteCoupon,refetch }) => {
    const axiosSecure = useAxiosSecure();
    // State to manage modal visibility
        const [isModalOpen, setIsModalOpen] = useState(false);
        // Toggle modal visibility
        const showModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);

    const { couponCode, expiryDate, description, discountAmount, _id } = coupon || {};
    
    
    // coupon update data ui and database
    const handleUpdateCouponData = async(e)=>{
            e.preventDefault();
            const form = e.target;
            const couponCode = form.couponCode.value;
            const expiryDate = form.expiryDate.value;
            const description = form.description.value;
            const discountAmount = parseInt(form.discountAmount.value);
            
            const couponUpdateData = {
                couponCode,
                expiryDate,
                description,
                discountAmount
            }
    
             // coupon data save database
                    try {
                        const res = await axiosSecure.put(`/update-coupon/${_id}`,couponUpdateData)
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            toast.success("Coupon successfully Update")
                            form.reset();
                            refetch()
            
                        }
            
                    } catch (err) {
                        console.log(err)
                    }
        }


    return (
        <>

            <tr className="border-t">
                <td className="py-3 px-4">{couponCode}</td>
                <td className="py-3 px-4">{expiryDate}</td>
                <td className="py-3 px-4">{description.split(20)}...</td>
                <td className="py-3 px-4">{discountAmount}%</td>
                <td className="py-3 px-4">
                    <Link>
                        <button

                            onClick={showModal}
                            className="bg-blue-500 text-white px-2 py-2 rounded-md mr-2 hover:bg-blue-600">
                            <FaRegEdit />
                        </button>
                    </Link>

                    <button
                        onClick={() => handleDeleteCoupon(_id)}
                        className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600">
                        <MdDelete />
                    </button>

                </td>
            </tr>

            {/* Modal */}
            {isModalOpen && (
                <dialog open id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Coupon</h3>
                        {/* Add form for coupon */}
                        <form method="dialog" onSubmit={handleUpdateCouponData} className="py-4">
                            <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700">
                                Coupon Code
                            </label>
                            <input
                                name="couponCode"
                                type="text"
                                defaultValue={couponCode}
                                className="input input-bordered w-full mb-2"
                                placeholder="Enter coupon code"
                            />

                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                name="expiryDate"
                                type="date"
                                defaultValue={expiryDate}
                                className="input input-bordered w-full mb-2"
                            />

                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                name="description"
                                defaultValue={description}
                                className="textarea textarea-bordered w-full mb-2"
                                placeholder="Enter coupon description"
                            ></textarea>

                            <label htmlFor="discountAmount" className="block text-sm font-medium text-gray-700">
                                Discount Amount
                            </label>
                            <input
                                name="discountAmount"
                                type="number"
                                defaultValue={discountAmount}
                                className="input input-bordered w-full mb-2"
                                placeholder="Enter discount amount"
                            />

                            <div className="modal-action">
                                <button
                                    className="btn btn-primary"

                                >
                                    Update Coupon
                                </button>
                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </>

    );
};

export default CouponCard;