import React from 'react';

const DetailsCard = ({item}) => {


    
//         {
//     "_id": "6845b9aa57f41355bafb1f14",
//     "postType": "lost Items",
//     "thumbnail": "https://i.ibb.co/NnY9D5cB/download-5.jpg",
//     "title": "lost my gadget",
//     "category": "gadgets",
//     "description": "i lost my gadget",
//     "location": "bangladesh",
//     "date": "06/10/2025",
//     "name": "rifat",
//     "email": "mdrifatnicevedio202@gmail.com"
//   },


    const { postType, _id, title, thumbnail, category,description } = item

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
               <p className='text-sm font-light flex  items-center p-1 '> <span className='text-xl'></span><span className='font-extrabold p-1'>:</span>  {title}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'> </span><span className='font-extrabold p-1'>:</span>  {category}</p>
           <p className='text-sm font-light flex  items-center p-1'> <span className='text-xl'></span><span className='font-extrabold p-1'>:</span>  {description}</p>
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

export default DetailsCard;