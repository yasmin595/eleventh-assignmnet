
import React, { use, useState } from 'react';
import Swal from 'sweetalert2';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { useLoaderData } from 'react-router';

const UpdatedTable = () => {
    const {thumbnail,title,  category, description, postType, date, location, _id  } = useLoaderData();


    // /         {
//     "_id": "6845b9aa57f41355bafb1f14",
//     "postType": "lost Items",
//     "thumbnail": "https://i.ibb.co/NnY9D5cB/download-5.jpg",
//     "title": "lost my gadget",
//     "category": "gadgets",
//     "description": "i lost my gadget",
//     "location": "bangladesh",
//     "date": "06/10/2025",
//     "name": "rifat",
//     "email": "mdrifatnicevedio202@gmail.com"
//   },

       const { user } = use(AuthContext);
    
        
              const [startDate, setStartDate] = useState(new Date());


               const handleUpdateItems = e =>{
        e.preventDefault();

           const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries())
        // console.log(updatedTask);

        // send updated coffee to the db
        fetch(`http://localhost:3000/items/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
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
            <div className='p-24 bg-gray-100 dark:bg-gray-800'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-4xl font-bold text-green-800 bg-white ">Updated Items</h1>
              
            </div>
            <form onSubmit={handleUpdateItems}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4 dropdown ">
                        <label className="label">Post-Type</label>
                         
                        {/* <input type="text" name='category' className="input w-full" placeholder="Category Name" /> */}
                <input
           list="postType"
             name="postType"
          defaultValue={postType}
              className="input input-bordered w-full"
          placeholder="Select or type a PostType"
                required
              />

             <datalist id="postType">
              <option value="lost Items" />
                <option value="found Items" />
           
              </datalist>
                    </fieldset>
                     <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label ">Thumbnail</label>
                        <input type="url" name='thumbnail' defaultValue={thumbnail}  className="input w-full" placeholder="Image URl" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label ">Item Title</label>
                        <input type="text" name='title' defaultValue={title} className="input w-full" placeholder="Task Title" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4 dropdown ">
                        <label className="label">Category</label>
                         
                        {/* <input type="text" name='category' className="input w-full" placeholder="Category Name" /> */}
                <input
           list="categories"
             name="category"
          defaultValue={category}
              className="input input-bordered w-full"
          placeholder="Select or type a category"
                required
              />

             <datalist id="categories">
              <option value="pets" />
                <option value="Documentation" />
              <option value="gadgets" />
           <option value="Bags" />
                  <option value="Accessories" />
              </datalist>
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                          <textarea className="textarea w-full" defaultValue={description}  name='description' placeholder="Job Description"></textarea>
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Location</label>
                        <input type="location" defaultValue={location}  name='location' className="input w-full" placeholder="Location " />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label">Date</label>
                       <DatePicker type='date' name='date' defaultValue={date}
                  selected={startDate}
                    onChange={(date) => setStartDate(date)}
                        customInput={<input className="custom-input" />}
                  />
                    </fieldset>
                   
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border p-4">
                        <label className="label ">Name</label>
                        <input type="text" name='name' readOnly className="input w-full  cursor-not-allowed"  defaultValue={`${user?.displayName}`} placeholder={`${user?.displayName}`}/>
                    </fieldset>
               
               
                </div>
                     <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">User Email</label>
                    <input type="email" name='email' defaultValue={`${user?.email}`}  readOnly className="input w-full cursor-not-allowed" placeholder={`${user?.email}`}  />
                </fieldset>

                <input type="submit"   data-tooltip-id="add-task-tooltip"
          data-tooltip-content="Click to Add Items" className='btn  w-full text-white bg-green-800' value="Add task" />
                <Tooltip
        id="add-task-tooltip"
        place="top"
        style={{ backgroundColor: '#333', color: '#fff', padding: '5px 10px', borderRadius: '4px' }}
      />
                   
            </form>
        </div>
    );
};

export default UpdatedTable;