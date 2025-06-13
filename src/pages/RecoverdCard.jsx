import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineUser
} from 'react-icons/ai';
import {
  MdOutlineLocationOn,
  MdOutlineTitle
} from 'react-icons/md';
import { FaRegCheckCircle } from "react-icons/fa";

const RecoveredCard = ({ recoverItem }) => {
  const {
    thumbnail,
    name,
    recoveredLocation,
    category,
    status,
    postType,
    title
  } = recoverItem;

  return (
    <div className="w-11/12 mx-auto my-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Thumbnail */}
        <div className="md:w-1/3 flex justify-center items-center bg-gray-100 p-4">
          <img
            src={thumbnail}
            alt="Recovered"
            className="w-full  object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-4 space-y-2">
          <h2 className="text-lg font-bold text-green-700 flex items-center gap-2">
            <AiOutlineCheckCircle className="text-green-600 text-xl" />
            {postType}
            <span className="badge badge-outline badge-info ml-2">
              {category}
            </span>
          </h2>

          <p className="text-sm text-gray-700 flex items-center gap-2">
            <MdOutlineTitle className="text-gray-500" />
            <strong>Title:</strong> {title}
          </p>

          <p className="text-sm text-gray-700 flex items-center gap-2">
            <AiOutlineUser className="text-gray-500" />
            <strong>Recovered by:</strong> {name}
          </p>

          <p className="text-sm text-gray-700 flex items-center gap-2">
            <MdOutlineLocationOn className="text-gray-500" />
            <strong>Location:</strong> {recoveredLocation}
          </p>

          <p className="text-sm text-amber-700 flex items-center gap-2 mt-2">
            <FaRegCheckCircle className="text-amber-600" />
            <strong>Status:</strong>
            <span className="px-2 py-1 border-2 border-amber-600 bg-amber-100 rounded text-sm">
              {status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoveredCard;
