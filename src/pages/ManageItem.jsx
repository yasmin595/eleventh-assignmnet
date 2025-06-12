import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import ManageItemTable from './ManageItemTable';
import { manageItemPromise } from '../api/ManageItemApi';

 

const ManageItem = () => {
    const {user,logOut } = use(AuthContext);

    // console.log( 'token in the context',  user.accessToken)

    
  
    return (
        <div className='mx-auto my-8 w-11/12'>
         <ManageItemTable manageItemPromise={manageItemPromise(user?.email, user.accessToken, logOut)}>
           
         </ManageItemTable>
        </div>
    );
};

export default ManageItem;