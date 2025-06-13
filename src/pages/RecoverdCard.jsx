import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdOutlineDescription, MdOutlineTitle } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import { Link } from 'react-router';

const RecoveredCard = ({recoverItem}) => {
     const {thumbnail,title,  category, description, postType, _id   } = recoverItem

    return (
          <div className='w-11/12 mx-auto '>
          
       
          <div className="card w-xl card-side bg-base-100 shadow-sm">
        
          <div>
             <figure>
           <img className='w-11/12 flex justify-center items-center py-4'
             src={thumbnail}
             alt="picture" />
         </figure>
          </div>
        
         <div className="card-body w-full  ">
           <h2 className="card-title font-semibold ">{postType}</h2>
           <div className=' w-full  '>
               <p className='text-sm font-light flex  items-center p-1 '> <span className='text-xl'><MdOutlineTitle /> </span><span className='font-extrabold p-1'>:</span>  {title}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'><TbCategory /> </span><span className='font-extrabold p-1'>:</span>  {category}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'><MdOutlineDescription /> </span><span className='font-extrabold p-1'>:</span>  {description}</p>
           </div>
          
           <div className="card-actions justify-end">
              <Link to={`/items/${_id}`}>
      <button className="btn bg-green-100 text-green-800"> <span><FaEye /></span>View details</button>
   </Link>
           </div>
         </div>
       </div>
                  
               </div>
    );
};

export default RecoveredCard;