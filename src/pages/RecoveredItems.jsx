import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import RecoveredTable from './RecoveredTable';
import RecoveredCard from './RecoverdCard';

const RecoveredItems = () => {
  const recoveredItems = useLoaderData();
  const [isTableView, setIsTableView] = useState(false);

  return (
    <div className='w-11/12 mx-auto my-6'>
      <button
        onClick={() => setIsTableView(!isTableView)}
        className="mb-4 px-4 py-2 bg-green-200 text-green-900 rounded hover:bg-green-300"
      >
        {isTableView ? 'Switch to Grid View' : 'Switch to Table View'}
      </button>

      {isTableView ? (
        <div className="overflow-x-auto bg-white rounded-md shadow">
          <table className="table-auto w-full text-left">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {recoveredItems.map((recoverItem) => (
                <RecoveredTable key={recoverItem._id} recoverItem={recoverItem} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {recoveredItems.map((recoverItem) => (
            <RecoveredCard key={recoverItem._id} recoverItem={recoverItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
