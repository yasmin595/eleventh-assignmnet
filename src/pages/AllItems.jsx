import React from 'react';
import { useLoaderData } from 'react-router';
import AllItemsCard from './AllItemsCard';

const AllItems = () => {
       const allItems = useLoaderData();
       console.log(allItems)
    return (
             <div className='w-11/12 mx-auto my-8'>
               <h1 className='font-bold py-2 bg-white text-2xl text-green-800 md:flex my-4 '> Latest Find & Lost Item Section </h1>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
           {
allItems.map(allItem => <AllItemsCard key={allItem._id} allItem={allItem}></AllItemsCard>)

           }
        </div>

        {/* <button>see all</button> */}
        </div>
    );
};

export default AllItems;