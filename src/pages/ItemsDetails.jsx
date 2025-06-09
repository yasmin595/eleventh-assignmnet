import React, {} from 'react';
import { useLoaderData, } from 'react-router';
import DetailsCard from './DetailsCard';

const ItemsDetails = () => {
    const {title} = useLoaderData();

    
    // console.log(item)
  

    return (
        <div className='w-11/12  bg-gray-100 dark:bg-gray-800 p-4 mx-auto my-8 flex flex-col '>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
        <p>{title}</p>


        
        </div>
 </div>
    );
};

export default ItemsDetails;