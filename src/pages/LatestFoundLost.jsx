import React from 'react';
import { MdOutlineTitle, MdOutlineDescription } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineCalendar } from 'react-icons/ai';

const LatestFoundLost = ({ item }) => {
  const { thumbnail, title, category, date, postType, _id , location, status} = item;

  return (
    <div className='w-full max-w-4xl my-8 mx-auto p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.50 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
      >
        {/* Image */}
        <div className="md:w-1/3 rounded-2xl">
          <img
            src={thumbnail}
            alt="item"
            className="w-full h-48 p-4 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between md:w-2/3">
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-2">  {postType}</h2>

            <p className="text-sm flex items-center text-gray-600 mb-1">
              <MdOutlineTitle className="text-lg text-green-500 mr-2" />
              <span className="font-medium pr-1">Title:</span>  {title}
            </p>

            <p className="text-sm flex items-center text-gray-600 mb-1">
              <TbCategory className="text-lg text-green-500 mr-2" />
              <span className="font-medium pr-1">Category:</span>  {category}
            </p>

        <p className="flex items-center text-sm text-gray-600">
                  <AiOutlineCalendar className="mr-2 text-xl text-green-500" />
                  <strong>Date:</strong> {date}
                </p>
            <p className="text-sm flex items-start text-gray-600 mb-2">
              <FaMapMarkerAlt className="text-lg text-green-500 mr-2 mt-0.5" />
              <span className="font-medium pr-1">Location:</span>  {location}
            </p>
           <p className="text-sm">
            <strong>Status:</strong>{' '}
            <span className={`badge ${status === 'recovered' ? 'badge-success' : 'badge-warning'} text-white`}>
              {status || 'Not recovered yet'}
            </span>
          </p>
          </div>

          {/* View Details Button */}
          <div className="mt-3">
            <Link to={`/items/${_id}`}>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 font-medium rounded-md hover:bg-green-800 hover:text-white transition">
                <FaEye className="text-sm" />
                View Details
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LatestFoundLost;
