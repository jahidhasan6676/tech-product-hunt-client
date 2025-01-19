import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import useAuth from '../../../Hooks/useAuth';
import { imageUpload } from '../../../api/utils';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const AddProduct = () => {
    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();
    const [tags, setTags] = useState([]);


    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };


    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // form data collection
        const form = e.target;
        const productName = form.productName.value;
        const images = form.image.files[0];
        const image = await imageUpload(images);
        const description = form.description.value;
        const tagInfo = tags.map(tag => tag.text);
        const externalLink = form.externalLink.value;
        const date = new Date();
        const ownerInfo = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
        }

        const productData = {
            productName,
            image,
            description,
            tagInfo,
            externalLink,
            ownerInfo,
            date,
            vote: parseInt(0),
            status: 'pending'
        }

        // product data save database
        try {
            const res = await axiosSecure.post("/product", productData)
            if (res.data.insertedId) {
                toast.success("Product successfully added")
                form.reset();
                setTags([]);

            }

        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className="w-full min-h-screen p-10 flex flex-col justify-center items-center bg-gray-50 rounded-lg">

            <form onSubmit={handleSubmit}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                    {/* product field */}
                    <div>
                        <label className="block text-gray-700">Product Name</label>
                        <input
                            type="text"
                            name='productName'
                            className="w-full p-2 mt-1 border rounded"
                            required
                        />
                    </div>

                    {/* image filed */}
                    <div>
                        <label className="block text-gray-700">Product Image</label>
                        <input
                            type="file"
                            name='image'
                            accept='image/*'
                            className="w-full mt-1"
                            required
                        />

                    </div>

                    {/* description filed */}
                    <div>
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            rows="5"
                            name='description'
                            className="w-full p-2 border rounded mt-1"
                            required
                        ></textarea>
                    </div>
                    {/* owner info */}
                    <div className='flex flex-col'>
                        <label className="block text-gray-700">Owner Info</label>
                        <input
                            defaultValue={user?.displayName}
                            type="text"
                            name='ownerName'
                            placeholder='owner name'
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                            disabled
                        />
                        <input
                            defaultValue={user?.email}
                            type="text"
                            name='email'
                            placeholder='owner email'
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                            disabled
                        />
                        <input
                            defaultValue={user?.photoURL}
                            type="text"
                            name='photoURL'
                            placeholder='owner email'
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                            disabled
                        />

                    </div>

                    {/* tag field */}
                    <div className=''>
                        <label className="block text-gray-700">Tags</label>
                        <ReactTags
                            tags={tags}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            inputFieldPosition="inline"
                            placeholder="Add a tag"
                            classNames={{
                                tags: 'flex flex-wrap max-w-full ',
                                tag: 'bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2',
                                tagInput: 'border-none outline-none flex-1 pt-1',
                                tagInputField: 'border border-gray-300 rounded p-2',
                                remove: 'ml-1 text-white cursor-pointer',
                            }}

                        />
                    </div>
                    {/* external filed */}
                    <div>
                        <label className="block text-gray-700">External Link</label>
                        <input
                            type="url"
                            name='externalLink'
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

export default AddProduct;
