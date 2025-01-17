
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import { imageUpload } from '../../../api/utils';
import { toast } from 'react-toastify';


const UpdateProduct = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: product = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/products/${id}`)
            return data.data;
        }
    })
    

    const handleUpdateForm = async (e) => {
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const images = form.image.files[0];
        const image = await imageUpload(images);
        const description = form.description.value;
        const externalLink = form.externalLink.value;

        const updateData = {
            productName,
            image,
            description,
            externalLink,
        }
        console.log(updateData)

          // data update backend
      try{
       const res =  await axiosSecure.patch(`/update-products/${id}`, updateData)
       if(res.data.modifiedCount){
        toast.success("Data Update Successfully");
       }
      }
      catch (err){
        // console.log(err)
        toast.error(err.message)
      }
    }
    return (
        <div className="w-full min-h-screen p-10 flex flex-col justify-center items-center bg-gray-50 rounded-lg">

            <form onSubmit={handleUpdateForm}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                    {/* product field */}
                    <div>
                        <label className="block text-gray-700">Product Name</label>
                        <input
                            type="text"
                            name='productName'
                            defaultValue={product?.productName}
                            className="w-full p-2 mt-1 border rounded"
                            required
                        />
                    </div>

                    {/* image filed */}
                    <div>
                        <label className="block text-gray-700">Product Image</label>
                        {product?.image && (
                            <img
                                src={product?.image}
                                alt="Current Product"
                                className=" h-[80px] w-[80px] object-cover mt-1 mb-2 rounded"
                            />
                        )}
                        <input
                            type="file"
                            name='image'
                            accept='image/*'
                            className="w-full mt-1"
                            required
                        />

                    </div>

                    {/* description filed */}
                    <div className='lg:-mt-24'>
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            rows="5"
                            name='description'
                            defaultValue={product?.description}
                            className="w-full p-2  border rounded mt-1"
                            required
                        ></textarea>
                    </div>

                    {/* external filed */}
                    <div>
                        <label className="block text-gray-700">External Link</label>
                        <input
                            type="url"
                            name='externalLink'
                            defaultValue={product?.externalLink}
                            className="w-full mt-1 p-2 border rounded"
                        />
                    </div>
                </div>


                <button type="submit" className="w-full mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;