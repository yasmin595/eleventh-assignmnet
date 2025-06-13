import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { useLoaderData } from 'react-router';
import { FaEdit } from "react-icons/fa";

const UpdatedTable = () => {
  const { thumbnail, title, category, description, postType, date, location, _id } = useLoaderData();
  const { user } = use(AuthContext);
  const [startDate, setStartDate] = useState(new Date(date));

  const handleUpdateItems = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/items/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Items updated successfully.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
     <div className="p-6 md:p-12 bg-gradient-to-br from-green-100 via-blue-50 to-yellow-100 min-h-screen">
         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-green-300">
           <h2 className="text-4xl font-extrabold text-center text-green-700 mb-10 flex items-center justify-center gap-3">
             <FaEdit className="text-green-600 text-5xl" /> Update New Item
           </h2>
           <form onSubmit={handleUpdateItems} className="space-y-6">
   
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <label className="font-semibold text-green-800">Post Type</label>
                 <input
                   list="postType"
                   name="postType"
                   required
                   defaultValue={postType}
                   className="input input-bordered w-full border-green-400"
                   placeholder="Select or type a post type"
                 />
                 <datalist id="postType">
                   <option value="lost Items" />
                   <option value="found Items" />
                 </datalist>
               </div>
   
               <div>
                 <label className="font-semibold text-green-800">Thumbnail (Image URL)</label>
                 <input
                   type="url"
                   defaultValue={thumbnail}
                   name="thumbnail"
                   required
                   className="input input-bordered w-full border-green-400"
                   placeholder="https://example.com/image.jpg"
                 />
               </div>
   
               <div>
                 <label className="font-semibold text-green-800">Item Title</label>
                 <input
                   type="text"
                   defaultValue={title}
                   name="title"
                   required
                   className="input input-bordered w-full border-green-400"
                   placeholder="Item title"
                 />
               </div>
   
               <div>
                 <label className="font-semibold text-green-800">Category</label>
                 <input
                 defaultValue={category}
                   list="categories"
                   name="category"
                   required
                   className="input input-bordered w-full border-green-400"
                   placeholder="Select or type a category"
                 />
                 <datalist id="categories">
                   <option value="pets" />
                   <option value="Documentation" />
                   <option value="gadgets" />
                   <option value="Bags" />
                   <option value="Accessories" />
                 </datalist>
               </div>
   
               <div>
                 <label className="font-semibold text-green-800">Location</label>
                 <input
                 defaultValue={location}
                   type="text"
                   name="location"
                   required
                   className="input input-bordered w-full border-green-400"
                   placeholder="Where it was lost/found"
                 />
               </div>
   
               <div>
                 <label className="font-semibold text-green-800 p-4">Date</label>
                 <DatePicker
                   selected={startDate}
                   name="date"
                   required
                   onChange={(date) => setStartDate(date)}
                   className="input input-bordered w-full border-green-400"
                 />
               </div>
   
               <div>
                 <label className="font-semibold text-green-800">Your Name</label>
                 <input
                   type="text"
                   name="name"
                   defaultValue={user?.displayName}
                   readOnly
                   className="input input-bordered w-full cursor-not-allowed border-green-400 bg-green-100"
                 />
               </div>
   
               <div>
                 <label className="font-semibold text-green-800">Email</label>
                 <input
                   type="email"
                   name="email"
                   defaultValue={user?.email}
                   readOnly
                   className="input input-bordered w-full cursor-not-allowed border-green-400 bg-green-100"
                 />
               </div>
             </div>
   
             <div>
               <label className="font-semibold text-green-800">Description</label>
               <textarea
                 name="description"
                 defaultValue={description}
                 required
                 className="textarea textarea-bordered w-full border-green-400"
                 placeholder="Provide details about the item..."
                 rows={4}
               ></textarea>
             </div>
   
             <div className="text-center mt-10">
               <input
                 type="submit"
                 value=" Update Item"
                 className="btn bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-green-600 text-white text-lg font-semibold w-full rounded-full shadow-md"
                 data-tooltip-id="update-task-tooltip"
                 data-tooltip-content="Click to Update Item"
               />
               <Tooltip
                 id="update-task-tooltip"
                 place="top"
                 style={{
                   backgroundColor: '#333',
                   color: '#fff',
                   padding: '5px 10px',
                   borderRadius: '4px',
                 }}
               />
             </div>
           </form>
         </div>
       </div>
  );
};

export default UpdatedTable;
