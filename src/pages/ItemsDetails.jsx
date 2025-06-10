import React, { use, useState } from 'react';
import { Link, useLoaderData, } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


const ItemsDetails = () => {
    const { postType, _id, title, thumbnail, category,description, location, date, name, email, status }= useLoaderData();
              const { user } = use(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [recoveredLocation, setRecoveredLocation] = useState('');
    
    // console.log(item)
    const handleRecoverySubmit = async (e) => {
    e.preventDefault();

    const recoveredInfo = {
      itemId: _id,
      postType:postType,
      title:title,
      thumbnail:thumbnail,
      category:category,
      description:description,
      location:location,
      date:date,
      status:date,



      recoveredLocation,
      recoveredDate,
     
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL
      
    }; 


    // Save to recoveredItems collection
    await fetch('http://localhost:3000/recover', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recoveredInfo)
    });

    // Update item status to recovered
    const res = await fetch(`http://localhost:3000/items/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'recovered' })
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      Swal.fire('Success!', 'Item marked as recovered.', 'success');
      setShowModal(false);
    }
  };

    return (
    <div className='w-11/12 mx-auto my-8 '>
          
       
          <div className="card w-xl card-side bg-base-100 justify-center items-center shadow-sm">
        
          <div>
          
           <img className='w-full flex justify-center items-center py-4'
             src={thumbnail}
             alt="picture" />
        
          </div>
        
         <div className="card-body w-full  ">
           <h2 className="card-title font-semibold "> Post-Type: {postType}</h2>
           <div className=' w-full  '>
               <p className='text-sm font-light flex  items-center p-1 '> <span className='text-xl'></span><span className='font-extrabold p-1'>Title:</span>     {title}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'> </span><span className='font-extrabold p-1'>Category  :</span>  {category}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'></span><span className='font-extrabold p-1'>description  :</span>  {description}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'></span><span className='font-extrabold p-1'>location  :</span>  {location}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'></span><span className='font-extrabold p-1'>date  :</span>  {date}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'></span><span className='font-extrabold p-1'>name  :</span>  {name}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'></span><span className='font-extrabold p-1'>email:</span>  {email}</p>
            <p><strong>Status:</strong> {status || 'Not recovered yet'}</p>
           </div>
          
           <div className="card-actions justify-end">
        {status === 'recovered' ? (
        <button className="btn btn-disabled mt-4">Already Recovered</button>
      ) : (
        <button
          className="btn btn-primary mt-4"
          onClick={() => setShowModal(true)}
        >
          {postType === 'lost Items' ? 'Found This!' : 'This is Mine!'}
        </button>
      )}


          
          {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <form onSubmit={handleRecoverySubmit} className="bg-white p-6 rounded-md shadow-md space-y-4">
            <h2 className="text-xl font-bold">Recovery Info</h2>

            <label>Recovered Location</label>
            <input
              type="text"
              required
              value={recoveredLocation}
              onChange={(e) => setRecoveredLocation(e.target.value)}
              className="input input-bordered w-full"
            />

            <label>Recovered Date</label>
            <DatePicker
              selected={recoveredDate}
              onChange={(date) => setRecoveredDate(date)}
              className="input input-bordered w-full"
            />

            <label>Recovered By</label>
            <input type="text" value={user.displayName} readOnly className="input w-full" />
            <input type="email" value={user.email} readOnly className="input w-full" />

            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn btn-success">Confirm Recovery</button>
              <button type="button" onClick={() => setShowModal(false)} className="btn btn-error">Cancel</button>
            </div>
          </form>
        </div>
      )}
   
           </div>
         </div>
       </div>
                  
               </div>
    );
};

export default ItemsDetails;