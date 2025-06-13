import React, { useEffect, useState } from 'react';

import RecoveredTable from './RecoveredTable';
import RecoveredCard from './RecoverdCard';
import { MdTableChart } from "react-icons/md";
import { MdGridView } from "react-icons/md"; 


const RecoveredItems = ({manageRecoverPromise}) => {
 const [tables, setTables] = useState([]);

  useEffect(() => {
  
   manageRecoverPromise
      .then((data) => {
        setTables(data);
      })
      .catch((err) => {
        console.error('Failed to fetch items:', err);
      });
  }, [manageRecoverPromise]);


  const [isTableView, setIsTableView] = useState(false);

  return (
    <div className='w-11/12 mx-auto my-6'>
      {tables.length === 0 && (
  <p className="text-center text-green-600 mt-4">You haven't added any recovered items yet.</p>
)}
      <button
        onClick={() => setIsTableView(!isTableView)}
        className="mb-4 px-4 py-2 bg-green-100 text-green-900 rounded hover:bg-green-800 hover:text-white"
      >
        {isTableView ?  <div className='flex justify-center items-center'> <MdGridView className="mr-2" /> '  Switch to Grid View '</div> : <div className='flex justify-center items-center'><MdTableChart className="mr-2" />  'Switch to Table View'</div>}
      </button>

      {isTableView ? (
        <div className="overflow-x-auto bg-white rounded-md shadow grid grid-cols-1  gap-6">
           {tables.map((recoverItem) => (
                <RecoveredTable key={recoverItem._id} recoverItem={recoverItem} />
              ))}
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full'>
          {tables.map((recoverItem) => (
            <RecoveredCard key={recoverItem._id} recoverItem={recoverItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
