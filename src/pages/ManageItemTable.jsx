import React, { useEffect, useState } from 'react';
import TableManage from './TableManage';

const ManageItemTable = ({ manageItemPromise }) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
  
    manageItemPromise
      .then((data) => {
        setTables(data);
      })
      .catch((err) => {
        console.error('Failed to fetch items:', err);
      });
  }, [manageItemPromise]);

  return (
        <div className='w-11/12 mx-auto my-8  bg-gray-100 dark:bg-gray-800 p-4 '>
           <div className='grid grid-cols-1  gap-2 '>
           {
tables.map(table => <TableManage key={table._id} table={table}  tables={tables}  setTables={setTables}></TableManage>)

           }
        </div>
        </div>
  );
};

export default ManageItemTable;