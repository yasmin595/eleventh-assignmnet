import React from 'react';

const RecoveredTable = ({ recoverItem }) => {
  const { name, recoveredLocation, category, date, title } = recoverItem;

  return (
     <div className='w-11/12 mx-auto bg-base-200 rounded-xl shadow-xl p-6 mt-10'>
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">My Recovered Items</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          <thead className="bg-green-800 text-white">
          <tr>
            <th className="p-3 border-2 border-white">Recovered By</th>
            <th className="p-3 border-2 border-white">Recovered Location</th>
            <th className="p-3 border-2 border-white">Title</th>
            <th className="p-3 border-2 border-white">Category</th>
            <th className="p-3 border-2 border-white">Recovered Date</th>
          </tr>
          </thead>
          <tbody>
              <tr className="hover:bg-green-50 transition duration-200">
            <td className="border-2 border-white px-4 py-2">{name}</td>
            <td className="border-2 border-white px-4 py-2">{recoveredLocation}</td>
            <td className="border-2 border-white px-4 py-2 font-medium text-gray-900">{title}</td>
            <td className="border-2 border-white px-4 py-2">{category}</td>
            <td className="border-2 border-white px-4 py-2">{date}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecoveredTable;
