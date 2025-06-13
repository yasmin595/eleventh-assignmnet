import React from 'react';
import LatestFoundLost from '../LatestFoundLost';
import { Link, useLoaderData } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { motion } from "framer-motion";

const Home = () => {
      const items = useLoaderData();
    console.log(items)
    return (
        <div className='w-11/12 mx-auto my-8'>
               <motion.h1
               
        initial={{ opacity: 0, scale: 0.0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
               
               className='font-bold py-2 bg-white text-2xl text-green-800 md:flex my-4 '> Latest Find & Lost Item Section </motion.h1>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
           {
items.map(item => <LatestFoundLost key={item._id} item={item}></LatestFoundLost>)

           }
          
        </div>
<div>    <Link to="allItems"  className="btn  hover:bg-green-800 hover:text-white   mx-auto p-4 m-6 ml-4 md:flex justify-center items-center bg-green-100 text-green-800"> <span><FaEye /></span>See All</Link></div>
       
        </div>
    );
};

export default Home;