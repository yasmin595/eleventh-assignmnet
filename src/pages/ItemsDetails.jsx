import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { MdOutlineTitle, MdOutlineLocationOn, MdOutlineDescription } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineMail, AiOutlineUser, AiOutlineCheckCircle } from "react-icons/ai";

const ItemsDetails = () => {
  const { postType, _id, title, thumbnail, category, description, location, date, name, email, status } = useLoaderData();
  const { user } = use(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [recoveredLocation, setRecoveredLocation] = useState('');

  const handleRecoverySubmit = async (e) => {
    e.preventDefault();

    const recoveredInfo = {
      itemId: _id,
      postType,
      title,
      thumbnail,
      category,
      description,
      location,
      date,
      status: 'recovered',
      recoveredLocation,
      recoveredDate,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    };

    await fetch('https://eleventh-assignment-server-eta.vercel.app/recover', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recoveredInfo)
    });

    const res = await fetch(`https://eleventh-assignment-server-eta.vercel.app/items/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'recovered' })
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      Swal.fire('Success!', 'Item marked as recovered.', 'success');
      setShowModal(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="shadow-lg rounded-xl border border-gray-100 transition hover:shadow-xl duration-300 p-4 grid md:grid-cols-2 gap-6 items-center bg-white">
        {/* Image */}
        <div className="flex justify-center">
          <img src={thumbnail} alt="Item" className="rounded-md max-h-[300px] object-cover" />
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-green-600">
            <AiOutlineCheckCircle className="inline-block mr-2" />
            {postType}
            <span className="ml-2 badge badge-outline badge-info">{category}</span>
          </h2>

          <p className="flex items-center text-sm text-gray-700">
            <MdOutlineTitle className="mr-2 text-xl text-gray-500" />
            <strong>Title:</strong> {title}
          </p>

          <p className="flex items-center text-sm text-gray-700">
            <MdOutlineDescription className="mr-2 text-xl text-gray-500" />
            <strong>Description:</strong> {description}
          </p>

          <p className="flex items-center text-sm text-gray-700">
            <MdOutlineLocationOn className="mr-2 text-xl text-gray-500" />
            <strong>Location:</strong> {location}
          </p>

          <p className="flex items-center text-sm text-gray-700">
            <AiOutlineCalendar className="mr-2 text-xl text-gray-500" />
            <strong>Date:</strong> {date}
          </p>

          <p className="flex items-center text-sm text-gray-700">
            <AiOutlineUser className="mr-2 text-xl text-gray-500" />
            <strong>Name:</strong> {name}
          </p>

          <p className="flex items-center text-sm text-gray-700">
            <AiOutlineMail className="mr-2 text-xl text-gray-500" />
            <strong>Email:</strong> {email}
          </p>

          <p className="text-sm">
            <strong>Status:</strong>{' '}
            <span className={`badge ${status === 'recovered' ? 'badge-success' : 'badge-warning'} text-white`}>
              {status || 'Not recovered yet'}
            </span>
          </p>

          {/* Action Button */}
          <div className="mt-4">
            {status === 'recovered' ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-disabled btn-sm"
              >
                Already Recovered
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-sm bg-gradient-to-r from-green-500 to-lime-500 text-white shadow-md hover:shadow-lg"
                onClick={() => setShowModal(true)}
              >
                {postType === 'lost Items' ? 'Found This!' : 'This is Mine!'}
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <form onSubmit={handleRecoverySubmit} className="bg-white p-6 rounded-md shadow-md space-y-4 w-[90%] max-w-md">
            <h2 className="text-xl font-bold text-green-700">Recovery Info</h2>

            <label className="text-sm font-semibold">Recovered Location</label>
            <input
              type="text"
              required
              value={recoveredLocation}
              onChange={(e) => setRecoveredLocation(e.target.value)}
              className="input input-bordered w-full"
            />

            <label className="text-sm font-semibold">Recovered Date</label>
            <DatePicker
              selected={recoveredDate}
              onChange={(date) => setRecoveredDate(date)}
              className="input input-bordered w-full"
            />

            <label className="text-sm font-semibold">Recovered By</label>
            <input type="text" value={user.displayName} readOnly className="input w-full" />
            <input type="email" value={user.email} readOnly className="input w-full" />

            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn btn-success btn-sm">Confirm Recovery</button>
              <button type="button" onClick={() => setShowModal(false)} className="btn btn-error btn-sm">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemsDetails;
