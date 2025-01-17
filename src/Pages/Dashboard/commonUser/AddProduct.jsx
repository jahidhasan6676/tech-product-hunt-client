import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import useAuth from '../../../Hooks/useAuth';

const AddProduct = () => {
    const {user} = useAuth();
  const [tags, setTags] = useState([]);

 
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i)); 
  };
 
  const handleAddition = (tag) => {
    setTags([...tags, tag]); 
  };
  console.log(tags)
    return (
        <div className="w-full min-h-screen p-10 flex flex-col justify-center items-center bg-gray-50 rounded-lg">
            
            <form className="">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                    {/* product field */}
                    <div>
                        <label className="block text-gray-700">Product Name</label>
                        <input
                            type="text"
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
                            placeholder='owner name'
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                            disabled
                        />
                        <input
                            defaultValue={user?.email}
                            type="text"
                            placeholder='owner email'
                            className="w-full mt-1 p-2 border rounded bg-gray-100"
                            disabled
                        />
                        <input
                            defaultValue={user?.photoURL}
                            type="text"
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
                                tag: 'bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2',
                                tagInput: 'border-none outline-none flex-1 p-1',
                                remove: 'ml-1 text-white  cursor-pointer',
                              }}
                            
                        />
                    </div>
                    {/* external filed */}
                    <div>
                        <label className="block text-gray-700">External Link</label>
                        <input
                            type="url"
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
