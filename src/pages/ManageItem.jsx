import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import ManageItemTable from './ManageItemTable';
import { manageItemPromise } from '../api/ManageItemApi';

 

const ManageItem = () => {
    const {user} = use(AuthContext);

    
  
    return (
        <div className='mx-auto my-8 w-11/12'>
         <ManageItemTable manageItemPromise={manageItemPromise(user?.email)}>
           
         </ManageItemTable>
        </div>
    );
};

export default ManageItem;